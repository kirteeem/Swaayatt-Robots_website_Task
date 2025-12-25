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
      logo: "/images/media/news-articles/logo-2.png",
      title: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
    },
    {
      id: 3,
      image: "/images/media/news-articles/article-2.webp",
      logo: "/images/media/news-articles/logo-2.png",
      title: "India’s Push Toward Fully Autonomous Driving Technology",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 pb-24">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className="
            font-rethink
            font-medium
            text-[32px]
            leading-[100%]
            tracking-[-0.02em]
            text-[#101010]
          "
        >
          News and Articles
        </h2>

        {/* ================= ARROWS ================= */}
        <div className="flex gap-3">
          <button
            className="
              w-9 h-9
              rounded-full
              border border-[#1A212F]/30
              bg-white
              flex items-center justify-center
            "
            aria-label="Previous"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A212F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="
              w-9 h-9
              rounded-full
              border border-[#1A212F]/30
              bg-white
              flex items-center justify-center
            "
            aria-label="Next"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A212F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= GRID ================= */}
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

            {/* CONTENT */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-3">

              {/* LOGO */}
              <div
                className="
                  w-10 h-10
                  rounded-full
                  bg-white
                  flex items-center justify-center
                  flex-shrink-0
                "
              >
                <img
                  src={item.logo}
                  alt="Source logo"
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* TITLE */}
              <p
                className="
                  font-rethink
                  font-medium
                  text-white
                  tracking-[-0.02em]
                  leading-[110%]
                  text-[16px]
                  sm:text-[18px]
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
