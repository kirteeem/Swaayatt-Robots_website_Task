// timeline/CenterFeature.jsx

export default function CenterFeature() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[31%]
        -translate-x-1/2
        -translate-y-1/2
        z-20
      "
    >
      {/* ================= LEFT SIDE IMAGES ================= */}

      {/* Left Far */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-32vw] opacity-40 scale-75 z-0 transition-all duration-500">
        <div className="relative w-[14vw] aspect-video overflow-hidden rounded-lg">
          <img
            src="/images/Blogs/Blogs.webp"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/25" />
          <PlayIcon />
        </div>
      </div>

      {/* Left Near */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-18vw] opacity-60 scale-90 z-10 transition-all duration-500">
        <div className="relative w-[16vw] aspect-video overflow-hidden rounded-lg">
          <img
            src="/images/Blogs/Homepage-1.webp"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/25" />
          <PlayIcon />
        </div>
      </div>

      {/* ================= RIGHT SIDE IMAGES ================= */}

      {/* Right Near */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-18vw] opacity-60 scale-90 z-10 transition-all duration-500">
        <div className="relative w-[16vw] aspect-video overflow-hidden rounded-lg">
          <img
            src="/images/research/offroad/Offroad.webp"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/25" />
          <PlayIcon />
        </div>
      </div>

      {/* Right Far */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-32vw] opacity-40 scale-75 z-0 transition-all duration-500">
        <div className="relative w-[14vw] aspect-video overflow-hidden rounded-lg">
          <img
            src="/images/Blogs/Blog-3.webp"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/25" />
          <PlayIcon />
        </div>
      </div>

      {/* ================= NEXON-GREEN REFLECTION (UNCHANGED) ================= */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-[65%]
          w-[26vw]
          aspect-video
          blur-[55px]
          opacity-40
          scale-110
          pointer-events-none
        "
      >
        <img
          src="/images/Blogs/Blog-1.webp"
          aria-hidden
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5F8C50]/45 mix-blend-multiply" />
      </div>

      {/* ================= MAIN CENTER IMAGE (UNCHANGED) ================= */}
<div className="relative w-[24vw] aspect-video overflow-hidden z-20">
  {/* IMAGE */}
  <img
    src="/images/Blogs/Blog-1.webp"
    alt=""
    className="w-full h-full object-cover"
  />

  {/* BOTTOM DARK GRADIENT (FOR VISIBILITY) */}
  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

  {/* YOUTUBE PLAY SIGN (BOTTOM RIGHT) */}
  <div className="absolute bottom-3 right-3">
    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-white ml-[2px]"
        fill="currentColor"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
</div>

    </div>
  );
}

/* ================= PLAY ICON ================= */
function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-white ml-[2px]"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
