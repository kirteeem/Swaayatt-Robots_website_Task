import ResearchSlider from "../components/media/ResearchSlider";
import PageContainer from "../components/PageContainer";

import onroadVideos from "../data/onroadVideo";
import offroadVideos from "../data/offroadVideo";
import perceptionVideos from "../data/perceptionVideos";
import motionPlanningVideos from "../data/motionPlanningVideos";
import mappingLocalizationVideos from "../data/mappingLocalizationVideos";

export default function Research() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <PageContainer className="mt-8">
        <div className="relative h-[300px] lg:h-[420px] rounded-2xl overflow-hidden">
          <img
            src="/images/research/offroad/Offroad.webp"
            alt="Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="text-white max-w-xl">
              <h1 className="text-4xl font-semibold mb-3">Research</h1>
              <p className="text-sm opacity-90">
                Exploring autonomous driving challenges in complex real-world
                environments.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* CONTENT */}
      <PageContainer className="py-16">
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Autonomous Driving</h2>
          <ResearchSlider videos={onroadVideos} />
        </section>

        <section className="mb-20">
          <ResearchSlider videos={offroadVideos} />
        </section>

        <section className="mb-20">
          <ResearchSlider videos={perceptionVideos} />
        </section>

        <section className="mb-20">
          <ResearchSlider videos={motionPlanningVideos} />
        </section>

        <section>
          <ResearchSlider videos={mappingLocalizationVideos} />
        </section>
      </PageContainer>
    </main>
  );
}
