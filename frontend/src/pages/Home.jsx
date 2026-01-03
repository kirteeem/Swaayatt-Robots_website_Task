import Header from "../components/Header";
import Blogs from "../components/home/Blogs";
import FourHome from "../components/home/FourHome";
import HomeHero from "../components/home/HomeHero";
import SecondHero from "../components/home/SecondHero";
import ThirdHero from "../components/home/ThirdHero";
import TimelineSection from "../components/home/timeline/ TimelineSection";
import BrandFeaturedOn from "../components/BrandFeaturedOn/BrandFeaturedOn";
import FeaturedImageReveal from "../components/BrandFeaturedOn/FeaturedImageReveal";

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
      <section className="relative bg-black z-20 -mt-[35vh]">
        <TimelineSection />
      </section>

      {/* ================= FOUR HOME ================= */}
      <section className="relative bg-black z-20">
        <FourHome />
      </section>

      {/* ================= BLOGS ================= */}
      <section className="relative bg-black z-20">
        <Blogs />
      </section>

      {/* ================= BRAND FEATURED ON ================= */}
   <section className="relative bg-white z-20">
  <BrandFeaturedOn />
</section>

<section className="relative bg-white z-20">
  <FeaturedImageReveal />
</section>

    </main>
  );
}
