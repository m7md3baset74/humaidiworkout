import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaArrowUp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
    relative 
    bg-cover 
    bg-center
    bg-[url('/images/footer.jpg')]
    md:bg-[url('/images/footer2.jpg')]
    lg:bg-contain
  "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14">
        {/* Top Content */}
        <div className="grid gap-10 md:grid-cols-2 text-center md:text-left">
          {/* About */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">
              Coach Humaidi
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Certified fitness coach focused on building sustainable habits
              through smart training and balanced nutrition — no extremes, just
              real results.
            </p>
          </div>

          {/* Social */}
          <div className="flex md:justify-end justify-center gap-4 text-2xl">
            <a className="footer-icon hover:text-green-300">
              <FaInstagram />
            </a>
            <a className="footer-icon hover:text-green-300">
              <FaFacebookF />
            </a>
            <a className="footer-icon hover:text-green-300">
              <FaTiktok />
            </a>
            <a className="footer-icon hover:text-green-300">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex items-center justify-between py-4 text-xs text-gray-400">
          <span>
            © 2026 Designed & Developed by{" "}
            <span className="text-white">3baset_74</span>
          </span>

          <a
            href="#hero"
            className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-300 hover:text-black transition"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
