import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blog";
import Career from "./pages/Career";
import Media from "./pages/Media";
import Research from "./pages/Research";

// RESEARCH SUB-PAGES
import Onroad from "./pages/Onroad";
import OffRoad from "./pages/Offroad";
import Perception from "./pages/Perception";
import MappingLocalization from "./pages/MappingLocalization";
import MotionPlanning from "./pages/MotionPlanning";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/media" element={<Media />} />

        {/* RESEARCH */}
        <Route path="/research" element={<Research />} />
        <Route path="/research/on-road" element={<Onroad />} />
        <Route path="/research/off-road" element={<OffRoad />} />
        <Route path="/research/perception" element={<Perception />} />
        <Route
          path="/research/mapping-localization"
          element={<MappingLocalization />}
        />
        <Route
          path="/research/motion-planning"
          element={<MotionPlanning />}
        />
      </Routes>

      <Footer />
    </>
  );
}
