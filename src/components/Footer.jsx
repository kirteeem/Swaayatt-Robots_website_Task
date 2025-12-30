import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook } from "lucide-react";
import image from "/images/Swaayatt/Swaayatt.png";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path as needed

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-black text-gray-300 border-gray-800' : 'bg-[#F3F4F6] text-[#3A3A3A] border-gray-200'} border-t transition-colors duration-300`}>
      <div className="max-w-[93vw] mx-auto px-6 sm:px-10 lg:px-16">

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
          <div className="space-y-3 mt-4 sm:mt-6">
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="Swaayatt Robots"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className={`text-[20px] font-semibold ${isDarkMode ? 'text-white' : 'text-[#111]'}`}>
                  SWAAYATT
                </p>
                <p className={`text-[14px] tracking-[0.25em] ${isDarkMode ? 'text-gray-300' : 'text-[#111]'}`}>
                  ROBOTS
                </p>
              </div>
            </div>

            <p className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#3A3A3A]'} whitespace-nowrap`}>
              Autonomous Driving and ADAS
            </p>

            <div className={`flex items-center gap-4 ${isDarkMode ? 'text-gray-400' : 'text-[#111]'}`}>
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
            <div className={`w-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} h-full`} />
          </div>

          {/* ===== ADDRESS ===== */}
          <div className="space-y-2 justify-self-start text-left lg:-ml-[27rem] mt-4 sm:mt-6">
            <p className={`text-[15px] font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#3A3A3A]'}`}>
              Swaayatt Robots Pvt. Ltd.
            </p>
            <p className={`text-[15px] leading-snug ${isDarkMode ? 'text-gray-400' : 'text-[#3A3A3A]'}`}>
              1/3D, DRM Rd, Saket Nagar, Habib Ganj,
              <br />
              Bhopal, Madhya Pradesh–462026
            </p>
            <p className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#3A3A3A]'}`}>
              Phone: +91 755 494 7025
            </p>
          </div>

          {/* ===== COMPANY ===== */}
          <div className="space-y-3 justify-self-start">
            <p className={`font-medium text-[14px] ${isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
              Company
            </p>
            <Link 
              to="/blogs" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Blogs
            </Link>
            <Link 
              to="/media" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Media
            </Link>
            <Link 
              to="/career" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Career
            </Link>
            <Link 
              to="/contact" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Contact
            </Link>
          </div>

          {/* ===== RESEARCH ===== */}
          <div className="space-y-3 justify-self-start">
            <p className={`font-medium text-[14px] ${isDarkMode ? 'text-gray-500' : 'text-[#9CA3AF]'}`}>
              Research ↗
            </p>
            <Link 
              to="/research/on-road" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              On Road
            </Link>
            <Link 
              to="/research/off-road" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Off Road
            </Link>
            <Link 
              to="/research/mapping-localization" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Mapping and Localization
            </Link>
            <Link 
              to="/research/motion-planning" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Motion Planning
            </Link>
            <Link 
              to="/research/perception" 
              className={`block text-[13px] ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#242424] hover:text-black'}`}
            >
              Perception
            </Link>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-4`}>
          <p className={`text-[11px] text-center ${isDarkMode ? 'text-gray-500' : 'text-[#767676]'}`}>
            © Swaayatt Robots Private Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}