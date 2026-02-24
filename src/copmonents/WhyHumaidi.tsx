"use client";

import Image from "next/image";
import { FaAppleAlt, FaDumbbell, FaComments } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhyHumaidi = () => {
  const t = useTranslations("WhyHumaidi");

  const cards = [
    {
      key: "training",
      icon: <FaDumbbell className="text-green-300 text-3xl" />,
      image: "/images/why2.png",
    },
    {
      key: "nutrition",
      icon: <FaAppleAlt className="text-green-300 text-3xl mb-1" />,
      image: "/images/whysec1.png",
    },
    {
      key: "support",
      icon: <FaComments className="text-green-300 text-3xl" />,
      image: "/images/whysec3.png",
    },
  ];

  return (
    <section id="whyHumaidi" className="px-4 md:px-12 py-20">

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          {t("titlePart1")}{" "}
          <span className="text-green-300">{t("titleHighlight")}</span>{" "}
          <span>{t("mark")}</span>
        </h3>

        <p className="mt-4 text-gray-400 text-sm md:text-base">
          {t("description")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.key}
            className="
              bg-[#111827]
              rounded-2xl
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-green-300/10
            "
          >
            <div className="relative h-86">
              <Image
                src={card.image}
                alt={t(`cards.${card.key}.title`)}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                {card.icon}
                <h4 className="text-lg font-semibold">
                  {t(`cards.${card.key}.title`)}
                </h4>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {t(`cards.${card.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 flex flex-row justify-center gap-12 text-center">
        <div>
          <p className="text-4xl font-extrabold text-green-300">
            {t("stats.clients.number")}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {t("stats.clients.label")}
          </p>
        </div>

        <div>
          <p className="text-4xl font-extrabold text-green-300">
            {t("stats.experience.number")}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {t("stats.experience.label")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHumaidi;