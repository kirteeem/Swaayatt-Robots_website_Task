import { useRef } from "react";
import ResearchVideoCard from "./ResearchVideoCard";

export default function ResearchSlider({ title, description, data }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  if (!Array.isArray(data)) return null;

  return (
    <section className="mb-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[20px] font-semibold">
            {title} ↗
          </h2>
          <p className="text-[13px] text-gray-500 max-w-2xl mt-1">
            {description}
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 rounded-full border flex items-center justify-center"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="w-9 h-9 rounded-full border flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.map((item) => (
          <ResearchVideoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
