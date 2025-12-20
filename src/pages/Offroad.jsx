import React from "react";

/* ================= PUBLIC IMAGE PATHS (VITE SAFE) ================= */
const offroad = "/images/research/offroad/Offroad.webp";
const thumbnail = "/images/Blogs/Blog-1.webp";

const OffRoadPage = () => {
  const videoCards = [
    {
      id: 1,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous driving is undoubtedly the most formidable AI challenge of this decade...",
      date: "2023-10-28",
    },
    {
      id: 2,
      title: "Biologically Inspired Model for Off-Road Navigation",
      description:
        "These demonstrations highlight our autonomous vehicles tackling challenging terrains...",
      date: "2023-10-28",
    },
    {
      id: 3,
      title: "Learning-Based Off-Road Decision Making",
      description:
        "Reinforcement learning enables vehicles to adapt to unstructured environments...",
      date: "2023-10-28",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="px-3 sm:px-4 md:px-16 mt-6 md:mt-8">
        <div
          className="
            relative
            w-full
            rounded-xl
            overflow-hidden
            min-h-[260px]
            sm:min-h-[320px]
            md:min-h-[380px]
            lg:min-h-[420px]
          "
        >
          {/* Background Image */}
          <img
            src={offroad}
            alt="Off-road autonomous driving"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-center
              px-4
              sm:px-6
              md:px-12
              text-white
            "
          >
            <h1
              className="
                max-w-[520px]
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                mb-3
                sm:mb-4
              "
            >
              Off Road
            </h1>

            <p
              className="
                max-w-[520px]
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                opacity-95
              "
            >
              Revolutionizing Off-Road Autonomy: Conquering unseen, adversarial,
              and unpredictable terrains.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="max-w-6xl text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
          These demonstrations highlight our autonomous vehicles tackling
          challenging off-road terrains, leveraging advanced reinforcement
          learning to redefine decision-making across diverse and unpredictable
          conditions for future Level-5 autonomy.
        </p>
      </section>

      {/* ================= VIDEO CARDS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoCards.map((card) => (
            <div key={card.id} className="group cursor-pointer">

              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="font-bold text-lg leading-tight hover:text-orange-600 transition">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                  {card.description}
                </p>

                <p className="text-xs text-gray-400 mt-4 font-mono">
                  {card.date}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OffRoadPage;
