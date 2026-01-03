import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedImageReveal() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapperRef.current,
        {
          width: "42vh",   // square start
          height: "36vh",
          y: 0,
        },
        {
          width: "58vw",   // final width
          height: "52vh",
          y: "2vh",
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-[3vh] pb-[10vh]"
    >
      {/* OUTER container = centered */}
      <div className="relative w-full flex justify-center">
        
        {/* INNER container = fixed width, left aligned */}
        <div className="relative w-[58vw] flex justify-start">
          
          {/* IMAGE = grows to the right */}
          <div
            ref={imageWrapperRef}
            className="
              overflow-hidden
              bg-black
              origin-bottom-left
            "
          >
            <img
              src="/images/media/featured/timeline.gif"
              alt="Autonomous mobility"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
