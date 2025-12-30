import React, { useState } from "react";
import head from "/images/media/featured/f1.webp";

export default function FeaturedStories() {
  const slides = [
    {
      image: head,
      title:
        "Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी, अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट",
      description:
        "Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती. शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे फिर तो सामने से गाड़ी आए... क्या भारत में भी कभी ड्राइवरलेस कार कार दौड़ सकेगी? यह सवाल तो आपके मन में भी कई बार आया होगा. लेकिन इस सवाल का जवाब ढूंढने के लिए हम आपको लेकर चलते है... बेहद आम-सी और सड़क पर चलने वाली दूसरी जीप की तरह ही दिखने वाली यह बोलेरो कुछ खास है. दरअसल, यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़त...",
    },
    {
      image: head, // dummy second image
      title:
        "India’s First Level-5 Autonomous Driving System Tested Successfully",
      description:
        "This breakthrough showcases reinforcement-learning-based autonomy operating in complex Indian traffic conditions, highlighting robust perception, planning, and decision-making pipelines.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="max-w-[1440px] mx-auto px-6 pb-24">
      
      {/* SECTION TITLE */}
      <h2
        className="
          font-rethink
          font-medium
          text-[32px]
          leading-[100%]
          tracking-[-0.02em]
          text-[#101010] dark:text-white
          mb-6
        "
      >
        Featured Stories
      </h2>

      {/* CARD */}
      <div
        className="
          bg-white dark:bg-[#1F1F1F]
          rounded-[24px]
          p-[40px]
          grid
          grid-cols-1
          lg:grid-cols-[1.1fr_0.9fr]
          gap-[124px]
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        {/* LEFT IMAGE SLIDER */}
        <div className="relative overflow-hidden rounded-[16px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.image}
                alt="Featured"
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between">

          {/* TEXT */}
          <div>
            <h3
              className="
                font-rethink
                font-medium
                text-[32px]
                leading-[100%]
                tracking-[-0.02em]
                text-[#1A212F] dark:text-white
                max-w-[571px]
              "
            >
              {slides[index].title}
            </h3>

            <p
              className="
                mt-[24px]
                font-rethink
                font-normal
                text-[20px]
                leading-[100%]
                tracking-[-0.02em]
                text-[#1A212F]/70 dark:text-white/70
                max-w-[571px]
              "
            >
              {slides[index].description}
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex justify-end gap-4 mt-10">
            <button
              onClick={prev}
              className="
                w-10 h-10
                rounded-full
                border border-[#1A212F]/30 dark:border-white/30
                flex items-center justify-center
                text-[#1A212F] dark:text-white
                hover:bg-[#1A212F]/5 dark:hover:bg-white/10
                transition
              "
            >
              ‹
            </button>

            <button
              onClick={next}
              className="
                w-10 h-10
                rounded-full
                border border-[#1A212F]/30 dark:border-white/30
                flex items-center justify-center
                text-[#1A212F] dark:text-white
                hover:bg-[#1A212F]/5 dark:hover:bg-white/10
                transition
              "
            >
              ›
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
