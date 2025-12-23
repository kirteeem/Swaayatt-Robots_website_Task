import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blog";
import Research from "./pages/Research";

import OffRoad from "./pages/Offroad";
import Onroad from "./pages/Onroad";
import Perception from "./pages/Perception";
import MappingLocalization from "./pages/MappingLocalization";
import MotionPlanning from "./pages/MotionPlanning";
import Career from "./pages/Career";
import Media from "./pages/Media";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/media" element={<Media />} />

        {/* RESEARCH OVERVIEW */}
        <Route path="/research" element={<Research />} />

        {/* RESEARCH PAGES */}
        <Route path="/research/on-road" element={<Onroad />} />
        <Route path="/research/off-road" element={<OffRoad />} />
        <Route path="/research/perception" element={<Perception />} />
        <Route path="/research/mapping-localization" element={<MappingLocalization />} />
        <Route path="/research/motion-planning" element={<MotionPlanning />} />
      </Routes>

      <Footer />
    </>
  );
}
