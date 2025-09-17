import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCards";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import service_01 from "../assets/service_01.webp";
import service_02 from "../assets/service_02.webp";
import service_04 from "../assets/service_04.jpeg";
import service_03 from "../assets/service_03.png";
import service_05 from "../assets/service_05.jpg";
import service_06 from "../assets/service_06.webp";

const servicesData = [
  { title: "Startup Launch Support", description: "Helping new businesses get noticed...", image: service_01 },
  { title: "Business Expansion Planning", description: "Scaling existing businesses...", image: service_02 },
  { title: "Verified Distributor Connections", description: "Directly connect with trustworthy distributors...", image: service_3  },
  { title: "Business & Market Consultation", description: "Providing customized advice...", image: service_04 },
  { title: "Digital Presence & Marketing", description: "Build a solid online presence...", image: service_05 },
  { title: "All-in-One Growth Services", description: "Business growth solutions...", image: service_06 },
];

const Services = ({ preview = false }) => {
  const navigate = useNavigate();
  const [showAll] = useState(!preview); 
  const sectionRef = useRef(null);

 
  return (
    <div className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16" ref={sectionRef}>
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
            WHAT WE CREATE
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-3">
            Providing Best Services
          </h1>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {(showAll ? servicesData : servicesData.slice(0, 4)).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        
        {preview && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => {navigate("/services")}}
              className="flex items-center gap-2 bg-violet-700 hover:bg-violet-950 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition"
            >
              View All Services
              <ArrowUpRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
