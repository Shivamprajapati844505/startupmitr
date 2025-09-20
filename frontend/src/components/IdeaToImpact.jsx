import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import icon1 from "../assets/avatar_01.png";
import icon2 from "../assets/avatar_04.png";
import icon3 from "../assets/avatar_03.png";
import icon4 from "../assets/avatar_06.png";
import AnimatedText from './../pages/AnimatedText';


const features = [
  {
    title: "Verified Network Of Distributors",
    desc: "Only trusted partners",
    icon: icon1,
  },
  {
    title: "Customized Plans",
    desc: "Tailored strategies for each business",
    icon: icon2,
  },
  {
    title: "100% Transparency",
    desc: "No hidden costs or agendas",
    icon: icon3,
  },
  {
    title: "Experienced Team",
    desc: "Backed by industry knowledge & results",
    icon: icon4,
  },
];

const CountUp = ({ end, duration = 3000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30;
    const totalIncrements = Math.ceil(duration / incrementTime);
    const increment = end / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <>{count}</>;
};

const IdeaToImpact = () => {
  return (
    <div className="w-full py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left - Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#f7faff] rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-indigo-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right - Heading and Stats */}
        <div className="flex-1">
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 leading-snug">
            Helping You Go From Idea To Impact
          </h2> */}
           <AnimatedText
            text="Helping You Go From Idea To Impact"
            delayOffset={0}
            className="block text-3xl sm:text-5xl md:text-5xl font-bold text-indigo-900 leading-snug sm:leading-tight mt-3 sm:mt-4"
          />

          <p className="text-gray-700 mt-4">
            At Startup Mitr, our mission is simple, To support new startups and
            existing businesses who are struggling to enter or expand in the
            market. We offer end-to-end business growth solutions from lead
            generation to distributor onboarding, from branding to strategic
            guidance all done with transparency and trust.
          </p>

          {/* CTA Button */}
          <button
            className="mt-6 flex items-center gap-2 border-2 font-semibold border-sky-700 text-sky-700 
              hover:bg-indigo-900 hover:border-indigo-900 hover:scale-105 hover:text-white px-6 py-2.5 rounded-full 
              shadow transition"
          >
            START NOW <FaArrowRight />
          </button>

          {/* Stats with Count Animation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-indigo-900">
                <CountUp end={500} />
                <span className="text-sky-700">+</span>
              </h3>
              <p className="text-gray-600 text-sm mt-1">Startups Supported</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-900">
                <CountUp end={100000} />
                <span className="text-sky-700">+</span>
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Distributors Connected
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-900">
                <CountUp end={20} />
                <span className="text-sky-700">+</span>
              </h3>
              <p className="text-gray-600 text-sm mt-1">Serving Pan-India</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-900">
                <CountUp end={250} />
                <span className="text-sky-700">+</span>
              </h3>
              <p className="text-gray-600 text-sm mt-1">Project Finished</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaToImpact;
