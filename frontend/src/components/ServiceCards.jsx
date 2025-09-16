import React from "react";

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 relative overflow-hidden group">
      
      
      <div className="w-full h-40 rounded-xl overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        </div>

      {/* Content */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-indigo-950">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        <button className="mt-4 text-violet-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
