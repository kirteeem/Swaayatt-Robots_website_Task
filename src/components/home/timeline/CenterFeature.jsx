import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

/* ================= DATA ================= */

const images = [
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Blog-1.webp",
  "/images/media/news/n1.webp",
  "/images/Blogs/Homepage-1.webp",
];

const CENTER_TEXT =
  "Introducing Bidirectional Negotiation to\n" +
  "the World of Autonomous Driving:\n" +
  "Biologically Inspired Model";

/* ================= POSITIONS ================= */

const SLOTS = [
  { x: "-42vw", scale: 0.42, opacity: 0.18, z: 5 },
  { x: "-24vw", scale: 0.65, opacity: 0.38, z: 10 },
  { x: "0vw", scale: 1.1, opacity: 1, z: 30 },
  { x: "24vw", scale: 0.65, opacity: 0.38, z: 10 },
  { x: "39vw", scale: 0.32, opacity: 0.16, z: 4 },
];

/* ================= COMPONENT ================= */

export default function BlogNodes({ progress }) {
  const refs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(null);

  useLayoutEffect(() => {
    const total = images.length;
    const indexProgress = progress * (total - 1);

    refs.current.forEach((el, i) => {
      if (!el) return;

      const offset = i - indexProgress;
      const slotIndex = Math.round(
        gsap.utils.clamp(0, total - 1, offset + 2)
      );

      const slot = SLOTS[slotIndex];
      const isCenter = slotIndex === 2;

      gsap.to(el, {
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.z,
        duration: 0.45,
        ease: "power3.out",
      });

      if (isCenter) setCenterIndex(i);
    });
  }, [progress]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">

      {/* ===== GREEN REFLECTION ===== */}
      <div
        className="absolute inset-0 blur-[110px]"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 54%,
              rgba(47, 52, 37, 0.9) 0%,
              rgba(47, 52, 37, 0.65) 18%,
              rgba(47, 52, 37, 0.35) 30%,
              rgba(0, 0, 0, 0.85) 45%,
              rgba(0, 0, 0, 1) 100%
            )
          `,
        }}
      />

      {/* ================= IMAGES ================= */}
      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="absolute top-[18%] left-1/2 -translate-x-1/2"
        >
          <div className="relative w-[22vw] aspect-video overflow-visible">

            {/* IMAGE */}
            <div
              className={`
                relative z-20
                ${
                  centerIndex === i
                    ? "rounded-none overflow-visible"
                    : "rounded-lg overflow-hidden"
                }
              `}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/25" />

              {/* 🔴 YOUTUBE PLAY BUTTON (CENTER OF EACH IMAGE) */}
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <div
                  className="
                    w-[3.8vw]
                    h-[3.8vw]
                    min-w-[44px]
                    min-h-[44px]
                    max-w-[60px]
                    max-h-[60px]
                    rounded-full
                    bg-[#FF0000]
                    flex
                    items-center
                    justify-center
                    shadow-xl
                  "
                >
                  <div
                    className="
                      ml-[3px]
                      w-0
                      h-0
                      border-t-[10px]
                      border-b-[10px]
                      border-l-[16px]
                      border-t-transparent
                      border-b-transparent
                      border-l-white
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ================= CENTER TEXT ================= */}
      {centerIndex !== null && (
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 z-30">
          <p
            className="
              font-['Chivo_Mono']
              text-[18px]
              leading-[100%]
              tracking-[-0.02em]
              text-white
              max-w-[620px]
              whitespace-pre-line
              text-left
            "
          >
            {CENTER_TEXT}
          </p>
        </div>
      )}
    </div>
  );
}
