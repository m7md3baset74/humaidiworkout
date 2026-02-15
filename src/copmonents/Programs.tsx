import { FaDumbbell, FaAppleAlt, FaUserCheck, FaFire } from "react-icons/fa";
import Image from "next/image";

const Programs = () => {
  return (
    <section id="programs" className="px-4 md:px-12 py-20">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Training <span className="text-green-300">Programs</span>
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Everything you need to reach your fitness goals
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-8 md:grid-cols-3 items-center">

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[377px] rounded-2xl overflow-hidden">
          <Image
            src="/images/progsec.jpg"
            alt="Humaidi Workout Coach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Cards */}
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
          
          {/* Card 1 */}
          <div className="bg-[#111827] p-6 rounded-2xl">
            <FaDumbbell className="text-green-300 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Personal Training
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Customized workout plans designed specifically
              for your body and goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] p-6 rounded-2xl">
            <FaAppleAlt className="text-green-300 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Nutrition Plan
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simple and effective nutrition guidance to
              support your training.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827] p-6 rounded-2xl">
            <FaUserCheck className="text-green-300 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Online Coaching
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Continuous follow-up and support to keep you
              motivated and consistent.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111827] p-6 rounded-2xl">
            <FaFire className="text-green-300 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Fat Loss Programs
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Structured programs focused on burning fat
              while preserving muscle.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Programs;