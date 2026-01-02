import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BlogNodes from "./BlogNodes";
import RoadTimeline from "./RoadTimeline";
import CenterFeature from "./CenterFeature"

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);

  // 🔥 visible progress for React (throttled)
  const [progress, setProgress] = useState(0);

  // 🔥 real-time progress (no re-render)
  const progressRef = useRef(0);
  const rafRef = useRef(null);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3500",
      scrub: 1.2,
      pin: true,

      onUpdate: (self) => {
        progressRef.current = self.progress;

        // 🚀 throttle React updates
        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(() => {
            setProgress(progressRef.current);
            rafRef.current = null;
          });
        }
      },
    });

    return () => {
      st.kill();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* ROAD */}
      <BlogNodes progress={progress} />

      {/* IMAGES */}
      <CenterFeature progress={progress} />

      {/* GRID */}
      <RoadTimeline/>
    </section>
  );
}
