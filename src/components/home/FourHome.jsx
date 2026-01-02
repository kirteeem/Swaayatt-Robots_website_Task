import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <section className="relative min-h-screen flex items-center">

        {/* MAIN BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#062f2a] via-[#071615] to-black" />

        {/* LEFT DARK OVERLAY (TEXT READABILITY) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />

        {/* VEHICLE IMAGE */}
        <div className="absolute right-0 bottom-0 top-0 w-[65%] flex items-center justify-end z-0">
          <img
            src="/images/Blogs/thar1.png"
            alt="Project THARX Unmanned Ground Vehicle"
            className="
              w-full
              max-h-[85vh]
              object-contain
              object-right
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-[90vw] ml-12 px-32 lg:px-16">
          <div className="max-w-8xl">

            {/* INTRODUCING */}
            <p className="text-white/90 font-Montserrat tracking-[0.025em] text-2xl md:text-4xl font-bold mb-4">
              INTRODUCING
            </p>

            {/* TITLE */}
            <h1
              className="
                text-[#3BBE7E]
                font-bold
                font-Montserrat
                text-[84px]
                w-[900px]
                // md:text-7xl
                // lg:text-8xl
                // xl:text-8xl
                leading-none
                
              "
            >
              PROJECT THARX
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Leveraging the rugged Mahindra Thar platform, Swaayatt Robots
              introduces the next generation of unmanned ground vehicles (UGV).
              Deep learning navigation in unstructured terrain.
            </p>

            {/* CTA */}
            <button
              className="
                inline-flex
                items-center
                gap-3
                bg-[#1E6F3E]
                hover:bg-[#249155]
                transition
                px-8
                py-4
                text-white
                font-semibold
                tracking-wide
                font-Chivo-Mono
              "
            >
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>
    </main>
  );
};

export default Index;
