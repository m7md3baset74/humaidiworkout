import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaArrowUp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const achievements = [
    "🏅 Dubai Pro 6th Place 2025",
    "🏅 Dubai Muscle Show 4th Place 2024",
    "🏅 OCR TIGERS 33rd Place of 5,000 Players 2025",
    "🏅 GOV GAME Elite Team 12th Place 2025",
    "🥈🌍 EG WSWCF World Cup 2016 x2",
    "🥇 EG Calisthenics Champion 2015 x1",
    "🏅🌍 World Record 8,600 Push Ups 2022",
    "🏅 24h: Pullups / 560 Dips / 2K Pullups / 3K Pushups",
    "🥇 Street Lifting Egypt Champion 2018",
  ];

  return (
    <footer
      className="
        relative 
        bg-cover 
        bg-center
        bg-[url('/images/footer.jpg')]
        md:bg-[url('/images/footer2.jpg')]
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10">
        {/* Top */}
        <div className="grid gap-8 md:grid-cols-2 text-center md:text-left">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Coach Humaidi
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Certified fitness coach focused on sustainable habits through smart
              training and balanced nutrition.
            </p>
          </div>

          {/* Social */}
          <div className="flex md:justify-end justify-center gap-4 text-2xl">
             <a href="https://www.instagram.com/humaidi_workout?igsh=MTBwaWs5OTJnNDgxdw=="
             target="_blank"
             className="footer-icon hover:text-green-300">
              <FaInstagram />
            </a>
            <a href=""
            target="_blank"
            className="footer-icon hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@humaidi_workout"
            target="_blank"
            className="footer-icon hover:text-green-300">
              <FaTiktok />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=971527827184&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
            className="footer-icon hover:text-green-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8">
          <h5 className="text-sm font-semibold text-white mb-3 text-center md:text-left">
            Championships & Records
          </h5>

          <ul
            className="
              grid 
              gap-y-3 gap-x-8
              sm:grid-cols-2
              md:grid-cols-3
              text-sm
              text-gray-300
            "
          >
            {achievements.map((item, i) => (
              <li
                key={i}
                className="leading-snug flex items-start gap-2"
              >
                <span className="text-base">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex items-center md:justify-between  py-3 text-[11px] text-gray-400">
          <span>
            © 2026 Designed & Developed by{" "}
            <span className="text-white mr-6">3baset_74</span>
          </span>

          <a
            href="#hero"
            className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-300 hover:text-black transition"
          >
            <FaArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}