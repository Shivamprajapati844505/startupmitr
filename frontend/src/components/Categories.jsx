import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCards";
import categories from "../assets/catogryData.js";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Categories = ({ preview = false }) => {
  const navigate = useNavigate();
  const [showAll] = useState(!preview);

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
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 sm:px-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-sky-700 uppercase">
          Explore by Industry
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mt-3">
          Business Services by Category
        </h1>
        <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
          Discover our specialized services curated for each <br />
          business category to meet your unique industry needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-14">
        {(showAll ? categories : categories.slice(0, 6)).map((cat, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <CategoryCard {...cat} />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      {preview && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/categories")}
            className="flex items-center gap-2 bg-sky-700 hover:bg-indigo-900 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow transition"
          >
            View All Categories
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
