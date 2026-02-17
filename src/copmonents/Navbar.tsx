"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Transformations", href: "#transformations" },
    { label: "Programs", href: "#programs" },
    { label: "Client Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Humaidi", href: "#whyHumaidi" },
  ];

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
        <ul className="hidden md:flex gap-8 text-sm font-medium">
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
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur px-6 py-6 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-lg cursor-pointer hover:text-green-300"
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
