import React from "react";

export default function TwitterSpotlight() {
  // ✅ 7 DIFFERENT IMAGES (public folder)
  const twitterCards = [
    "/images/media/twitter/t1.webp",
    "/images/media/twitter/t2.webp",
    "/images/media/twitter/t3.webp",
    "/images/media/twitter/t4.webp",
    "/images/media/twitter/t5.webp",
    "/images/media/twitter/t6.webp",
    "/images/media/twitter/t7.webp",
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      {/* SECTION TITLE */}
      <h2 className="text-[20px] font-semibold mb-6">
        Twitter Spotlight
      </h2>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {twitterCards.map((img, index) => (
          <div
            key={img}
            className="
              rounded-[12px]
              overflow-hidden
              border
              bg-white
              hover:shadow-md
              transition
            "
          >
            <img
              src={img}
              alt={`Twitter spotlight ${index + 1}`}
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
