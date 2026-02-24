"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const transformations = [
  "/images/transFolder/trans1.jpg",
  "/images/transFolder/trans2.jpg",
  "/images/transFolder/trans3.jpg",
  "/images/transFolder/trans4.jpg",
  "/images/transFolder/trans5.jpg",
  "/images/transFolder/trans6.jpg",
  "/images/transFolder/trans7.jpg",
  "/images/transFolder/trans8.jpg",
  "/images/transFolder/trans9.jpg",
  "/images/transFolder/trans10.jpg",
  "/images/transFolder/trans11.jpg",
  "/images/transFolder/trans12.jpg",
  "/images/transFolder/trans13.jpg",
  "/images/transFolder/trans14.jpg",
  "/images/transFolder/trans15.jpg",
  "/images/transFolder/trans16.jpg",
  "/images/transFolder/trans17.jpg",
  "/images/transFolder/trans18.jpg",
  "/images/transFolder/trans19.jpg",
  "/images/transFolder/trans20.jpg",
  "/images/transFolder/trans21.jpg",
  "/images/transFolder/trans22.jpg",
  "/images/transFolder/trans23.jpg",
  "/images/transFolder/trans24.jpg",
  "/images/transFolder/trans25.jpg",
  "/images/transFolder/trans26.jpg",
  "/images/transFolder/trans27.jpg",
  "/images/transFolder/trans28.jpg",
  "/images/transFolder/trans29.jpg",
  "/images/transFolder/trans30.jpg",
  "/images/transFolder/trans31.jpg",
  "/images/transFolder/trans32.jpg",
  "/images/transFolder/trans33.jpg",
  "/images/transFolder/trans34.jpg",
];

export default function TransformationsSection() {
  const t = useTranslations("Transformations");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    direction: isRTL ? "rtl" : "ltr",
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
        <h3 className="text-3xl md:text-4xl font-extrabold">{t("title")}</h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          {t("description")}
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
                      isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Client Transformation"
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover"
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
            className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-green-300 hover:text-black transition flex items-center justify-center"
          >
            {isRTL ? <FiChevronRight /> : <FiChevronLeft />}
          </button>

          <button
            onClick={scrollNext}
            className="h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur hover:bg-green-300 hover:text-black transition flex items-center justify-center"
          >
            {isRTL ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps
            .slice(
              Math.max(0, selectedIndex - 5),
              Math.min(scrollSnaps.length, selectedIndex + 6),
            )
            .map((_, i) => {
              const index = Math.max(0, selectedIndex - 5) + i;
              const isActive = index === selectedIndex;

              return (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-6 bg-green-300"
                      : "w-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
