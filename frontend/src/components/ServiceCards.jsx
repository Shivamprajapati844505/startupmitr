import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const ServiceCard = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 relative overflow-hidden group">
      {/* Image */}
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
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">{description}</p>

        <button
          onClick={handleLearnMore}
          className="mt-4 text-violet-700 font-semibold text-sm flex items-center gap-1 group-hover:gap-1 transition"
        >
          Learn More <ArrowRightIcon className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
