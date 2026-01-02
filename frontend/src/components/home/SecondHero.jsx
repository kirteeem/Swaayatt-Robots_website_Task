export default function SecondHero() {
  return (
    <section className="relative w-screen min-h-[135vh] overflow-hidden">
      {/* IMAGE */}
      <img
        src="/images/Home/hero-2.webp"
        alt="Autonomous vehicle mission"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-center
        "
      />

      {/* SOFT CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />

      {/* TEXT */}
    <div
  className="
    relative z-10
    max-w-[1440px]
    mx-auto
    px-6 sm:px-10 lg:px-16
    h-[1080px]
    flex
    items-center
    -translate-y-12
  "
>


        <div className="max-w-[760px]">
          <p
            className="
              text-white
              text-[26px]
              sm:text-[28px]
              md:text-[32px]
              lg:text-[34px]
              leading-[1.05]
              tracking-[-0.02em]
            "
            style={{ fontFamily: "Rethink Sans, sans-serif" }}
          >
            <span className="text-emerald-400">Our mission</span> is to make
            connected autonomous driving technology accessible and available
            to everyone
          </p>
        </div>
      </div>
    </section>
  );
}
