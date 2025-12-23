export default function VideoCard({ video, section }) {
  const imageSrc = `/images/research/${section}/${video.thumbnail}`;

  return (
    <div className="min-w-[320px] max-w-[320px]">
      <div className="relative h-[180px] rounded-xl overflow-hidden">
        <img
          src={imageSrc}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3 space-y-2">
        <h3 className="text-sm font-medium">{video.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-3">
          {video.description}
        </p>
        <span className="text-[11px] text-gray-400">{video.date}</span>
      </div>
    </div>
  );
}
