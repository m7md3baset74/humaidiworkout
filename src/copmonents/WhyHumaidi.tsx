import Image from "next/image";
import { FaAppleAlt, FaDumbbell, FaComments } from "react-icons/fa";

const WhyHumaidi = () => {
  return (
    <section id="whyHumaidi" className="px-4 md:px-12 py-20">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Why <span className="text-green-300">Humaidi</span>
          <span> ?</span>
        </h3>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          More than training — a complete lifestyle transformation
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 2 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden">
          <div className="relative h-86">
            <Image
              src="/images/why2.png"
              alt="Personal training"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-2">
            <FaDumbbell className="text-green-300 text-3xl" />
            <h4 className="text-lg font-semibold">
              Smart & Personalized Training
            </h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Training programs built around your body type, fitness level, and
              lifestyle — not generic plans copied for everyone.
            </p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden">
          <div className="relative h-86">
            <Image
              src="/images/whysec1.png"
              alt="Healthy nutrition"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3">
              <FaAppleAlt className="text-green-300 text-3xl mb-2" />
              <h4 className="text-lg font-semibold mb-1">
                Healthy Nutrition System
              </h4>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              A balanced nutrition plan designed for better digestion and
              long-term health, with enjoyable meals you can actually stick to —
              no extreme diets.
            </p>
          </div>
        </div>

        

        {/* Card 3 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden">
          <div className="relative h-86">
            <Image
              src="/images/whysec3.png"
              alt="Coaching support"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 ">
            <FaComments className="text-green-300 text-3xl mb-2" />
            <h4 className="text-lg font-semibold mb-1">
              Real Support & Follow-Up
            </h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Continuous follow-ups, progress tracking, and direct communication
              to keep you consistent and motivated throughout your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 flex flex-row justify-center gap-12 text-center">
        <div>
          <p className="text-4xl font-extrabold text-green-300">+200</p>
          <p className="text-gray-400 text-sm mt-2">Clients Transformed</p>
        </div>

        <div>
          <p className="text-4xl font-extrabold text-green-300">+5</p>
          <p className="text-gray-400 text-sm mt-2">Years Experience</p>
        </div>
      </div>
    </section>
  );
};

export default WhyHumaidi;
