"use client";

import { FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const socialLinks = {
  youtube: "https://www.youtube.com/@humaidiomar",
  instagram:
    "https://www.instagram.com/humaidi_workout",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=971527827184",
  tiktok: "https://www.tiktok.com/@humaidi_workout",
};

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden md:flex md:items-center md:justify-between md:px-12 md:pt-15"
    >
      {/* ===== MOBILE BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 md:hidden rounded-2xl p-6">
        <Image
          src="/images/hero.jpg"
          alt="Humaidi Workout Coach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/5 to-black/50" />
      </div>

      {/* ===== TEXT CONTENT ===== */}
      <div
        className="relative z-10 min-h-screen md:min-h-0 px-4 flex flex-col justify-center items-center text-center md:w-1/2
       md:items-start ltr:md:text-left  rtl:md:text-right">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
          <span className="text-green-300">
            {t("titleLine3", { name: "Humaidi Omar" })}
          </span>
        </h2>

        <p className="mt-4 text-gray-200 md:text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
          {t("description")}
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 w-10 h-10 rounded-full bg-white/10 md:bg-[#111827] backdrop-blur flex items-center justify-center hover:bg-green-300 hover:text-black transition"
          >
            <FaYoutube />
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 w-10 h-10 rounded-full bg-white/10 md:bg-[#111827] backdrop-blur flex items-center justify-center hover:bg-green-300 hover:text-black transition"
          >
            <FaInstagram />
          </a>

          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 w-10 h-10 rounded-full bg-white/10 md:bg-[#111827] backdrop-blur flex items-center justify-center hover:bg-green-300 hover:text-black transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 w-10 h-10 rounded-full bg-white/10 md:bg-[#111827] backdrop-blur flex items-center justify-center hover:bg-green-300 hover:text-black transition"
          >
            <FaTiktok />
          </a>
        </div>

        <a
          href="#pricing"
          className="bg-white/10 md:bg-[#111827] backdrop-blur group relative overflow-hidden rounded-full border border-white/30 px-6 py-2 text-white 
                     font-medium text-lg inline-flex items-center justify-center transition-all duration-300 transform 
                     hover:translate-y-[-2px] hover:shadow-lg hover:border-none md:bg-green-300/70"
        >
          <span className="relative z-10">{t("cta")}</span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-300 transform scale-x-0 
                       group-hover:scale-100 transition-all duration-300 origin-left"
          ></div>
        </a>
      </div>

      {/* ===== DESKTOP IMAGE ===== */}
      <div className="hidden md:flex md:w-1/2 relative justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-blue-500 blur-3xl opacity-30" />

        <div className="relative w-full max-w-md aspect-[3/4] h-140 md:mb-4">
          <Image
            src="/images/hero.jpg"
            alt="Humaidi Workout Coach"
            fill
            priority
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
