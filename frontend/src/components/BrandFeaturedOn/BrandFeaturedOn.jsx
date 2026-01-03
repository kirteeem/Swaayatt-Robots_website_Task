import { useEffect, useRef } from "react";
import gsap from "gsap";
import brandFeaturedData from "./brandFeaturedData";

export default function BrandFeaturedOn() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    // total width = half because we duplicated logos
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  return (
    <section
      className="
        relative
        w-full
        bg-white
        h-[240px]
        flex
        flex-col
        justify-center
        overflow-hidden
      "
    >
      {/* ================= FEATURED ON TEXT ================= */}
      <div className="flex flex-col items-center mb-[24px] z-20">
        <p
          className="
            w-[110px]
            h-[22px]
            text-center
            font-montserrat
            font-semibold
            text-[18px]
            leading-[18px]
            tracking-[-0.015em]
            text-[rgba(128,128,128,1)]
            whitespace-nowrap
          "
        >
          Featured on
        </p>
        <span className="mt-[12px] w-[190px] h-[2px] bg-[rgba(200,200,200,1)]" />
      </div>

      {/* ================= LOGO MARQUEE ================= */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max items-center gap-[64px] px-[64px]"
        >
          {[...brandFeaturedData, ...brandFeaturedData].map((logo, index) => (
            <div
              key={index}
              className="h-[84px] flex items-center justify-center shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-[56px] max-w-[170px] object-contain opacity-90"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDGE FADE ================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
}
