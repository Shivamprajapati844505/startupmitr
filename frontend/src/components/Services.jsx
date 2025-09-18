import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCards";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import servicesData from "../assets/servicesData.js";
import lightImg from "../assets/lite-icons1.svg";


const Services = ({ preview = false }) => {
  const navigate = useNavigate();
  const [showAll] = useState(!preview); 
  const sectionRef = useRef(null);

 
  return (
    <div className="bg-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16" ref={sectionRef}>
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
           OUR SERVICES
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-3">
            Providing Best Services
          </h1>
          <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg ">
            Our Core Services to Accelerate Your Business Growth
          </p>
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
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <img
          src={lightImg}
          alt="Light Beam"
          className="absolute top-10 left-1/8  w-[100px] h-[100px] animate-light-float"
        />
        
    </div>
  );
};

export default Services;
