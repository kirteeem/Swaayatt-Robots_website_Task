import { useRef } from "react";
import VideoCard from "../components/VideoCard";
import PageContainer from "../components/PageContainer";

import onroadVideos from "../data/onroadVideo";
import offroadVideos from "../data/offroadVideo";
import perceptionVideos from "../data/perceptionVideos";
import motionPlanningVideos from "../data/motionPlanningVideos";
import mappingLocalizationVideos from "../data/mappingLocalizationVideos";

/* ================= ARROW BUTTON ================= */
const ArrowButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-11 h-11
        rounded-full
        border-2 border-[#2B2B2B]
        text-[#2B2B2B]
        flex items-center justify-center
        text-[20px] font-medium
        transition-all duration-200 ease-out
        hover:border-black
        hover:text-black
        hover:scale-[1.05]
        active:scale-95
      "
    >
      {children}
    </button>
  );
};

export default function Research() {
  const onRoadRef = useRef(null);
  const offRoadRef = useRef(null);
  const motionRef = useRef(null);
  const perceptionRef = useRef(null);
  const mappingRef = useRef(null);

  const scroll = (ref, dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <PageContainer>
        <div className="mt-8 relative h-[300px] lg:h-[384px] rounded-2xl overflow-hidden">
          <img
            src="/images/research/offroad/Offroad.webp"
            alt="Research"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="text-white max-w-[620px] px-6 sm:px-8">
              <h1 className="font-rethink font-semibold text-[42px] lg:text-[48px] leading-[1.05] mb-4">
                Research
              </h1>

              <p className="font-rethink text-[16px] lg:text-[18px] opacity-90 leading-[1.4]">
                Explore how autonomous vehicles navigate the chaotic,
                bidirectional traffic on India’s unpredictable roads.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* ================= CONTENT ================= */}
      <PageContainer>
        <div className="py-16 sm:py-20 space-y-24 sm:space-y-28">

          {/* ================= AUTONOMOUS DRIVING ================= */}
          <section className="space-y-6 sm:space-y-8">
            <h2 className="font-rethink font-bold text-[36px] sm:text-[38px] text-[#333333] tracking-[-0.02em]">
              Autonomous Driving
            </h2>

            <p className="font-rethink text-[18px] sm:text-[20px] text-[#5D5D5D] max-w-[1000px]">
              These videos demonstrate the ability of our autonomous vehicle to
              navigate complex real-world environments independently.
            </p>

            {/* On Road Header + Buttons */}
            <div className="flex items-center justify-between">
              <div className="font-rethink text-[26px] sm:text-[28px] flex items-center gap-2">
                On Road <span className="text-[20px]">↗</span>
              </div>

              <div className="flex gap-3">
                <ArrowButton onClick={() => scroll(onRoadRef, "left")}>‹</ArrowButton>
                <ArrowButton onClick={() => scroll(onRoadRef, "right")}>›</ArrowButton>
              </div>
            </div>

            <div
              ref={onRoadRef}
              className="flex flex-nowrap gap-8 overflow-hidden"
            >
              {onroadVideos.map((item) => (
                <VideoCard key={item.id} data={item} section="onroad" />
              ))}
            </div>
          </section>

          {/* ================= OFF ROAD ================= */}
          <section className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-between">
              <div className="font-rethink text-[26px] sm:text-[28px] flex items-center gap-2">
                Off Road <span className="text-[20px]">↗</span>
              </div>

              <div className="flex gap-3">
                <ArrowButton onClick={() => scroll(offRoadRef, "left")}>‹</ArrowButton>
                <ArrowButton onClick={() => scroll(offRoadRef, "right")}>›</ArrowButton>
              </div>
            </div>

            <div
              ref={offRoadRef}
              className="flex flex-nowrap gap-8 overflow-hidden"
            >
              {offroadVideos.map((item) => (
                <VideoCard key={item.id} data={item} section="offroad" />
              ))}
            </div>
          </section>

          {/* ================= MOTION PLANNING ================= */}
         {/* ===== MOTION PLANNING ===== */}
{/* ===== MOTION PLANNING ===== */}
<section className="space-y-6 sm:space-y-8">
  <div className="flex items-center justify-between">
    {/* HEADING */}
    <h2 className="font-rethink font-bold text-[32px] sm:text-[38px] text-[#333333] tracking-[-0.02em] flex items-center gap-2">
      Motion Planning and Decision Making
      <span className="text-[22px] sm:text-[24px]">↗</span>
    </h2>

    {/* ARROW BUTTONS */}
    <div className="flex gap-3">
      <ArrowButton onClick={() => scroll(motionRef, "left")}>‹</ArrowButton>
      <ArrowButton onClick={() => scroll(motionRef, "right")}>›</ArrowButton>
    </div>
  </div>

  {/* CARDS */}
  <div
    ref={motionRef}
    className="flex flex-nowrap gap-8 overflow-hidden"
  >
    {motionPlanningVideos.map((item) => (
      <VideoCard
        key={item.id}
        data={item}
        section="motion-planning"
      />
    ))}
  </div>
</section>




          {/* ================= PERCEPTION ================= */}
          <section className="space-y-6 sm:space-y-8">
  <div className="flex items-center justify-between">
    {/* HEADING */}
    <h2 className="font-rethink font-bold text-[32px] sm:text-[38px] text-[#333333] tracking-[-0.02em] flex items-center gap-2">
      Perception <span className="text-[22px] sm:text-[24px]">↗</span>
    </h2>

    {/* ARROWS */}
    <div className="flex gap-3">
      <ArrowButton onClick={() => scroll(perceptionRef, "left")}>‹</ArrowButton>
      <ArrowButton onClick={() => scroll(perceptionRef, "right")}>›</ArrowButton>
    </div>
  </div>

  {/* CARDS */}
  <div
    ref={perceptionRef}
    className="flex flex-nowrap gap-8 overflow-hidden"
  >
    {perceptionVideos.map((item) => (
      <VideoCard key={item.id} data={item} section="perception" />
    ))}
  </div>
</section>

<section className="space-y-6 sm:space-y-8">
  <div className="flex items-center justify-between">
    {/* HEADING */}
    <h2 className="font-rethink font-bold text-[32px] sm:text-[38px] text-[#333333] tracking-[-0.02em] flex items-center gap-2">
      Mapping & Localization <span className="text-[22px] sm:text-[24px]">↗</span>
    </h2>

    {/* ARROWS */}
    <div className="flex gap-3">
      <ArrowButton onClick={() => scroll(mappingRef, "left")}>‹</ArrowButton>
      <ArrowButton onClick={() => scroll(mappingRef, "right")}>›</ArrowButton>
    </div>
  </div>

  {/* CARDS */}
  <div
    ref={mappingRef}
    className="flex flex-nowrap gap-8 overflow-hidden"
  >
    {mappingLocalizationVideos.map((item) => (
      <VideoCard
        key={item.id}
        data={item}
        section="mapping-localization"
      />
    ))}
  </div>
</section>


        </div>
      </PageContainer>
    </main>
  );
}
