"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const transformations = [
  "/images/transformations/trans1.jpg",
  "/images/transformations/trans2.jpg",
  "/images/transformations/trans3.jpg",
  "/images/transformations/trans4.jpg",
  "/images/transformations/trans5.jpg",
  "/images/transformations/trans6.jpg",
  "/images/transformations/trans7.jpg",
  "/images/transformations/trans8.jpg",
  "/images/transformations/trans9.jpg",
  "/images/transformations/trans10.jpg",
  "/images/transformations/trans11.jpg",
  "/images/transformations/trans12.jpg",
  "/images/transformations/trans13.jpg",
  "/images/transformations/trans14.jpg",
  "/images/transformations/trans15.jpg",
  "/images/transformations/trans16.jpg",
  "/images/transformations/trans17.jpg",
  "/images/transformations/trans18.jpg",
  "/images/transformations/trans19.jpg",
  "/images/transformations/trans20.jpg",
  "/images/transformations/trans21.jpg",
  "/images/transformations/trans22.jpg",
];

export default function TransformationsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);


  useEffect(() => {
  if (!emblaApi) return;

  const updateSnaps = () => {
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  updateSnaps();

  emblaApi.on("select", updateSnaps);
  emblaApi.on("reInit", updateSnaps);

  return () => {
    emblaApi.off("select", updateSnaps);
    emblaApi.off("reInit", updateSnaps);
  };
}, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      id="transformations"
      className="px-4 md:px-12 py-20 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Transformations
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Real results. Real commitment. Real change.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {transformations.map((img, index) => {
              const isActive = index === selectedIndex;

              return (
                <div
                  key={index}
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] px-2"
                >
                  <div
                    className={`relative aspect-[1.37/1.4] rounded-2xl overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-40"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Transformation"
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={scrollPrev}
            className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-green-300 hover:text-black transition"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-green-300 hover:text-black transition"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-6 bg-green-400"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}