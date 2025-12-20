import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blog";
import Research from "./pages/Research";
import Offroad from "./pages/Offroad";
import Onroad from "./pages/Onroad";
import MappingLocalization from "./pages/MappingLocalization";
import MotionPlanning from "./pages/MotionPlanning";
import Perception from "./pages/Perception";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/research" element={<Research />}>
          <Route path="off-road" element={<Offroad />} />
          <Route path="on-road" element={<Onroad />} />
          <Route path="mapping-localization" element={<MappingLocalization />} />
          <Route path="motion-planning" element={<MotionPlanning />} />
          <Route path="perception" element={<Perception />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}
