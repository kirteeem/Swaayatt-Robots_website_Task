import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Swaayatt from "../assets/images/Swaayatt.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["research", "media", "blogs", "career", "contact"];

  return (
    <header className="w-full border-b bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Swaayatt}
              alt="Swaayatt Robots Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-none">
              <div className="font-bold text-sm">SWAAYATT</div>
              <div className="font-bold text-sm">ROBOTS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="text-gray-900
                           transition-colors duration-200
                           hover:text-gray-500
                           active:text-gray-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-900
                           transition-colors duration-200
                           hover:text-gray-500
                           active:text-gray-400"
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
