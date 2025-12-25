import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook } from "lucide-react";
import image from "/images/Swaayatt/Swaayatt.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-y-12 gap-x-10 py-12
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4">

          {/* ===== BRAND ===== */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="Swaayatt Robots"
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="text-[22px] font-semibold text-[#111]">
                  SWAAYATT
                </p>
                <p className="text-[16px] tracking-[0.25em] text-[#111]">
                  ROBOTS
                </p>
              </div>
            </div>

            <p className="text-[16px] text-[#3A3A3A]">
              Autonomous Driving and ADAS
            </p>

            <div className="flex items-center gap-5 text-[#111]">
              <a href="tel:+917554947025">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:contact@swaayatt.com">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/swaayatt-robots" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/swaayattrobots" target="_blank">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ===== ADDRESS ===== */}
          <div className="space-y-3 text-[#3A3A3A]">
            <p className="text-[16px] font-medium">
              Swaayatt Robots Pvt. Ltd.
            </p>
            <p className="text-[16px] leading-snug">
              1/3D, DRM Rd, Saket Nagar, Habib Ganj,
              <br />
              Bhopal, Madhya Pradesh–462026
            </p>
            <p className="text-[16px]">
              Phone: +91 755 494 7025
            </p>
          </div>

          {/* ===== COMPANY ===== */}
          <div className="space-y-3">
            <p className="font-medium text-[#9CA3AF]">Company</p>
            <Link to="/blogs" className="block text-[14px] text-[#242424] hover:text-black">
              Blogs
            </Link>
            <Link to="/media" className="block text-[14px] text-[#242424] hover:text-black">
              Media
            </Link>
            <Link to="/career" className="block text-[14px] text-[#242424] hover:text-black">
              Career
            </Link>
            <Link to="/contact" className="block text-[14px] text-[#242424] hover:text-black">
              Contact
            </Link>
          </div>

          {/* ===== RESEARCH ===== */}
          <div className="space-y-3">
            <p className="font-medium text-[#9CA3AF]">Research ↗</p>
            <Link to="/research/on-road" className="block text-[14px] text-[#242424] hover:text-black">
              On Road
            </Link>
            <Link to="/research/off-road" className="block text-[14px] text-[#242424] hover:text-black">
              Off Road
            </Link>
            <Link to="/research/mapping-localization" className="block text-[14px] text-[#242424] hover:text-black">
              Mapping and Localization
            </Link>
            <Link to="/research/motion-planning" className="block text-[14px] text-[#242424] hover:text-black">
              Motion Planning
            </Link>
            <Link to="/research/perception" className="block text-[14px] text-[#242424] hover:text-black">
              Perception
            </Link>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-[12px] text-center text-[#767676]">
            © Swaayatt Robots Private Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
