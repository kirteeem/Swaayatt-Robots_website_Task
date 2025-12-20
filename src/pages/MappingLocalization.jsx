import React from "react";
import VideoGrid from "../components/VideoGrid";
import { mappingLocalizationVideos } from "../data/mappingLocalizationVideos";

const MappingLocalization = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* --- Hero Section --- */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">

          <img
            src="/images/research/mapping/mapping.webp"
            alt="Mapping and Localization Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mapping & Localization
            </h1>

            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
              High-precision mapping and real-time localization built for dynamic, unpredictable environments.
            </p>
          </div>

        </div>
      </section>

      {/* --- Intro Text --- */}
      <section className="px-6 md:px-16 py-12">
        <p className="max-w-[1497px] text-lg md:text-[32px] leading-snug md:leading-[32px] tracking-[-0.64px] font-medium text-[#686868]">
          These videos demonstrate high-precision mapping and real-time localization across diverse and dynamic settings.
        </p>
      </section>

      {/* --- Video Grid --- */}
      <VideoGrid videos={mappingLocalizationVideos} />

    </div>
  );
};

export default MappingLocalization;
