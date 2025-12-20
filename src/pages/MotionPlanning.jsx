import React from "react";
import VideoGrid from "../components/VideoGrid";
import { motionPlanningVideos } from "../data/motionPlanningVideos";

const MotionPlanning = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">

          <img
            src="/images/research/motion-planning/motion.webp"
            alt="Motion Planning Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold mb-4">
              Motion Planning & Decision Making
            </h1>

            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
              Reinforcement-driven motion planning and robust decision strategies
              for real-world autonomous mobility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="
          max-w-[1497px]
          text-lg
          md:text-[32px]
          leading-snug
          md:leading-[32px]
          tracking-[-0.64px]
          font-medium
          text-[#686868]
        ">
          These videos demonstrate advanced motion planning and adaptive decision-making in stochastic dynamic traffic, employing reinforcement learning and robust control strategies.
        </p>
      </section>

      {/* ================= THUMBNAILS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="Motion Planning Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Urban Motion Planning
            </h3>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="Decision Making Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Decision Making in Traffic
            </h3>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="RL Control Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Reinforcement Learning Control
            </h3>
          </div>

          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="RL Control Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Reinforcement Learning Control
            </h3>
          </div>
          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="RL Control Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Reinforcement Learning Control
            </h3>
          </div>

        </div>
      </section>

    </div>
  );
};

export default MotionPlanning;
