import React from "react";
import ServiceCard from "../components/ServiceCards";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';


const Projects = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
          PROJECT COMPLETED
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-3">
          Project We Have Done
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Dolorum tempor quis dictum tempore, curabitur commoding sec <br /> inventor
          aute maecenas commodo, nibh
        </p>
      </div>

      
    </div>
  );
};

export default Projects;
