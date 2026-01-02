"use client";

import { useState } from "react";

const features = [
  {
    title: "Planning & Decision",
    desc:
      "Our state-of-the-art planning algorithms, powered by unsupervised learning, reinforcement learning, and (inverse-)reinforcement learning, excel at mastering unknown and unseen on- and off-road environments.",
  },
  {
    title: "Localization",
    desc:
      "Our state-of-the-art localization technology achieves pin point accuracy with sparse maps, eliminating the need for dense HD maps.",
  },
  {
    title: "Perception",
    desc:
      "Our computationally efficient deep neural networks deliver ultra-high FPS on edge computing platforms.",
  },
  {
    title: "Controls",
    desc:
      "Our reinforcement learning based control systems translate high-level plans into smooth, precise movements, ensuring unparalleled safety, efficiency on every journey.",
  },
];

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black mt-20">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/Home/head-3.webp"
          alt=""
          className="w-full h-full object-cover blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* ================= GRID LINES ================= */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-[16px] lg:left-[190px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
        <div className="absolute right-[18px] lg:right-[190px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        <div className="absolute left-[30%] top-0 bottom-[240px] w-px bg-white/20 translate-x-4" />
        <div className="absolute left-[50%] top-0 bottom-[240px] w-px bg-white/20 translate-x-4" />
        <div className="absolute left-[70%] top-0 bottom-[240px] w-px bg-white/20 translate-x-4" />
      </div>

      {/* ================= HORIZONTAL LINE + DIAMOND ================= */}
      <div className="absolute top-[140px] left-0 right-0 z-20">
        <div className="h-px bg-white/30 w-full" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div
            className="absolute -top-1 w-2 h-2 rotate-45 bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] transition-all duration-300"
            style={{
              left: `calc(${activeIndex} * 25% + 12.5%)`,
              transform: "translateX(-50%) rotate(45deg)",
            }}
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-40">

        {/* ================= TEXT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 text-center">
          {features.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className="cursor-pointer px-4 sm:px-6 lg:px-10"
            >
              {/* TITLE */}
              <h3
                className={`
                  font-['Chivo_Mono']
                  whitespace-nowrap
                  text-[22px]
                  sm:text-[26px]
                  lg:text-[32px]
                  leading-[100%]
                  tracking-[-0.04em]
                  mb-4
                  transition-colors duration-200
                  ${activeIndex === i ? "text-white" : "text-white/50"}
                `}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className={`
                  font-['Rethink_Sans']
                  text-[14px]
                  sm:text-[16px]
                  lg:text-[18px]
                  leading-[120%]
                  tracking-[-0.02em]
                  transition-colors duration-200
                  ${activeIndex === i ? "text-white" : "text-white/40"}
                `}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FRONT IMAGE ================= */}
      <div className="relative z-20 max-w-6xl mx-auto mt-24 px-6 pb-24">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <img
            src="/images/Home/head-3.webp"
            alt="Autonomous car"
            className="w-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
