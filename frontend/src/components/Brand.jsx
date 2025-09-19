import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import imgLeft from "../assets/img_07.webp";
import imgRight from "../assets/img_08.jpg";
import circleImg from "../assets/img_09.png";
import starImg from "../assets/img_10.png";

function Brand() {
    const navigate = useNavigate()
  return (
    <section className="relative bg-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start relative">
          <img
            src={imgLeft}
            alt="Teamwork"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] rounded-full object-cover bg-amber-100 animate-slideInLeft"
          />
          <img
            src={starImg} 
            alt="Rotating Circle"
            className="absolute bottom-0 w-[50px] h-[50px] animate-spin-slow"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 leading-snug">
            Comprehensive Brand <br /> Development & <br /> Digital Growth
            Solutions
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
            Welcome to{" "}
            <span className="font-semibold text-sky-700">Startup Mitr</span>,
            where we empower businesses to thrive in the digital era. We
            specialize in brand development, digital marketing, sales strategy,
            and IT services.
          </p>

          <button onClick={() => navigate("/about")}
          className="mt-6 inline-flex items-center gap-2 bg-sky-700 hover:bg-indigo-900 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition">
            Learn More
            <ArrowUpRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative">
          
          <img
            src={circleImg} 
            alt="Rotating Circle"
            className="absolute top-40 right-100 w-[150px] h-[100px] animate-spin-slow animate-slideInRight"
          />

          <img
            src={imgRight}
            alt="Digital Growth"
            className="py-10 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
               rounded-[12rem] object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Brand;
