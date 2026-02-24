"use client";

import { FaDumbbell, FaAppleAlt, FaUserCheck, FaFire } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Programs = () => {
  const t = useTranslations("Programs");

  const programCards = [
    {
      icon: <FaDumbbell />,
      title: t("cards.personalTraining.title"),
      desc: t("cards.personalTraining.description"),
    },
    {
      icon: <FaAppleAlt />,
      title: t("cards.nutrition.title"),
      desc: t("cards.nutrition.description"),
    },
    {
      icon: <FaUserCheck />,
      title: t("cards.onlineCoaching.title"),
      desc: t("cards.onlineCoaching.description"),
    },
    {
      icon: <FaFire />,
      title: t("cards.fatLoss.title"),
      desc: t("cards.fatLoss.description"),
    },
  ];

  return (
    <section id="programs" className="px-4 md:px-12 py-20">

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          {t("titlePart1")}{" "}
          <span className="text-green-300">{t("titleHighlight")}</span>
        </h3>

        <p className="mt-4 text-gray-400 text-sm md:text-base">
          {t("description")}
        </p>
      </div>

      {/* Content */}
      <div
        className="
        grid gap-8 md:grid-cols-3 items-center
        ltr:md:grid-flow-col
        rtl:md:grid-flow-col-dense
        "
      >
        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[377px] rounded-2xl overflow-hidden">
          <Image
            src="/images/progsec.jpg"
            alt="Training Programs"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Cards */}
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
          {programCards.map((card, index) => (
            <div
              key={index}
              className="
              bg-[#111827]
              p-6
              rounded-2xl
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-green-300/10
              "
            >
              <div className="text-green-300 text-3xl mb-4">
                {card.icon}
              </div>

              <h4 className="text-lg font-semibold mb-2">
                {card.title}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;