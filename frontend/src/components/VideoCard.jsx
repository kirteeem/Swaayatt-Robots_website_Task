export default function VideoCard({ data, section }) {
  return (
    <div className="w-[360px] shrink-0">

      {/* THUMBNAIL */}
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-full object-cover"
        />

        {/* PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-4 space-y-2">
        <h3 className="font-rethink font-bold text-[16px] leading-tight text-[#3F3F3F] line-clamp-2">
          {data.title}
        </h3>

        <p className="font-rethink text-[13px] text-[#737373] line-clamp-3">
          {data.description}
        </p>

        <p className="text-[11px] text-[#9CA3AF]">
          {data.date}
        </p>
      </div>
    </div>
  );
}
