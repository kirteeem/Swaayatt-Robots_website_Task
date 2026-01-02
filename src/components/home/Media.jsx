import React from "react";

const mediaArticles = [
  {
    id: 1,
    title: "Anand Mahindra Praises Swaayatt Robots’ Level 5 Autonomy Efforts",
    image: "/images/media1.png", // replace with your actual image path
    source: "CIO",
    large: true,
  },
  {
    id: 2,
    title: "Swaayatt Robots Raises $4 Million at $151 Million Valuation",
    image: "/images/media2.png",
    source: "StartupStory",
  },
  {
    id: 3,
    title: "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
    image: "/images/media3.png",
    source: "ANI",
  },
  {
    id: 4,
    title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
    image: "/images/media4.png",
    source: "Startuppedia",
  },
  {
    id: 5,
    title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
    image: "/images/media5.png",
    source: "Startuppedia",
  },
];

const MediaCoverage = () => {
  return (
    <section className="py-10 px-6 sm:px-10 lg:px-16 bg-black text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Media Coverage</h2>
        <button className="text-sm border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
          SEE ALL ARTICLES →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaArticles.map((article) => (
          <div
            key={article.id}
            className={`relative overflow-hidden rounded-2xl ${
              article.large ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-bold uppercase text-gray-300 mb-1">
                {article.source}
              </p>
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaCoverage;
