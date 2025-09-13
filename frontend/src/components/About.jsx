import React from "react";

function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Startup Mitr</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Startup Mitr is a platform built to empower aspiring entrepreneurs with 
          mentorship, resources, networking, and funding opportunities.  
          Our mission is to guide startups across industries like <span className="font-semibold">Agriculture</span>, 
          <span className="font-semibold"> Technology</span>, <span className="font-semibold">Innovation</span>, and 
          <span className="font-semibold"> Manufacturing</span> to achieve sustainable growth.
        </p>
      </div>
    </section>
  );
}

export default About;
