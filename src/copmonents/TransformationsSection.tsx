"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const transformations = [
  {
    before: "/images/before1.jpeg",
    after: "/images/after1.jpeg",
  },
  
];

export default function TransformationsSection() {
  const [index, setIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
      if (showAfter) {
        setIndex((prev) => (prev + 1) % transformations.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [showAfter, autoPlay]);

  const nextImage = () => {
    setAutoPlay(false);

    if (!showAfter) {
      setShowAfter(true);
    } else {
      setShowAfter(false);
      setIndex((prev) => (prev + 1) % transformations.length);
    }
  };

  const prevImage = () => {
    setAutoPlay(false);

    if (showAfter) {
      setShowAfter(false);
    } else {
      setIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
      setShowAfter(true);
    }
  };

  return (
    <section id="transformations" className="px-4 md:px-12 py-20">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Transformations
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Every change tells a story of hard work and dedication.
        </p>
      </div>

        {/* Image Card */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative w-full aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={
                showAfter
                  ? transformations[index].after
                  : transformations[index].before
              }
              alt="Transformation"
              fill
              className="object-cover transition-opacity duration-700 md:object-contain"
            />

            {/* Label */}
            <div className="absolute top-4 left-4 bg-black/30 px-4 py-1 rounded-full text-sm text-white">
              {showAfter ? "After" : "Before"}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 items-center mt-6">
            <button
              onClick={prevImage}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-green-300 hover:text-black transition"
            >
              ← Back
            </button>

            <button
              onClick={nextImage}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-green-300 hover:text-black transition"
            >
              Next →
            </button>
          </div>
        </div>
    </section>
  );
}
