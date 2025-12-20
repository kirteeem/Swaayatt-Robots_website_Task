import React from "react";
import VideoGrid from "../components/VideoGrid";
import { motionPlanningVideos } from "../data/motionPlanningVideos";


const MotionPlanning = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">
          <img src="/images/research/motion-planning/motion.webp" alt="Motion Planning Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold mb-4">
              Motion Planning & Decision Making
            </h1>
            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
             Reinforcement-driven motion planning and robust decision strategies for real-world autonomous mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-16 py-12">
        <p className="max-w-[1497px] text-lg md:text-[32px] leading-snug md:leading-[32px] tracking-[-0.64px] font-medium text-[#686868]">
          These videos demonstrate advanced motion planning and adaptive decision-making in stochastic dynamic traffic, employing reinforcement learning and robust control strategies.
        </p>
      </section>

      {/* Videos */}
      <VideoGrid videos={motionPlanningVideos} />

    </div>
  );
};

export default MotionPlanning;
