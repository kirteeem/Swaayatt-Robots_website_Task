import VideoGrid from "../components/VideoGrid";
import { offroadVideos } from "../data/offroadVideo";

const Offroad = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* --- Hero Section --- */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">

          {/* ✅ FIXED IMAGE PATH */}
          <img
            src="/images/research/offroad/Offroad.webp"
            alt="Off Road Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold mb-4">
              Off Road
            </h1>

            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
              Revolutionizing Off-Road Autonomy: Conquering Unseen, Adversarial,
              and Unpredictable Terrains.
            </p>
          </div>
        </div>
      </section>

      {/* --- Intro Text --- */}
      <section className="px-6 md:px-16 py-12">
        <p className="max-w-[1497px] text-lg md:text-[32px] leading-snug tracking-[-0.64px] font-medium text-[#686868]">
          These demonstrations highlight our autonomous vehicles tackling
          challenging off-road terrains, leveraging advanced reinforcement
          learning to redefine decision-making across diverse and unpredictable
          conditions for future Level-5 autonomy.
        </p>
      </section>

      {/* ✅ PASS DATA PROPERLY */}
      <VideoGrid videos={offroadVideos} />

    </div>
  );
};

export default Offroad;
