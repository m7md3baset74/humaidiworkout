"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=971527827184"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999]"
    >
      {/* Glow Animation */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500/40"></span>

      {/* Button */}
      <div className="relative h-14 w-14 rounded-full bg-green-400 flex items-center justify-center text-white text-3xl shadow-lg 
                      animate-pulse hover:scale-110 transition">
        <FaWhatsapp />
      </div>
    </a>
  );
}