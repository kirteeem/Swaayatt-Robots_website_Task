// timeline/GridBackground.jsx

export default function GridBackground() {
  return (
    <>
      {/* ================= VERTICAL LINES ================= */}

      {/* LEFT VERTICAL */}
   <div
  className="
    absolute
    top-0
    bottom-0
    left-[27%]
    w-px
    bg-white/15
    pointer-events-none
  "
/>


      {/* RIGHT VERTICAL */}
    <div
  className="
    absolute
    top-0
    bottom-0
    left-1/2
    -translate-x-1/2
    w-px
    bg-white/15
    pointer-events-none
  "
/>


      {/* ================= HORIZONTAL LINES ================= */}

      {/* TOP HORIZONTAL (for upper videos) */}
     <div
  className="
    absolute
    left-0 right-0
    top-[19%]
    h-px
    bg-white/15
    pointer-events-none
  "
/>


      {/* BOTTOM HORIZONTAL (for lower videos) */}
      <div
        className="
          absolute
          left-0 right-0
          top-[42%]
          h-px
          bg-white/15
          pointer-events-none
        "
      />
    </>
  );
}
