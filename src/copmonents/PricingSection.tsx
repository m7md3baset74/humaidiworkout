"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

const Pricing = () => {
  const t = useTranslations("Pricing");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const plans = [
    {
      key: "oneMonth",
      popular: false,
    },
    {
      key: "threeMonths",
      popular: true,
    },
    {
      key: "sixMonths",
      popular: false,
    },
    {
      key: "oneYear",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="px-4 md:px-12 py-20">

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          {t("titlePart1")}{" "}
          <span className="text-green-300">{t("titleHighlight")}</span>
        </h3>

        <p className="mt-4 text-gray-400 text-sm md:text-base">
          {t("description")}
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const isPopular = plan.popular;

          return (
            <div
              key={plan.key}
              className={`
              relative bg-[#111827] p-8 rounded-2xl
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:shadow-green-300/10
              ${
                isPopular
                  ? "border-2 border-green-300 scale-105"
                  : "border border-white/10"
              }
              `}
            >
              {/* Badge */}
              {isPopular && (
                <span
                  className={`
                  absolute -top-4
                  ${isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"}
                  bg-green-300 text-black text-xs font-bold px-4 py-1 rounded-full
                  `}
                >
                  {t("mostPopular")}
                </span>
              )}

              <h4 className="text-xl font-semibold mb-2">
                {t(`plans.${plan.key}.title`)}
              </h4>

              <p className="text-gray-400 text-sm mb-6">
                {t(`plans.${plan.key}.subtitle`)}
              </p>

              <div className="text-4xl font-extrabold mb-6">
                {t(`plans.${plan.key}.price`)}{" "}
                <span className="text-xl font-normal text-gray-400">
                  {t(`plans.${plan.key}.currency`)}
                </span>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {t.raw(`plans.${plan.key}.features`).map(
                  (feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheck className="text-green-300 shrink-0" />
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <Link
                href="https://api.whatsapp.com/send/?phone=971527827184&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <button
                  className={`
                  w-full py-3 rounded-full font-semibold transition
                  ${
                    isPopular
                      ? "bg-green-300 text-black hover:opacity-80"
                      : "bg-white/10 hover:bg-green-300 hover:text-black"
                  }
                  hover:scale-105
                  `}
                >
                  {t(`plans.${plan.key}.button`)}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;