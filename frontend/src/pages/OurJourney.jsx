import React from "react";
import AnimatedHeading from "./AnimatedHeading";

const OurJourney = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-2xl mx-auto mb-4 lg:mb-12 px-4 relative">
        <AnimatedHeading text="Our Journey" />
        <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
          Look Back At The Story Of Startup Mitr.
        </p>
      </div>

      
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sky-700 animate-fade-up transition duration-300">
          <p className="text-sm font-bold text-sky-700 mb-2">2015</p>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            Founded Startup Mitr
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Startup Mitr was launched with a mission to empower emerging businesses with expert branding and digital marketing strategies. From day one, we’ve helped startups build strong foundations.
          </p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-sky-700 animate-fade-up transition duration-300 text-right">
          <p className="text-sm font-bold text-sky-700 mb-2">2017 – 2018</p>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            Expanded Into Digital Marketing
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            We embraced the power of digital—offering social media, Google Ads, and content marketing strategies tailored for growth and visibility.
          </p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-sky-700 animate-fade-up transition duration-300">
          <p className="text-sm font-bold text-sky-700 mb-2">2019 – 2021</p>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            Launched Creative Design Studio
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            A dedicated creative team for logo design, brand identity, and visual storytelling—ensuring every brand we work with stands out in the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
