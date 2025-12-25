import React from "react";
import motionPlanningVideos from "../data/motionPlanningVideos";

/* ================= HERO IMAGE ================= */
const heroImage = "/images/research/motion-planning/motion.webp";

const MotionPlanningPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      {/* 🔴 CHANGED: max-w-screen-xl ➜ max-w-[1440px] 
          Reason: Reduce extra left/right space on large screens & 80% zoom */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-8">
        <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden bg-gray-900">
          <img
            src={heroImage}
            alt="Motion planning and decision making"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 flex flex-col justify-center text-white px-6 sm:px-10 lg:px-16">
            <h1
              className="
                font-rethink
                font-medium
                tracking-[-0.02em]
                text-[40px]
                sm:text-[48px]
                lg:text-[56px]
                leading-[68px]
              "
            >
              Motion Planning and Decision Making
            </h1>

            <p
              className="
                max-w-xl
                mt-3
                text-[16px]
                leading-[24px]
                opacity-90
              "
            >
              Reinforcement-driven motion planning and robust decision strategies
              for real-world autonomous mobility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      {/* 🔴 CHANGED: max-w-screen-xl ➜ max-w-[1440px] */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <p
          className="
            max-w-4xl
            text-[18px]
            leading-[28px]
            text-[#4B5563]
          "
        >
          These videos demonstrate advanced motion planning and adaptive
          decision-making in stochastic dynamic traffic, employing reinforcement
          learning and robust control strategies.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      {/* 🔴 CHANGED: max-w-screen-xl ➜ max-w-[1440px] */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {motionPlanningVideos.map((card) => (
            <div key={card.id} className="cursor-pointer">

              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= TEXT ================= */}
              <div className="mt-4 max-w-[520px]">

                {/* Title */}
                <h3
                  className="
                    font-rethink
                    font-medium
                    text-[18px]
                    leading-[22px]
                    tracking-[-0.02em]
                    text-[#3F3F3F]
                  "
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    text-[14px]
                    leading-[20px]
                    tracking-[-0.01em]
                    text-[#6B7280]
                    overflow-visible
                    max-h-none
                  "
                >
                  {card.description}
                </p>

                {/* Date */}
                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-[16px]
                    text-[#9CA3AF]
                    font-mono
                  "
                >
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

export default MotionPlanningPage;
