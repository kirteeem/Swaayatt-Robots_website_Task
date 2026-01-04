import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    const endX = width * 0.78;

    gsap.to(carRef.current, {
      x: endX * (progress ?? 0),
      duration: 0.35,
      ease: "power3.out",
    });
  }, [progress]);

  return (
    <div
      ref={wrapperRef}
      className="
        absolute
        bottom-[10vh] sm:bottom-[12vh] md:bottom-[14vh]
        left-0 right-0
        h-[140px] sm:h-[160px] md:h-[190px]
        z-40 pointer-events-none
      "
    >
      {/* ROAD */}
      <div className="absolute top-0 left-0 right-0 h-[70px] sm:h-[90px] md:h-[115px] road-wrap">
        <div className="road-surface" />
        <div className="road-center">
          <div className="road-dash" />
        </div>
      </div>

      {/* BLACK AREA */}
      <div className="absolute left-0 right-0 bg-black top-[70px] sm:top-[90px] md:top-[107px] h-[70px]" />

      {/* DIVIDERS */}
      {DIVIDERS.map((item, i) => (
  <div
    key={i}
    className="absolute top-0"
    style={{
      left: item.left,
      transform: "translateX(-50%)",
      zIndex: 20,
      pointerEvents: "none",
    }}
  >
    {/* MAIN SLANTED LINE */}
    <div
      className="relative"
      style={{
        height: "125px",
        width: "1px",
        background: "white",
        transform: "rotate(24deg)",
        transformOrigin: "top center",
      }}
    >
      {/* DOT JOINT */}
      <div
        style={{
          position: "absolute",
          bottom: "-3px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "white",
        }}
      />

      {/* DATE */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          marginTop: "10px",
          transform: "translateX(-50%) rotate(-24deg)",
          transformOrigin: "top center",
          fontSize: "12px",
          color: "rgba(255,255,255,0.7)",
          whiteSpace: "nowrap",
        }}
      >
        {item.date}
      </div>
    </div>
  </div>
))}


      {/* CAR */}
{/* CAR WRAPPER (controls vertical position) */}
<div
  className="
    absolute
    top-[38px] sm:top-[55px] md:top-[60px]
    -translate-y-4 sm:-translate-y-3 md:-translate-y-5
    z-40
    pointer-events-none
  "
>
<img
  ref={carRef}
  src="/images/Swaayatt/Bolero.png"
  className="
    absolute
    top-[60px]
    -mt-6 sm:-mt-8 md:-mt-32
    w-[30vw] sm:w-[24vw] md:w-[20vw]
    max-w-[300px]
    z-40
  "
  alt="car"
/>

</div>


    </div>
  );
}
