import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section id="pricing" className="px-4 md:px-12 py-20">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Pricing <span className="text-green-300">Plans</span>
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Choose the plan that fits your goals and commitment
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
        {/* 1 Month */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
          <h4 className="text-xl font-semibold mb-2">1 Month</h4>
          <p className="text-gray-400 text-sm mb-6">Starter Plan</p>

          <div className="text-4xl font-extrabold mb-6">
            $49{" "}
            <span className="text-sm font-normal text-gray-400">/ month</span>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Custom workout plan
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Basic nutrition guidance
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Weekly check-ins
            </li>
          </ul>

          <Link
            href="https://api.whatsapp.com/send/?phone=971527827184&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
          >
            <button className="w-full py-3 rounded-full bg-white/10 hover:bg-green-300 hover:text-black hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* 3 Months - Popular */}
        <div className="relative bg-[#111827] p-10 rounded-2xl border-2 border-green-300 scale-105">
          {/* Badge */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-300 text-black text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>

          <h4 className="text-xl font-semibold mb-2">3 Months</h4>
          <p className="text-gray-400 text-sm mb-6">Best Results Plan</p>

          <div className="text-4xl font-extrabold mb-6">
            $129{" "}
            <span className="text-sm font-normal text-gray-400">/ total</span>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Personalized workout
              program
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Full nutrition plan
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Weekly progress tracking
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> WhatsApp support
            </li>
          </ul>

          <button className="w-full py-3 rounded-full bg-green-300 text-black font-semibold hover:opacity-80 hover:scale-105 transition">
            Start Now
          </button>
        </div>

        {/* 6 Months */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
          <h4 className="text-xl font-semibold mb-2">6 Months</h4>
          <p className="text-gray-400 text-sm mb-6">Ultimate Transformation</p>

          <div className="text-4xl font-extrabold mb-6">
            $222{" "}
            <span className="text-sm font-normal text-gray-400">/ 6 Months</span>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Long-term training strategy
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Advanced nutrition coaching
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Weekly adjustments
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Priority support
            </li>
          </ul>

          <button className="w-full py-3 rounded-full bg-white/10 hover:bg-green-300 hover:text-black hover:scale-105 transition">
            Join Now
          </button>
        </div>
        <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
          <h4 className="text-xl font-semibold mb-2">1 Year</h4>
          <p className="text-gray-400 text-sm mb-6">Ultimate Transformation</p>

          <div className="text-4xl font-extrabold mb-6">
            $399{" "}
            <span className="text-sm font-normal text-gray-400">/ year</span>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 mb-8">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Long-term training strategy
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Advanced nutrition coaching
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Weekly adjustments
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-300" /> Priority support
            </li>
          </ul>

          <button className="w-full py-3 rounded-full bg-white/10 hover:bg-green-300 hover:text-black hover:scale-105 transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
