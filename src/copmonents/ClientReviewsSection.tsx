"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ================= DATA ================= */
const IMAGES: string[] = Array.from(
  { length: 9 },
  (_, i) => `/images/review${i + 1}.jpeg`
);

const AUTOPLAY_DELAY = 2500;
const AUTOPLAY_RESUME_DELAY = 5000;
const VISIBLE_DESKTOP = 4;
const SWIPE_THRESHOLD = 40;

/* ================= COMPONENT ================= */
export default function ClientReviewsSection(){
  /* -------- STATE -------- */
  const [isDesktop, setIsDesktop] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [index, setIndex] = useState(VISIBLE_DESKTOP);

  /* -------- REFS -------- */
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isSwiping = useRef(false);

  /* -------- CLONED IMAGES -------- */
  const images = [
    ...IMAGES.slice(-VISIBLE_DESKTOP),
    ...IMAGES,
    ...IMAGES.slice(0, VISIBLE_DESKTOP),
  ];

  /* -------- SCREEN SIZE -------- */
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* -------- AUTOPLAY -------- */
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const resumeAutoplayLater = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(
      startAutoplay,
      AUTOPLAY_RESUME_DELAY
    );
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  /* -------- LOOP FIX -------- */
  useEffect(() => {
    if (index >= IMAGES.length + VISIBLE_DESKTOP) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(VISIBLE_DESKTOP);
      }, 700);
    }

    if (index < VISIBLE_DESKTOP) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(IMAGES.length + VISIBLE_DESKTOP - 1);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  /* -------- CONTROLS -------- */
  const next = () => {
    stopAutoplay();
    setIndex((i) => i + 1);
    resumeAutoplayLater();
  };

  const prev = () => {
    stopAutoplay();
    setIndex((i) => i - 1);
    resumeAutoplayLater();
  };

  /* -------- TOUCH (FIXED) -------- */
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);

    if (deltaX > SWIPE_THRESHOLD && deltaX > deltaY) {
      if (!isSwiping.current) {
        isSwiping.current = true;
        stopAutoplay();
      }
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSwiping.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > SWIPE_THRESHOLD) next();
    if (diff < -SWIPE_THRESHOLD) prev();

    resumeAutoplayLater();
  };

  /* ================= RENDER ================= */
  return (
    <section id="reviews" className="py-20 overflow-hidden">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Client <span className="text-green-300">Reviews</span>
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Real results from real clients. See how our work makes a difference.
        </p>
      </div>

      {/* Slider */}
      <div
        className="relative md:px-3"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        <div
          className={`flex ${
            enableTransition
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${
              (index * 100) / (isDesktop ? VISIBLE_DESKTOP : 1)
            }%)`,
          }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full md:min-w-[25%] px-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src={src} alt="Client review" fill />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="hidden md:flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-300 hover:text-black transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-300 hover:text-black transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}