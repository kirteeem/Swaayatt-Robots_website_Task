import { useEffect, useRef } from "react";
import gsap from "gsap";

const STEPS = 5;

export default function RoadTimeline({ activeIndex }) {
  const carRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!carRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.offsetWidth;

    // exact 5 fixed positions
    const positions = Array.from({ length: STEPS }, (_, i) =>
      gsap.utils.interpolate(
        width * 0.05,   // LEFT
        width * 0.75,   // RIGHT
        i / (STEPS - 1)
      )
    );

    const safeIndex = Math.min(
      Math.max(activeIndex, 0),
      STEPS - 1
    );

    gsap.to(carRef.current, {
      x: positions[safeIndex],
      duration: 0.6,
      ease: "power3.inOut",
    });
  }, [activeIndex]);

  return (
    <div
      ref={wrapperRef}
      className="absolute bottom-[10vh] left-0 right-0 h-[28vh] z-40 pointer-events-none"
    >
      {/* ROAD */}
      <img
        src="/images/roadtimeline/Rectangle 9.png"
        alt="Road"
        className="absolute inset-0 w-full h-full object-contain z-10"
      />

      {/* DASH LINE */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[6px] z-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #ffffff 0px, #ffffff 32px, transparent 32px, transparent 64px)",
        }}
      />

      {/* CAR */}
      <img
        ref={carRef}
        src="/images/roadtimeline/Bolero.png"
        alt="Car"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[22vw] max-w-[320px] z-30"
      />
    </div>
  );
}
