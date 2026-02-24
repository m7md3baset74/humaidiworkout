"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("transformations"), href: "#transformations" },
    { label: t("programs"), href: "#programs" },
    { label: t("reviews"), href: "#reviews" },
    { label: t("pricing"), href: "#pricing" },
    { label: t("why"), href: "#whyHumaidi" },
  ];

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(`/${newLocale}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition
      ${scrolled ? "backdrop-blur bg-black/40" : "bg-transparent"}`}
    >
      <div className="px-4 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold">
          Humaidi <span className="text-green-300">Workout</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 rtl:gap-12 text-sm font-medium items-center">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="cursor-pointer hover:text-green-300 transition"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Language Switcher */}
          <li>
            <div className="relative w-20 h-9 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center p-1">
              <motion.div
                layoutId="lang-indicator-desktop"
                transition={{ type: "spring", stiffness: 100, damping: 14 }}
                className="absolute top-1 bottom-1 w-[50%] rounded-full bg-green-300"
                style={{
                  left: locale === "en" ? "4px" : "calc(50% - 35px)",
                }}
              />

              <button
                onClick={() => locale !== "en" && switchLanguage()}
                className={`relative z-10 w-1/2 text-xs font-semibold ${
                  locale === "en" ? "text-black" : "text-white/70"
                }`}
              >
                EN
              </button>

              <button
                onClick={() => locale !== "ar" && switchLanguage()}
                className={`relative z-10 w-1/2 text-xs font-semibold ${
                  locale === "ar" ? "text-black" : "text-white/70"
                }`}
              >
                AR
              </button>
            </div>
          </li>
        </ul>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="relative w-20 h-9 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center p-1 hover:shadow-lg">
            <motion.div
              layoutId="lang-indicator-mobile"
              transition={{ type: "spring", stiffness: 75, damping: 12 }}
              className="absolute top-1 bottom-1 w-[50%] rounded-full bg-green-300"
              style={{
                left: locale === "en" ? "4px" : "calc(50% - 35px)",
              }}
            />

            <button
              onClick={() => locale !== "en" && switchLanguage()}
              className={`relative z-10 w-1/2 text-xs font-semibold ${
                locale === "en" ? "text-black" : "text-white/70"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => locale !== "ar" && switchLanguage()}
              className={`relative z-10 w-1/2 text-xs font-semibold ${
                locale === "ar" ? "text-black" : "text-white/70"
              }`}
            >
              AR
            </button>
          </div>

          <button className="text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur px-6 py-6 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-lg hover:text-green-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
