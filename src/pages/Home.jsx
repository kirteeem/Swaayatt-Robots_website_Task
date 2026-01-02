import Header from "../components/Header";
import FourHome from "../components/home/FourHome";
import HomeHero from "../components/home/HomeHero";
import SecondHero from "../components/home/SecondHero";
import ThirdHero from "../components/home/ThirdHero";
import TimelineSection from "../components/home/timeline/ TimelineSection";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Header variant="home" />

      {/* ================= FIRST HERO ================= */}
      <HomeHero />

      {/* ================= SECOND HERO ================= */}
      <section className="relative bg-black z-20">
        <SecondHero />
      </section>

      {/* ================= THIRD HERO ================= */}
      <section className="relative bg-black z-20 -mt-[35vh]">
        <ThirdHero />
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section
        className="
          relative bg-black z-20
          -mt-[35vh]
        "
      >
        <TimelineSection />
      </section>

<section>
  <FourHome/>
</section>



    </main>
  );
}
