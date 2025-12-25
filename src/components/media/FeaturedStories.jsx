import React from "react";
import head from "/images/media/featured/f1.webp";

export default function FeaturedStories() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 pb-20">

      {/* ================= SECTION TITLE ================= */}
      {/* 🔴 FIXED: size & weight to match design */}
      <h2
  className="
    font-rethink
    font-medium
    text-[32px]
    leading-[100%]
    tracking-[-0.02em]
    text-[#101010]
    mb-6
  "
>
  Featured Stories
</h2>


      {/* ================= CARD ================= */}
      {/* 🔴 FIXED: added proper elevation */}
      <div
        className="
          bg-white
          rounded-[24px]
          p-6
          grid
          grid-cols-1
          lg:grid-cols-[1.1fr_0.9fr]
          gap-10
          items-stretch

          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        {/* ================= LEFT IMAGE ================= */}
        <div className="w-full h-full">
          <img
            src={head}
            alt="Featured Story"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col justify-between h-full">

          {/* TEXT CONTENT */}
          <div>
            {/* 🔴 FIXED: TITLE typography */}
            <h3
              className="
                font-rethink
                font-medium
                text-[32px]
                leading-[100%]
                tracking-[-0.02em]
                text-[#1A212F]
              "
            >
              Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी,
              अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट
            </h3>

            {/* 🔴 FIXED: DESCRIPTION typography */}
            <p
              className="
                mt-4
                font-rethink
                font-normal
                text-[20px]
                leading-[100%]
                tracking-[-0.02em]
                text-[#1A212F]/70
              "
            >
              Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की
              ज़रूरत नहीं पड़ती। शुरुआत में ड्राइवर इसे बस चालू कर के छोड़ दे,
              फिर सामने से गाड़ी आए… क्या भारत में भी कभी ड्राइवरलेस कार दौड़
              सकेगी? यह सवाल आपके मन में भी कई बार आया होगा। लेकिन इस सवाल का
              जवाब ढूंढने के लिए हम आपको लेकर चलते हैं… बेहद आम-सी दिखने वाली
              यह बोलेरो असल में कुछ खास है।
            </p>
          </div>

          {/* ================= ARROWS ================= */}
          {/* 🔴 FIXED: size, border, icon weight */}
         {/* ================= DARK ARROWS ================= */}
{/* ================= DARK OUTLINE ARROWS ================= */}
{/* ================= DESIGN-MATCHED ARROWS ================= */}
{/* ================= DESIGN-MATCHED ARROWS (BIG ICON) ================= */}
<div className="flex justify-end gap-3 mt-6">
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
      </div>
    </section>
  );
}
