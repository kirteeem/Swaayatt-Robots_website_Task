import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { researchMenu } from "../data/researchMenu";

const researchCollage = [
  "/images/research/collage/img-1.webp",
  "/images/research/collage/img-2.png",
  "/images/research/collage/img-3.jpg",
  "/images/research/collage/img-4.webp",
  "/images/research/collage/img-5.webp",
];

export default function Header() {
  const [open, setOpen] = useState(false);        // desktop research
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-[1000] bg-white border-b">

      {/* DESKTOP HEADER */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-[80px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/Swaayatt/Swaayatt.png"
              className="w-12 h-12 object-contain"
              alt="Swaayatt Robots"
            />
            <div className="font-semibold text-[16px] leading-tight text-[#1C1C1C]">
              <div>SWAAYATT</div>
              <div>ROBOTS</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10 text-[18px] font-semibold text-[#1C1C1C]">

            {/* RESEARCH DROPDOWN (DESKTOP UNCHANGED) */}
            <div ref={ref} className="relative">
              <button
                onClick={() => setOpen((p) => !p)}
                className="flex items-center gap-2 hover:opacity-80"
              >
                Research <ChevronDown size={18} />
              </button>

              {open && (
                <div className="absolute left-[-180px] top-[60px] w-[720px] h-[300px] bg-white border border-[#E5E7EB] rounded-[16px] shadow-2xl z-[2000] flex overflow-hidden">
                  {/* LEFT COLLAGE */}
                  <div className="relative w-[420px] h-full overflow-hidden rounded-l-[16px]">
                    <div className="grid grid-cols-5 h-full">
                      {researchCollage.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full h-full object-cover" />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-[36px] font-semibold mb-2">Research</h3>
                      <p className="text-[16px] opacity-90 max-w-[340px]">
                        Dive into the challenges and breakthroughs of autonomous driving.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT MENU */}
                  <div className="flex-1 px-7 py-7 flex flex-col justify-center gap-1.5">
                    {researchMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="px-4 py-[10px] rounded-[8px] text-[16px] hover:bg-[#E9F0FF]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/media">Media</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="max-w-[1440px] mx-auto px-6 py-4 space-y-4 text-[16px]">

            {/* MOBILE RESEARCH (CONTROLLED, SAME FEEL) */}
            <button
              onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
              className="w-full flex items-center justify-between font-medium"
            >
              Research
              <ChevronDown
                size={18}
                className={`transition ${mobileResearchOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileResearchOpen && (
              <div className="pl-4 space-y-2">
                {researchMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileResearchOpen(false);
                    }}
                    className="block text-gray-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/media" onClick={() => setMobileOpen(false)}>Media</Link>
            <Link to="/blogs" onClick={() => setMobileOpen(false)}>Blogs</Link>
            <Link to="/career" onClick={() => setMobileOpen(false)}>Career</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
