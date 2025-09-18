import React from "react";
import CategoryCard from "./CategoryCards";
import categories from "../assets/catogryData.js";

const Categories = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-12 px-6 sm:px-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-600 uppercase">
          Explore by Industry
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-950 mt-3 whitespace-nowrap overflow-hidden">
          Business Services by Category
        </h1>

        <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
          Discover our specialized services curated for each <br />
          business category to meet your unique industry needs.
        </p>
      </div>

      {/* Responsive grid: 2 on mobile, 3 on medium, 4 on large */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
