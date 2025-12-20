import { Link } from "react-router-dom";
const blogs = [
  {
    id: 1,
    image: "/images/Blogs/Blog-1.webp",
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description:
      "Autonomous Driving is undeniably the most formidable AI challenge of this decade. It remains a dynamic focus of active research.",
    date: "2023-10-28",
    videoUrl: "",
  },
  {
    id: 2,
    image: "/images/Blogs/Blogs.webp",
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    description:
      "Motion and path planning in completely unknown environments is an extremely challenging problem.",
    date: "2023-10-17",
    videoUrl: "",
  },
  {
    id: 3,
    image: "/images/Blogs/Blog-3.webp",
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description:
      "Autonomous vehicles often have to negotiate not just structured but unstructured environments.",
    date: "2023-10-28",
    videoUrl: "",
  },
  {
    id: 4,
    image: "/images/Blogs/Blog-1.webp",
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description:
      "An evolving approach to navigation where biological inspirations play a key role.",
    date: "2023-10-28",
    videoUrl: "",
  },
];
export default function Blogs() {
  return (
    <main className="bg-white">
      {/* ↓ reduced top padding ONLY for mobile */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-16 pb-16">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-[36px] font-semibold text-[#111]">
            Discover and Learn
          </h1>
          <p className="mt-3 text-[16px] text-[#6B7280]">
            Explore in-depth articles on autonomous driving and the challenges
            of decision-making in unstructured environments
          </p>
        </div>

        {/* ===== BLOG GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.id}`} className="group">
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-white transition-transform duration-200 hover:-translate-y-[4px]">

                {/* ===== IMAGE (responsive height) ===== */}
                <div className="h-[150px] sm:h-[180px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* ===== CONTENT ===== */}
                <div className="p-4 flex flex-col justify-between h-[190px]">

                  {/* TEXT */}
                  <div className="space-y-2">
                    <h3 className="text-[20px] font-semibold text-[#1A212F] leading-snug line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-[16px] text-[#1A212FB2] leading-relaxed line-clamp-3">
                      {blog.description}
                    </p>
                  </div>

                  {/* META + VIDEO */}
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-[12px] text-[#9CA3AF]">
                      {blog.date}
                    </p>

                    {blog.videoUrl ? (
                      <a
                        href={blog.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-[#9CA3AF] hover:underline"
                      >
                        ▶ Video
                      </a>
                    ) : (
                      <span className="text-[12px] text-[#9CA3AF]">
                        ▶ Video
                      </span>
                    )}
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
