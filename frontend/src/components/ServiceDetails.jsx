import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../assets/servicesData.js";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <div className="text-center py-20 text-red-500 px-4">
        <p className="text-xl font-semibold">Service not found</p>
        <button
          onClick={() => navigate("/services")}
          className="mt-4 text-sky-700 underline hover:text-violet-800 transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ">
      <img
        src={service.image}
        alt={service.title}
        className="rounded-xl shadow-lg mb-8 w-full max-h-[400px] object-cover"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-indigo-900">
        {service.title}
      </h1>

      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
        {service.description}
      </p>

      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 border-b text-sky-700 border-violet-100 pb-2">
          What’s Included
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ">
          {service.services.map((s, idx) => (
            <div
              key={idx}
              className="relative p-4 sm:p-5 rounded-xl bg-gray-50 border border-violet-100 
             shadow-[0_4px_12px_rgba(139,92,246,0.25)] 
             hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)] 
             transition duration-300"
            >
              {/* Gradient Left Border */}
              <div className="absolute top-0 left-0 h-full w-[10px] rounded-l-xl bg-gradient-to-b from-violet-500 to-indigo-600"></div>

              <div className="pl-6">
                {" "}
                {/* thoda space left border ke liye */}
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-1">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 bg-sky-700 hover:bg-indigo-900 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full shadow transition"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to All Services
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
