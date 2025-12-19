import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blog"; // 👈 ADD THIS

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} /> {/* 👈 ADD THIS */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
