import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import project_01 from "../assets/project_01.jpg";
import project_02 from "../assets/project_02.png";
import project_03 from "../assets/project_03.png";
import project_04 from "../assets/project_04.jpg";
import project_05 from "../assets/project_05.png";
import project_06 from "../assets/project_06.jpg";
import project_07 from "../assets/project_07.jpg";
import AnimatedHeading from "./../pages/AnimatedHeading";

const Projects = () => {
  const projects = [
    project_01,
    project_02,
    project_03,
    project_04,
    project_05,
    project_06,
    project_07,
  ];

  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 ">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-sky-700 uppercase">
            PROJECTS DELIVERED
          </p>
          <AnimatedHeading text="Showcasing Our Work" />

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            We take pride in delivering high-quality solutions that meet our
            clients’ needs. <br />
            Each project is handled with professionalism, creativity, and
            dedication.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl shadow-lg"
        >
          {projects.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group">
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="w-full animate-blinkReveal h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-white/30 opacity-0 group:opacity-100 group:animate-blinkReveal rounded-2xl"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Projects;
