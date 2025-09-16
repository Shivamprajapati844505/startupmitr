import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Mentors from "./components/Mentors";
import ContactUs from "./components/ContactUs";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Team from "./pages/Team";
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<ContactUs />} />

            
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
