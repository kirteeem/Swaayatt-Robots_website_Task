// Import ONE thumbnail (used for all videos)

export default function VideoCard({ video }) {
  return (
    <div className="group cursor-pointer">

      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
        <img
          src="../../public/images/Blogs/Blog-1.webp"
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-4">
       <h3
  className="
    max-w-[519px]
    text-[14px]
    leading-[14px]
    tracking-[-0.28px]
    font-normal
    text-[#737373]
    hover:text-[#3F3F3F]
    transition-colors
    duration-200
  "
>
          {video.title}
        </h3>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
          {video.description}
        </p>

        <p className="text-xs text-gray-400 mt-4 tracking-wide">
          {video.date}
        </p>
      </div>
    </div>
  );
}
