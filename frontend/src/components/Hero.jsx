import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import HeroLeft from "../assets/HeroLeft.png";
import HeroRight from "../assets/HeroRight.png";
import HeroImg from "../assets/rocket.png";
import Bar from "../assets/Bar.webp";
import collab_01 from "../assets/collab_01.png";
import collab_02 from "../assets/collab_02.png";
import collab_03 from "../assets/collab_03.png";
import AnimatedText from "./../pages/AnimatedText";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-bl from-sky-100 via-sky-300 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center md:justify-start order-1 md:order-none">
          <img
            src={HeroLeft}
            alt="Business Growth"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px] rounded-full animate-slideInLeft"
          />
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left order-3 md:order-none">
          {/* <img
            src={Bar}
            alt="box"
            className="w-20 float-once absolute top-110 left-2/3 -translate-x-5/6"
          /> */}
          <AnimatedText
            text="Let’s Build"
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />{" "}
          <br />
          <AnimatedText
            text="Your"
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />
          <AnimatedText
            text="Growth Plan"
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-indigo-900 leading-snug sm:leading-tight"
          />
          <img
            src={HeroImg}
            alt="Rocket person"
            className="h-40 float-up absolute"
          />
          <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl">
            We help startups and businesses grow digitally, connect with
            distributors, and unlock real opportunities all with complete
            transparency.
          </p>
          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            <button
              onClick={() => {
                navigate("contact");
              }}
              className="flex items-center gap-2 bg-sky-700 hover:bg-indigo-900 hover:scale-105 text-white font-semibold 
    px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base rounded-full shadow transition"
            >
              <span>Get Started</span>
            </button>

            <button
              className="flex items-center gap-2 border-2 font-semibold border-sky-700 text-sky-700 
    hover:bg-indigo-900 hover:border-indigo-900 hover:text-white hover:scale-105 px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 text-sm sm:text-base 
    rounded-full shadow transition"
            >
              <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>How We Work</span>
            </button>
          </div>
          {/* Logos */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5 lg:gap-8 mt-5 lg:mt-14">
            <img src={collab_01} alt="Mangr" className="h-8 sm:h-14 lg:w-30" />
            <img
              src={collab_03}
              alt="Fibrolo"
              className="h-8 sm:h-14 lg:w-30"
            />
            <img
              src={collab_02}
              alt="Artworx"
              className="h-8 sm:h-14 lg:w-30"
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end order-2 md:order-none">
          <img
            src={HeroRight}
            alt="Analytics"
            className="hidden sm:block w-[200px] sm:w-[250px] md:w-[300px] lg:w-[500px] rounded-lg animate-slideInRight"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
