import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook } from "lucide-react";
import image from "/images/Swaayatt/Swaayatt.png";

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* ================= MAIN GRID ================= */}
        <div
          className="
            grid
            gap-y-10
            gap-x-6
            lg:gap-x-16
            py-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.2fr_0.05fr_1fr_0.7fr_0.7fr]
          "
        >
          {/* ===== BRAND ===== */}
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="Swaayatt Robots"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-[20px] font-semibold text-[#111]">
                  SWAAYATT
                </p>
                <p className="text-[14px] tracking-[0.25em] text-[#111]">
                  ROBOTS
                </p>
              </div>
            </div>

            <p className="text-[15px] text-[#3A3A3A]">
              Autonomous Driving and ADAS
            </p>

            <div className="flex items-center gap-4 text-[#111]">
              <Phone className="w-[16px] h-[16px]" />
              <Mail className="w-[16px] h-[16px]" />
              <svg
                className="w-[16px] h-[16px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
              </svg>
              <Linkedin className="w-[16px] h-[16px]" />
              <Facebook className="w-[16px] h-[16px]" />
            </div>
          </div>

          {/* ===== DIVIDER ===== */}
          <div className="hidden lg:flex justify-end pr-[28rem]">
            <div className="w-px bg-gray-300 h-full" />
          </div>

          {/* ===== ADDRESS ===== */}
          <div className="space-y-2 text-[#3A3A3A] justify-self-start text-left lg:-ml-[27rem]">
            <p className="text-[15px] font-medium">
              Swaayatt Robots Pvt. Ltd.
            </p>
            <p className="text-[15px] leading-snug">
              1/3D, DRM Rd, Saket Nagar, Habib Ganj,
              <br />
              Bhopal, Madhya Pradesh–462026
            </p>
            <p className="text-[15px]">
              Phone: +91 755 494 7025
            </p>
          </div>

          {/* ===== COMPANY ===== */}
          <div className="space-y-3 justify-self-start">
            <p className="font-medium text-[#9CA3AF] text-[14px]">
              Company
            </p>
            <Link to="/blogs" className="block text-[13px] text-[#242424] hover:text-black">
              Blogs
            </Link>
            <Link to="/media" className="block text-[13px] text-[#242424] hover:text-black">
              Media
            </Link>
            <Link to="/career" className="block text-[13px] text-[#242424] hover:text-black">
              Career
            </Link>
            <Link to="/contact" className="block text-[13px] text-[#242424] hover:text-black">
              Contact
            </Link>
          </div>

          {/* ===== RESEARCH ===== */}
          <div className="space-y-3 justify-self-start">
            <p className="font-medium text-[#9CA3AF] text-[14px]">
              Research ↗
            </p>
            <Link to="/research/on-road" className="block text-[13px] text-[#242424] hover:text-black">
              On Road
            </Link>
            <Link to="/research/off-road" className="block text-[13px] text-[#242424] hover:text-black">
              Off Road
            </Link>
            <Link to="/research/mapping-localization" className="block text-[13px] text-[#242424] hover:text-black">
              Mapping and Localization
            </Link>
            <Link to="/research/motion-planning" className="block text-[13px] text-[#242424] hover:text-black">
              Motion Planning
            </Link>
            <Link to="/research/perception" className="block text-[13px] text-[#242424] hover:text-black">
              Perception
            </Link>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-gray-200 py-4">
          <p className="text-[11px] text-center text-[#767676]">
            © Swaayatt Robots Private Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
