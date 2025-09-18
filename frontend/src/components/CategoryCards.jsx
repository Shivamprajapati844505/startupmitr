import React from "react";

const CategoryCard = ({ image, avatar, name, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm mx-auto min-h-[240px] flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Cover Image */}
      <div className="relative h-40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 -bottom-10 flex justify-center">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md bg-gray-100"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-12 pb-6 px-4 text-center flex-1">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
