import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);

  const researchRef = useRef(null);

  const navItems = ["media", "blogs", "career", "contact"];

  // Close Research dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        researchRef.current &&
        !researchRef.current.contains(event.target)
      ) {
        setResearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
                          <img
  src="/images/Swaayatt/Swaayatt.png"
  alt="Swaayatt Robots"
  className="w-14 h-14 min-w-[56px] min-h-[56px] object-contain block"
/>
            <div className="leading-none">
              <div className="font-bold text-sm">SWAAYATT</div>
              <div className="font-bold text-sm">ROBOTS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">

            {/* Research Dropdown */}
            <div className="relative" ref={researchRef}>
              <button
                onClick={() => setResearchOpen((prev) => !prev)}
                className="flex items-center gap-1 text-gray-900 hover:text-gray-500 transition"
              >
                Research <ChevronDown size={14} />
              </button>

              {researchOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/research/off-road"
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Off Road
                  </Link>
                  <Link
                    to="/research/on-road"
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    On Road
                  </Link>
                  <Link
                    to="/research/mapping-localization"
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Mapping & Localization
                  </Link>
                  <Link
                    to="/research/motion-planning"
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Motion Planning
                  </Link>
                  <Link
                    to="/research/perception"
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Perception
                  </Link>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="text-gray-900 transition-colors duration-200 hover:text-gray-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-3 space-y-2 text-sm">

            {/* Research Section */}
            <div>
              <p className="px-2 font-semibold">Research</p>
              <Link
                to="/research/off-road"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 hover:text-gray-500"
              >
                Off Road
              </Link>
              <Link
                to="/research/on-road"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 hover:text-gray-500"
              >
                On Road
              </Link>
              <Link
                to="/research/mapping-localization"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 hover:text-gray-500"
              >
                Mapping & Localization
              </Link>
              <Link
                to="/research/motion-planning"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 hover:text-gray-500"
              >
                Motion Planning
              </Link>
              <Link
                to="/research/perception"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 hover:text-gray-500"
              >
                Perception
              </Link>
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2 py-2 hover:text-gray-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}
