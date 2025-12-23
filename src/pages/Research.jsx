import ResearchSlider from "../components/media/ResearchSlider";

// DATA FILES
import onroadVideos from "../data/onroadVideo";
import offroadVideos from "../data/offroadVideo";
import perceptionVideos from "../data/perceptionVideos";
import motionPlanningVideos from "../data/motionPlanningVideos";
import mappingLocalizationVideos from "../data/mappingLocalizationVideos";

export default function Research() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-12">

      {/* ================= HERO ================= */}
      <div className="relative h-[280px] rounded-2xl overflow-hidden mb-16">
        <img
          src="/images/research/hero.webp"
          alt="Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center px-10">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl font-semibold mb-3">Research</h1>
            <p className="text-sm">
              Explore how autonomous vehicles navigate the chaotic,
              bidirectional traffic on India’s unpredictable roads.
            </p>
          </div>
        </div>
      </div>

      {/* ================= AUTONOMOUS DRIVING ================= */}
      <section className="mb-24">
        <h2 className="text-[22px] font-semibold mb-2">
          Autonomous Driving
        </h2>
        <p className="text-[14px] text-gray-500 max-w-3xl mb-10">
          These videos demonstrate the ability of our autonomous vehicles to
          navigate complex real-world environments independently.
        </p>

        <ResearchSlider
          title="On Road"
          description="Autonomous driving in dense and unpredictable traffic."
          data={onroadVideos}
        />

        <ResearchSlider
          title="Off Road"
          description="Learning-based navigation across unstructured terrains."
          data={offroadVideos}
        />
      </section>

      {/* ================= MOTION PLANNING ================= */}
      <section className="mb-24">
        <h2 className="text-[22px] font-semibold mb-2">
          Motion Planning and Decision Making
        </h2>
        <p className="text-[14px] text-gray-500 max-w-3xl mb-10">
          These videos demonstrate advanced motion planning and adaptive
          decision-making in stochastic dynamic traffic, employing
          reinforcement learning and robust control strategies.
        </p>

        <ResearchSlider
          title="Motion Planning"
          description="Adaptive planning and decision-making systems."
          data={motionPlanningVideos}
        />
      </section>

      {/* ================= PERCEPTION ================= */}
      <section className="mb-24">
        <h2 className="text-[22px] font-semibold mb-2">
          Perception
        </h2>
        <p className="text-[14px] text-gray-500 max-w-3xl mb-10">
          Understanding the environment using cameras, sensors, and
          learning-based perception systems.
        </p>

        <ResearchSlider
          title="Perception"
          description="Environment understanding using sensor fusion and AI."
          data={perceptionVideos}
        />
      </section>

      {/* ================= MAPPING & LOCALIZATION ================= */}
      <section className="mb-24">
        <h2 className="text-[22px] font-semibold mb-2">
          Mapping & Localization
        </h2>
        <p className="text-[14px] text-gray-500 max-w-3xl mb-10">
          Building high-fidelity maps and accurately localizing vehicles in
          complex environments.
        </p>

        <ResearchSlider
          title="Mapping & Localization"
          description="Localization and mapping in dynamic environments."
          data={mappingLocalizationVideos}
        />
      </section>

    </main>
  );
}
