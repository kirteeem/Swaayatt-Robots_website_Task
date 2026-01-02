export default function HomeHero() {
  return (
   <section className="relative min-h-screen w-full overflow-hidden bg-black pb-[260px]">


      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div
        className="
          absolute inset-0 z-0
          bg-gradient-to-r
          from-[#062f2a]
          via-[#071615]
          to-black
        "
      />

      {/* ================= RIGHT SIDE DARK CLAMP ================= */}
      <div
        className="
          absolute inset-0 z-[5]
          bg-gradient-to-l
          from-black
          via-black/80
          to-transparent
        "
      />

      {/* ================= TEXT ================= */}
      <div className="relative z-30 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="pt-[140px] max-w-[620px]">
          <h1
            className="font-extrabold uppercase text-[80px] leading-[100%] tracking-[-0.02em] text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            AUTONOMOUS
          </h1>

          <h2
            className="font-extralight uppercase text-[80px] leading-[100%] tracking-[-0.02em] text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            MOBILITY
          </h2>

          <p
            className="mt-6 text-[20px] leading-[110%] tracking-[-0.02em] text-white/40"
            style={{ fontFamily: "Rethink Sans, sans-serif" }}
          >
            Deep Reinforcement Learning to navigate adversarial, real-world
            complexity beyond structured environments.
          </p>
        </div>
      </div>

      {/* ================= BASE CAR IMAGE ================= */}
      <img
        src="/images/Home/head.webp"
        alt="Autonomous Vehicles"
        className="
          absolute bottom-[-160px] left-1/2 -translate-x-1/2
          w-[92vw] max-w-[1800px]
          object-contain
          brightness-[1.05]
          contrast-[1.15]
          saturate-[1.25]
          drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]
          pointer-events-none select-none
          z-20
        "
      />

      {/* ================= GREEN COLOR GRADING (CARS TURN GREEN) ================= */}
      <img
        src="/images/Home/head.webp"
        alt=""
        className="
          absolute bottom-[-140px] left-1/2 -translate-x-1/2
          w-[92vw] max-w-[1800px]
          object-contain
          hue-rotate-[10deg]
          saturate-[2.4]
          brightness-[1.1]
          opacity-[0.6]
          mix-blend-color
          pointer-events-none select-none
          z-[22]
        "
      />

      {/* ================= CENTER GREEN LIGHT SCATTER ================= */}
      <div
        className="
          absolute inset-0 z-[23] pointer-events-none
          bg-[radial-gradient(
            120%_70%_at_50%_65%,
            rgba(40,190,160,0.4),
            rgba(25,120,100,0.28)_45%,
            rgba(0,0,0,0.15)_70%,
            transparent_85%
          )]
          mix-blend-screen
        "
      />

      {/* ================= BOTTOM + HEADER BLACK SAFETY ================= */}
      <div
        className="
          absolute inset-0 z-[10]
          bg-gradient-to-b
          from-black/40
          via-transparent
          to-black
        "
      />

    </section>
  );
}
