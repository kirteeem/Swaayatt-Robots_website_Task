// timeline/GridBackground.jsx

export default function GridBackground() {
  return (
    <>
      <div className="absolute top-[5%] bottom-[12%] left-[27%] w-px bg-white/70 pointer-events-none" />
      <div className="absolute top-[5%] bottom-[10%] left-1/2 -translate-x-1/2 w-px bg-white/70 pointer-events-none" />
      <div className="absolute left-0 top-[16.5%] w-[82%] h-px bg-white/70 pointer-events-none" />
      <div className="absolute left-0 top-[42.5%] w-[82%] h-px bg-white/70 pointer-events-none" />
    </>
  );
}
