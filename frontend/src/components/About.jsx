import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import imgLeft from "../assets/about_left.jpg";
import imgRight from "../assets/about_right.jpg";
import circleImg from "../assets/img_09.png";
import OurSkills from './OurSkills';
import AnimatedText from './../pages/AnimatedText';
import AnimatedHeading from './../pages/AnimatedHeading';


const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-12 relative">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-sky-700 uppercase">
          WHO WE ARE
        </p>
        
        <AnimatedHeading text="About Our Company"/>
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
            className=" mt-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[350px] rounded-full object-cover bg-amber-100 animate-slideInLeft"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left max-w-xl mx-auto">
          <AnimatedText
            text="Comprehensive"
            delayOffset={0}
            className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />

          <AnimatedText
            text="Brand"
            delayOffset={0.5}
            className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />

          <AnimatedText
            text="Development &"
            delayOffset={1}
            className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />

          <AnimatedText
            text="Brand Audit"
            delayOffset={1.5}
            className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />

          <AnimatedText
            text="Solutions"
            delayOffset={1.5}
            className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
            Welcome to{" "}
            <span className="font-semibold text-sky-700">Startup Mitr</span>,
            where we empower businesses to thrive in the digital era. We
            specialize in brand development, digital marketing, sales strategy,Brand Audit, and IT services.
          </p>

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
            className="lg:mt-40 w-[250px] sm:w-[300px] sm:mt-0 md:w-[350px] lg:w-[350px] rounded-[12rem] object-cover relative z-10 animate-slideInRight"
          />
        </div>
      </div>
    </section>
    <OurSkills/>
  
    </div>
  );
};

export default AboutUs;
