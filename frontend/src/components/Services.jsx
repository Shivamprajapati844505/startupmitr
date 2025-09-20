import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCards";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import servicesData from "../assets/servicesData.js"; 
import { motion } from "framer-motion";
import AnimatedText from './../pages/AnimatedText';
import AnimatedHeading from './../pages/AnimatedHeading';

const Services = ({ preview = false }) => {
  const navigate = useNavigate();
  const [showAll] = useState(!preview);
  const sectionRef = useRef(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-slate-100 relative">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
        ref={sectionRef}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-sky-700 uppercase">
            OUR SERVICES
          </p>
          
          <AnimatedHeading text="Providing Best Services" />
          <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg ">
            Our Core Services to Accelerate Your Business Growth
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {(showAll ? servicesData : servicesData.slice(0, 4)).map(
            (service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <ServiceCard {...service} />
              </motion.div>
            )
          )}
        </div>

        {/* Button */}
        {preview && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/services");
              }}
              className="flex items-center gap-2 bg-sky-700 hover:bg-indigo-900 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition"
            >
              View All Services
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Services;
