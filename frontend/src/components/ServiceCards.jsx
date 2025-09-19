import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ServiceCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/services/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group p-6"
    >
      {/* Decorative gradient circle behind image */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-violet-200 to-violet-400 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition duration-500"></div>

      {/* Image */}
      <div className="w-full h-44 rounded-xl overflow-hidden relative z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="mt-8 relative z-10">
        <h3 className="text-xl font-bold text-indigo-950 group-hover:text-violet-700 transition">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
          {description}
        </p>

        <motion.button
          onClick={handleLearnMore}
          whileHover={{ x: 5 }}
          className="mt-4 text-violet-700 font-semibold text-sm flex items-center gap-1 transition"
        >
          Learn More <ArrowRightIcon className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

export default ServiceCard;
