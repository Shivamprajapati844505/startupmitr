import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Empowering Startups in Every Field 🚀</h2>
        <p className="text-lg mb-6">
          Agriculture • Innovation • Technology • Manufacturing • And More
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
