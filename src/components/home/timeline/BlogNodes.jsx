import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/Blogs/Blogs.webp",
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Blog-1.webp",
  "/images/research/offroad/Offroad.webp",
  "/images/Blogs/Blog-3.webp",
];

const SLOTS = [
  { x: "-44vw", scale: 0.45, opacity: 0.22, z: 5 },
  { x: "-26vw", scale: 0.6,  opacity: 0.4,  z: 10 },
  { x: "0vw",   scale: 1.05, opacity: 1,    z: 30 }, // CENTER
  { x: "26vw",  scale: 0.6,  opacity: 0.4,  z: 10 },
  { x: "44vw",  scale: 0.45, opacity: 0.22, z: 5 },
];

export default function BlogNodes({ onActiveChange }) {
  const refs = useRef([]);
  const sectionRef = useRef(null);
  const lastActive = useRef(-1);

  useLayoutEffect(() => {
    // Initial placement
    refs.current.forEach((el, i) => {
      if (!el) return;
      const slot = SLOTS[i];
      gsap.set(el, {
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.z,
      });
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=2000",
      scrub: true,

      onUpdate: (self) => {
        // ✅ direction-safe step calculation
        const shift = Math.floor(
          self.progress * images.length + 0.0001
        );

        let activeIndex = 0;

        refs.current.forEach((el, i) => {
          const slotIndex =
            (i - shift + images.length) % images.length;

          const slot = SLOTS[slotIndex];

          // ✅ no animation fighting
          gsap.set(el, {
            x: slot.x,
            scale: slot.scale,
            opacity: slot.opacity,
            zIndex: slot.z,
          });

          // CENTER slot is index 2
          if (slotIndex === 2) {
            activeIndex = i;
          }
        });

        // notify ONLY when image actually changes
        if (activeIndex !== lastActive.current) {
          lastActive.current = activeIndex;
          onActiveChange?.(activeIndex);
        }
      },
    });
  }, [onActiveChange]);

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 z-30 pointer-events-none"
    >
      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="absolute top-[20%] left-1/2 -translate-x-1/2"
        >
          <div className="relative w-[20vw] aspect-video overflow-hidden rounded-md">
            <img src={src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[4vw] h-[4vw] min-w-[52px] min-h-[52px] rounded-full bg-red-600 flex items-center justify-center shadow-[0_10px_30px_rgba(255,0,0,0.45)]">
                <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[9px] border-y-transparent ml-[2px]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
