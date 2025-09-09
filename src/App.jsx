import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Latest from "./pages/Latest";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import Collections from "./pages/Collections";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
         <Navbar />
         <Toggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/latest" element={<Latest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
