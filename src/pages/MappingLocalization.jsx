import React from "react";
import mappingLocalizationVideos from "../data/mappingLocalizationVideos";

/* ================= HERO IMAGE ================= */
/* 🔴 FIXED: Public assets must use /images/... (not ../../public/...) */
const heroImage = "/images/research/mapping/mapping.webp";

const MappingAndLocalization = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      {/* 🔴 CHANGED: max-w-screen-xl ➜ max-w-[1440px]
          Reason: Too much left/right space on large screens & 80% zoom */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-8">
        <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden bg-gray-900">
          <img
            src={heroImage}
            alt="Mapping and localization autonomous driving"
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
              Mapping and Localization
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
              High-precision mapping and real-time localization built for dynamic,
              unpredictable environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      {/* 🔴 CHANGED: unified container width + typography */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <p
          className="
            max-w-4xl
            text-[18px]
            leading-[28px]
            text-[#4B5563]
          "
        >
          These demonstrations highlight our autonomous driving technology (i)
          enabling navigation through unstructured environments, with complex
          road conditions, and (ii) effectively negotiating stochastic, complex,
          and adversarial traffic-dynamics.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      {/* 🔴 CHANGED: max-w-screen-xl ➜ max-w-[1440px] */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mappingLocalizationVideos.map((card) => (
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
                {/* 🔴 FIXED: removed bold + leading-none */}
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

                {/* Description (NO CLAMP) */}
                {/* 🔴 FIXED: removed line-clamp & tight line-height */}
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

export default MappingAndLocalization;
