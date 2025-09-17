import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import imgLeft from "../assets/about_left.jpg";
import imgRight from "../assets/about_right.jpg";
import circleImg from "../assets/img_09.png";
import starImg from "../assets/img_10.png";
import OurSkills from './OurSkills';
import lightImg from "../assets/lite-icons1.svg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-12 relative">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
          WHO WE ARE
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-3">
          About Our Company
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          We are a passionate team dedicated to helping businesses grow through <br />
          innovative strategies, creative marketing, and a strong digital
          presence.
        </p>
      </div>
      <section className="relative bg-white py-1 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start relative">
          <img
            src={imgLeft}
            alt="Teamwork"
            className=" mt-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[350px] rounded-full object-cover bg-amber-100"
          />
          <img
            src={starImg} 
            alt="Rotating Circle"
            className="absolute bottom-5 w-[50px] h-[50px] animate-spin-slow"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-indigo-950 leading-snug">
            Brand Development & Digital Marketing Solutions.
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
            Welcome to{" "}
            <span className="font-semibold text-violet-600">YourCompany</span>,
            where we empower businesses to thrive in the digital era. We
            specialize in brand development, digital marketing, sales strategy,
            and IT services.
          </p>

          <button onClick={() => navigate("/about")}
          className="mt-6 inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-950 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition">
            Learn More
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative">
          
          <img
            src={circleImg} 
            alt="Rotating Circle"
            className="absolute top-40 right-80 w-[150px] h-[100px] animate-spin-slow"
          />

          <img
            src={imgRight}
            alt="Digital Growth"
            className="lg:mt-40 w-[250px] sm:w-[300px] sm:mt-0 md:w-[350px] lg:w-[350px] 
               rounded-[12rem] object-cover relative z-10"
          />
        </div>
      </div>
    </section>
    <OurSkills/>
    <img
          src={lightImg}
          alt="Light Beam"
          className="absolute top-20 left-1/8  w-[100px] h-[100px] animate-light-float"
        />
    </div>
  );
};

export default AboutUs;
