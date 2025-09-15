import React from "react";
import { FaPlay } from "react-icons/fa";
import img_01 from "../assets/img_01.png";
import img_02 from "../assets/img_03.png";
import img_04 from "../assets/img_04.png";
import img_05 from "../assets/img_05.png";
import img_06 from "../assets/img_06.png";

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center md:justify-start order-1 md:order-none">
          <img
            src={img_01}
            alt="Business Growth"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] rounded-full"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left order-3 md:order-none">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
            Social Media Marketing
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-indigo-950 leading-snug sm:leading-tight mt-3 sm:mt-4">
            Easily Grow Your <br /> Business
          </h1>

          <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl">
            Veniam eaque irure faucibus deleniti proident lacus aliqua culpa
            modi, pede leo platea primis montes.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            <button
              className="flex items-center gap-2 bg-violet-700 hover:bg-violet-950 text-white font-semibold 
    px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base rounded-full shadow transition"
            >
              <span>Get Started</span>
            </button>

            <button
              className="flex items-center gap-2 border-2 font-semibold border-violet-600 text-violet-600 
    hover:bg-violet-600 hover:text-white px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base 
    rounded-full shadow transition"
            >
              <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>How We Work</span>
            </button>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">
            <img src={img_04} alt="Mangr" className="h-6 sm:h-8" />
            <img src={img_05} alt="Artworx" className="h-6 sm:h-8" />
            <img src={img_06} alt="Fibrolo" className="h-6 sm:h-8" />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end order-2 md:order-none">
          <img
            src={img_02}
            alt="Analytics"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
