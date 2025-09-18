import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import starImg from "../assets/img_10.png"
import project_01 from "../assets/project_01.jpg";
import project_02 from "../assets/project_02.png";
import project_03 from "../assets/project_03.png";
import project_04 from "../assets/project_04.jpg";
import project_05 from "../assets/project_05.png";
import project_06 from "../assets/project_06.jpg";
import project_07 from "../assets/project_07.jpg";

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
            <img
              src={img}
              alt={`Project ${idx + 1}`}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <img
          src={starImg}
          alt="Rotating Circle"
          className="absolute top-70 left-15 w-[50px] h-[50px] animate-spin-slow"
        />
         <img
          src={starImg}
          alt="Rotating Circle"
          className="absolute top-150 right-40 w-[50px] h-[50px] animate-spin-slow"
        />
    </div>
  );
};

export default Projects;
