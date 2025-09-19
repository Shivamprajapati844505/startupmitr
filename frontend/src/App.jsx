import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Contact from "./components/ContactUs";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Team from "./pages/Team";
import Services from "./components/Services";
import ScrollToTop from "./pages/ScrollToTop";
import ServiceDetails from './components/ServiceDetails';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
