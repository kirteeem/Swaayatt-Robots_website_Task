import React from "react";
import head from "/images/media/featured/f1.webp"

export default function FeaturedStories() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      
      {/* SECTION TITLE */}
      <h2 className="text-[18px] font-semibold mb-6">
        Featured Stories
      </h2>

      {/* CARD */}
      <div
        className="
          bg-white
          rounded-[24px]
          shadow-sm
          p-6
          grid
          grid-cols-1
          lg:grid-cols-[1.1fr_0.9fr]
          gap-8
          items-center
        "
      >
        {/* LEFT IMAGE */}
        <div className="w-full h-full">
          <img
            src={head}
            alt="Featured Story"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* TITLE */}
          <h3
            className="
              font-rethink
              font-medium
              text-[#1A212F]
              tracking-[-0.02em]
              leading-[100%]

              text-[24px]
              sm:text-[28px]
              lg:text-[32px]
            "
          >
            Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी,
            अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              font-rethink
              font-normal
              text-[#6E6E6E]
              tracking-[-0.02em]
              leading-[100%]

              text-[16px]
              sm:text-[18px]
              lg:text-[20px]
            "
          >
            Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की
            ज़रूरत नहीं पड़ती। शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे,
            फिर सामने से गाड़ी आए… क्या भारत में भी कभी ड्राइवरलेस कार दौड़
            सकेगी? यह सवाल आपके मन में भी कई बार आया होगा। लेकिन इस सवाल का
            जवाब ढूंढने के लिए हम आपको लेकर चलते हैं… बेहद आम-सी दिखने वाली
            यह बोलेरो असल में कुछ खास है।
          </p>

          {/* ARROWS */}
          <div className="flex justify-end gap-3 mt-8">
  <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center">
    ‹
  </button>
  <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center">
    ›
  </button>
</div>

        </div>
      </div>
    </section>
  );
}
