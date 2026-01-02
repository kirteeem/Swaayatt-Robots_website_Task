import { useEffect, useRef } from "react";
import gsap from "gsap";

/* ================= DIVIDERS DATA ================= */

const DIVIDERS = [
  { left: "20%", date: "20 Aug 2025" },
  { left: "35%", date: "20 Jul 2025" },
  { left: "65%", date: "08 Jul 2025" },
  { left: "82%", date: "18 Mar 2025" },
];

export default function RoadTimeline({ progress }) {
  const carRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!carRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.offsetWidth;
    const startX = width * 0.05;
    const endX = width * 0.78;

    gsap.to(carRef.current, {
      x: gsap.utils.interpolate(startX, endX, progress),
      duration: 0.4,
      ease: "power3.out",
    });
  }, [progress]);

  return (
    <div
      ref={wrapperRef}
      className="absolute bottom-[14vh] left-0 right-0 h-[28vh] z-40 pointer-events-none"
    >
      {/* BLACK BACKGROUND BELOW ROAD */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] bg-black z-0" />

      {/* ROAD */}
      <img
        src="/images/roadtimeline/Rectangle 9.png"
        className="absolute inset-0 w-full h-full object-contain z-10"
        alt=""
      />

      {/* DASH */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[6px] z-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #fff 0 30px, transparent 30px 60px)",
        }}
      />

      {/* ================= DIVIDERS + DATES ================= */}
      {DIVIDERS.map((item, i) => (
        <div
          key={i}
          className="absolute top-1/2 z-30"
          style={{ left: item.left }}
        >
          {/* SLANTED LINE */}
          <div
            className="
              w-px
              h-[80px]
              bg-white/60
              rotate-[20deg]
              origin-top
            "
          />

          {/* DATE */}
          <div
            className="
              mt-2
              -translate-x-1/2
              text-xs
              text-white/80
              whitespace-nowrap
            "
          >
            {item.date}
          </div>
        </div>
      ))}

      {/* CAR */}
      <img
        ref={carRef}
        src="/images/Swaayatt/Bolero.png"
        className="absolute top-1/2 -translate-y-1/2 w-[22vw] max-w-[320px] z-40"
        alt=""
      />
    </div>
  );
}
