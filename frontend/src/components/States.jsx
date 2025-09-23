import React, { useState, useEffect } from "react";

import state_01 from "../assets/states_01.png";
import state_02 from "../assets/states_02.png";
import state_03 from "../assets/states_03.png";
import state_04 from "../assets/states_04.png";
import state_05 from "../assets/states_05.png";
import state_06 from "../assets/states_06.png";
import state_07 from "../assets/states_07.png";
import state_08 from "../assets/states_08.png";
import state_09 from "../assets/states_09.png";
import state_10 from "../assets/states_10.png";
import state_11 from "../assets/states_11.png";
import state_12 from "../assets/states_12.png";
import state_13 from "../assets/states_13.png";
import state_14 from "../assets/states_14.png";
import state_15 from "../assets/states_15.png";
import AnimatedHeading from "./../pages/AnimatedHeading";



const states = [
  { name: "Andhra Pradesh", img: state_01 },
  { name: "Karnataka", img: state_02 },
  { name: "Tamil Nadu", img: state_03 },
  { name: "Maharashtra", img: state_04 },
  { name: "Uttar Pradesh", img: state_05 },
  { name: "West Bengal", img: state_06 },
  { name: "Delhi", img: state_07 },
  { name: "Gujarat", img: state_08 },
  { name: "Telangana", img: state_09 },
  { name: "Rajasthan", img: state_10 },
  { name: "Odisha", img: state_11 },
  { name: "Bihar", img: state_12 },
  { name: "Kerala", img: state_13 },
  { name: "Punjab", img: state_14 },
  { name: "Haryana", img: state_15 },
];

const States = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % states.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Show 11 items with center at index 5
  const visibleStates = Array.from({ length: 11 }, (_, i) => {
    return states[(activeIndex - 5 + i + states.length) % states.length];
  });

  return (
    <div className="w-full flex flex-col items-center py-8 lg:py-12 relative">
      {/* Section Heading */}
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-4 lg:mb-12 px-4 relative">
  

        <p className="text-xs sm:text-sm md:text-base font-semibold text-sky-700 uppercase">
          OUR PRESENCE
        </p>
        
        <AnimatedHeading text="Key States We Operate In" />
        <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
          We proudly deliver our services across major states to ensure reach
          and excellence throughout India.
        </p>
      </div>

      {/* States Carousel */}
      <div className="w-full flex justify-center px-4 overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-[1200px] min-h-[250px]">
          {visibleStates.map((state, i) => {
            const isCenter = i === 5;

            return (
              <div
                key={state.name}
                className={`flex flex-col items-center flex-shrink-0 transition-all duration-700 ease-in-out ${
                  isCenter ? "" : "hidden sm:flex"
                }`}
                style={{
                  transform: `scale(${isCenter ? 1.4 : 1})`,
                  opacity: 1,
                  marginLeft: isCenter ? 12 : 0,
                  marginRight: isCenter ? 12 : 0,
                }}
              >
                <img
                  src={state.img}
                  alt={state.name}
                  className="object-contain transition-all duration-700 ease-in-out"
                  style={{
                    width: isCenter ? 120 : 70,
                    height: isCenter ? 120 : 70,
                  }}
                />
                <p
                  className={`mt-1 text-center transition-all duration-500 ${
                    isCenter
                      ? "text-base sm:text-lg font-semibold text-sky-700"
                      : "text-xs sm:text-sm text-gray-500"
                  }`}
                  style={{ minHeight: "1.5rem" }}
                >
                  {state.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default States;
