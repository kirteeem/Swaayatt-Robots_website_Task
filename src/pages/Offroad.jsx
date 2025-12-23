import React from "react";
import offroadVideos from "../data/offroadVideo";

/* ================= HERO IMAGE (PUBLIC PATH) ================= */
const heroImage = "/images/research/offroad/Offroad.webp";

const OffRoadPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden bg-gray-900">
          <img
            src={heroImage}
            alt="Off-road autonomous driving"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 text-white">
            <h1
              className="
                font-rethink
                font-medium
                tracking-[-0.02em]
                leading-none
                text-[40px]
                sm:text-[48px]
                md:text-[56px]
                lg:text-[68px]
              "
            >
              Off Road
            </h1>

            <p className="max-w-lg text-sm sm:text-base md:text-lg opacity-90 mt-2">
              Revolutionizing Autonomous Driving Beyond Structured Roads
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-6xl">
          These demonstrations highlight autonomous vehicles navigating
          challenging off-road terrains using advanced learning-based systems.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {offroadVideos.map((card) => (
            <div
              key={card.id}
              className="group cursor-pointer transition duration-300 ease-out"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 max-w-[519px]">
                <h3
                  className="
                    font-rethink
                    font-bold
                    text-[20px]
                    leading-none
                    tracking-[-0.02em]
                    text-[#3F3F3F]
                    line-clamp-2
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-[14px]
                    tracking-[-0.02em]
                    font-normal
                    text-[#737373]
                    line-clamp-3
                  "
                >
                  {card.description}
                </p>

                <p className="text-xs text-gray-400 mt-4 font-mono">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OffRoadPage;
