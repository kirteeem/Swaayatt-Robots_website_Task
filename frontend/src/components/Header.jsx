import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { researchMenu } from "../data/researchMenu";
import { useTheme } from "../context/ThemeContext";

const researchCollage = [
  "/images/research/collage/img-1.webp",
  "/images/research/collage/img-2.png",
  "/images/research/collage/img-3.jpg",
  "/images/research/collage/img-4.webp",
  "/images/research/collage/img-5.webp",
];

export default function Header({ variant = "default" }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (variant !== "home") return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isHome = variant === "home";
  const isDarkVariant = variant === "dark";
  const useDarkTheme = isDarkMode || isDarkVariant || (isHome && !scrolled);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${
          isHome
            ? scrolled
              ? "bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-white/10"
              : "bg-transparent"
            : useDarkTheme
            ? "bg-black border-b border-white/10"
            : "bg-white"
        }
      `}
    >
      <div className="max-w-[93vw] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-[80px] flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/Swaayatt/Swaayatt.png"
              className="w-12 h-12 object-contain"
              alt="Swaayatt Robots"
            />
            <div
              className={`font-semibold text-[16px] leading-tight ${
                useDarkTheme ? "text-white" : "text-[#1C1C1C]"
              }`}
            >
              <div>SWAAYATT</div>
              <div>ROBOTS</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[18px] font-semibold ${
              useDarkTheme ? "text-white" : "text-[#1C1C1C]"
            }`}
          >
            {/* RESEARCH */}
            <div ref={ref} className="relative">
              <div className="flex items-center">
                <Link
                  to="/research"
                  onClick={() => setOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  Research
                </Link>
                <button
                  onClick={() => setOpen((p) => !p)}
                  className="ml-2 hover:opacity-80 transition-opacity"
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              {open && (
                <div className="absolute left-[-180px] top-[60px] w-[720px] h-[300px] bg-white dark:bg-gray-900 rounded-[16px] shadow-2xl flex overflow-hidden border dark:border-gray-800">
                  {/* LEFT COLLAGE */}
                  <div className="relative w-[22vw] h-full overflow-hidden rounded-[1.2vw]">
                    <div className="absolute inset-[0.6vw] overflow-hidden rounded-[0.9vw]">
                      <div className="grid grid-cols-5 h-full">
                        {researchCollage.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="absolute bottom-[1.3vw] left-[1.3vw] text-white">
                      <div className="flex items-end gap-[0.8vw] translate-y-[-0.25vw]">
                        <h3 className="text-[2vw] font-medium tracking-[-0.02em] leading-none">
                          Research
                        </h3>
                        <span className="w-[1.8vw] h-[1.8vw] rounded-full flex items-center justify-center backdrop-blur-[0.6vw] bg-white/20 border border-white/30 text-[1vw] font-medium translate-y-[0.15vw]">
                          ›
                        </span>
                      </div>

                      <p className="mt-[0.75vw] max-w-[17vw] text-[0.85vw] font-normal tracking-[-0.02em] leading-none opacity-90">
                        Dive into the challenges, breakthroughs, and the potential
                        of self-driving cars in one of the world’s most complex
                        driving environments.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT MENU */}
                  <div className="flex-1 px-7 py-7 flex flex-col justify-center">
                    {researchMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/media" className="hover:opacity-80">Media</Link>
            <Link to="/blogs" className="hover:opacity-80">Blogs</Link>
            <Link to="/career" className="hover:opacity-80">Career</Link>
            <Link to="/contact" className="hover:opacity-80">Contact</Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </nav>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? (
                <Sun size={20} className={useDarkTheme ? "text-yellow-500" : "text-gray-700"} />
              ) : (
                <Moon size={20} className={useDarkTheme ? "text-white" : "text-gray-700"} />
              )}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X size={26} className={useDarkTheme ? "text-white" : "text-gray-800"} />
              ) : (
                <Menu size={26} className={useDarkTheme ? "text-white" : "text-gray-800"} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
