import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Outer container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8">

        {/* Main layout: logo (left) + links (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">

          {/* ================= LEFT SECTION ================= */}
          {/* Logo: centered on mobile, left-aligned on desktop */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="Swaayatt Robots"
              className="
                w-52
                sm:w-60
                md:w-72
                lg:w-[30rem]
                h-auto
                object-contain
              "
            />
          </div>

          {/* ================= RIGHT SECTION ================= */}
          {/* Links: stacked on mobile, two columns from sm+ */}
          <div className="mt-4 lg:mt-0 lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">

              {/* Company links */}
              <div className="space-y-2">
                <p className="font-medium text-gray-500">Company</p>
                <Link to="/blogs" className="block text-gray-700">Blogs</Link>
                <Link to="/media" className="block text-gray-700">Media</Link>
                <Link to="/career" className="block text-gray-700">Career</Link>
                <Link to="/contact" className="block text-gray-700">Contact</Link>
              </div>

              {/* Research links */}
              <div className="space-y-2">
                <p className="font-medium text-gray-500">Research ↗</p>
                <Link to="/research/on-road" className="block text-gray-700">
                  On Road
                </Link>
                <Link to="/research/off-road" className="block text-gray-700">
                  Off Road
                </Link>
                <Link to="/research/mapping" className="block text-gray-700">
                  Mapping and Localization
                </Link>
                <Link to="/research/motion-planning" className="block text-gray-700">
                  Motion Planning
                </Link>
                <Link to="/research/perception" className="block text-gray-700">
                  Perception
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-6">
          <p className="text-[11px] text-center text-gray-500">
            © Swaayatt Robots Private Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
