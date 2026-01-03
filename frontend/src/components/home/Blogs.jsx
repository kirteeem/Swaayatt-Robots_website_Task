import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    image: "/images/Blogs/blog1.png",
  },
  {
    id: 2,
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    image: "/images/Blogs/blog2.png",
  },
  {
    id: 3,
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    image: "/images/Blogs/blog3.png",
  },
  {
    id: 4,
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    image: "/images/Blogs/blog4.png",
  },
  {
    id: 5,
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    image: "/images/Blogs/blog4.png",
  },
  {
    id: 6,
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    image: "/images/Blogs/blog3.png",
  },
];

const Blogs = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(25); // percentage

  // Detect screen size and adjust visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setVisibleCards(1);
        setCardWidth(100);
      } else if (window.innerWidth < 1024) {
        // Tablet
        setVisibleCards(2);
        setCardWidth(50);
      } else {
        // Desktop
        setVisibleCards(4);
        setCardWidth(25);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (index < blogs.length - visibleCards) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#052f1d] via-[#0a1a12] to-[#0c1210] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-[87vw] mx-auto px-4 sm:px-6 lg:px-0">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 lg:mb-12">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-Rethink Sans font-[550] mb-4 sm:mb-0 text-white">
            Blogs
          </p>
          <div className="flex gap-3 sm:gap-4 self-end sm:self-auto">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 rounded-full flex items-center justify-center disabled:opacity-40 hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handleNext}
              disabled={index >= blogs.length - visibleCards}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-white/30 rounded-full flex items-center justify-center disabled:opacity-40 hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex aligemt gap-4 sm:gap-5 lg:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}%)`,
            }}
          >
            {blogs.map((post) => (
              <article
                key={post.id}
                className="min-w-[calc(100%-1rem)] sm:min-w-[calc(50%-1.25rem)] lg:min-w-[calc(25%-1.5rem)] h-[500px] sm:h-[500px] lg:h-[720px] overflow-hidden relative bg-black border border-white/10 rounded-lg sm:rounded-xl lg:rounded-none"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay for better text readability */}

                <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                  <p className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-10 sm:mb-6 lg:mb-10">
                    {post.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots indicator for mobile/tablet */}
        <div className="flex justify-center mt-8 sm:mt-10 lg:hidden">
          <div className="flex gap-2">
            {Array.from({ length: blogs.length - visibleCards + 1 }).map(
              (_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setIndex(dotIndex)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    dotIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;