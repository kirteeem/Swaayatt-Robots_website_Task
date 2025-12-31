import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GridBackground from "./GridBackground";
import BlogNodes from "./BlogNodes";
import RoadTimeline from "./RoadTimeline";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
    });

    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* ROAD */}
      <div className="absolute inset-0 z-10">
        <RoadTimeline activeIndex={activeIndex} />
      </div>

      {/* IMAGES */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <BlogNodes onActiveChange={setActiveIndex} />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <GridBackground />
      </div>
    </section>
  );
}
