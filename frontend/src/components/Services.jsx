import React from "react";
import ServiceCard from "../components/ServiceCards";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import service_01 from "../assets/service_01.webp";
import service_02 from "../assets/service_02.webp";
import service_03 from "../assets/service_03.jpeg";
import service_04 from "../assets/service_04.webp";
const servicesData = [
  {
    title: "Business Marketing Strategy",
    description: "We help you create a solid marketing roadmap to grow your brand.",
    image:service_01,
  },
  {
    title: "SEO & Advertisement",
    description: "Boost your search visibility and online presence effectively.",
    image: service_02,
  },
  {
    title: "Social Campaign Management",
    description: "Run impactful campaigns to engage and convert your audience.",
    image: service_03,
  },
  {
    title: "Business Growth Analysis",
    description: "Track, analyze, and scale your business with data-driven strategies.",
    image: service_04,
  },
];

const Services = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-100">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
          WHAT WE CREATE
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-3">
          Providing Best Services
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Dolorum tempor quis dictum tempore, curabitur commoding sec 
          <br />
          inventor aute maecenas commodo, nibh
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button  onClick = {()=>{navigate('/services')}}
          className="flex items-center gap-2 bg-violet-700 hover:bg-violet-950 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition">
          View All Services
          <ArrowUpRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Services;
