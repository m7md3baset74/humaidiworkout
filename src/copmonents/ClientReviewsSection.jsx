"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = Array.from({ length: 9 }, (_, i) => `/images/client${i + 1}.jpeg`);

export default function ClientReviewsSection() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);

  const visibleDesktop = 4;

  /* ============== AUTOPLAY ============== */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* ============== SWIPE (MOBILE) ============== */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) setIndex((i) => (i + 1) % images.length);
    if (diff < -50)
      setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  return (
    <section id="" className="py-20 overflow-hidden">
        
        <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Client <span className="text-green-300">Reviews</span>
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Real results from real clients. See how our work makes a difference.
        </p>
      </div>

      <div
        className="relative md:px-2"
        ref={sliderRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${
              (index * 100) / (window.innerWidth >= 768 ? visibleDesktop : 1)
            }%)`,
          }}
        >
          {images.concat(images).map((src, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[25%] px-3"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt="Client review"
                  fill
                  className="object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}