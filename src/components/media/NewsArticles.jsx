import React from "react";

export default function NewsAndArticles() {
  const articles = [
    {
      id: 1,
      image: "/images/media/news-articles/article-1.webp",
      logo: "/images/media/news-articles/logo-1.png",
      title: "Swaayatt Robots Raises $4 Million at $15.1 Million Valuation",
    },
    {
      id: 2,
      image: "/images/media/news-articles/article-2.webp",
      logo: "/images/media/news-articles/source-logo.webp",
      title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
    },
    {
      id: 3,
      image: "/images/media/news-articles/article-2.webp", // repeated image is OK
      logo: "/images/media/news-articles/source-logo.webp",
      title: "India’s Push Toward Fully Autonomous Driving Technology",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-24">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] font-semibold">
          News and Articles
        </h2>

        {/* ARROWS */}
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full border flex items-center justify-center">
            ‹
          </button>
          <button className="w-9 h-9 rounded-full border flex items-center justify-center">
            ›
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item) => (
          <div
            key={item.id}
            className="relative rounded-[20px] overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[240px] sm:h-[260px] object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* CONTENT ON IMAGE */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-3">
              {/* SMALL LOGO */}
              <img
                src={item.logo}
                alt="Source logo"
                className="w-9 h-9 rounded-full bg-white p-1 flex-shrink-0"
              />

              {/* TEXT */}
              <p
                className="
                  font-rethink
                  font-medium
                  text-white
                  tracking-[-0.02em]
                  leading-[100%]

                  text-[14px]
                  sm:text-[16px]
                  lg:text-[18px]
                "
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
