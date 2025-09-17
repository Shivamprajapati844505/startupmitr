import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import starImg from "../assets/img_10.png";
import lightImg from "../assets/lite-icons1.svg";
const Contact = () => {
  return (
    <div className="py-20 mb-0 bg-white relative">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4  violet-700">
        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wide">
          Contact Us
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-950 mt-3 leading-snug">
          Get in Touch With Us
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          We value your connection and are always ready to hear from you. Let’s
          create something great together.
        </p>
      </div>

      {/* Main Section */}
      <section className="px-6 md:px-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-start ">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950">
            We're Here to Help
          </h2>
          <p className="text-gray-600">
            Our dedicated team is committed to providing prompt and effective
            support to ensure your needs are met. We believe in open
            communication and are always ready to listen.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-violet-700 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="font-semibold text-lg">+91-9211603280</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-violet-700 p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="font-semibold text-lg">
                  itsupport@startupmitr.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 text-violet-700 p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Office Location</p>
                <p className="font-semibold text-lg">
                  C-171 Sector 63,
                  <br />
                  Noida, Uttar Pradesh – 201301
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 w-full bg-white p-8 shadow-xl rounded-xl text-indigo-950">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            Let's Talk About Your Idea
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-700"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-700"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-700"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-700"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-700"
            ></textarea>

            <button
              type="submit"
              className="flex items-center gap-2 bg-violet-700 hover:bg-violet-950 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </section>
       <img
          src={starImg}
          alt="Rotating Circle"
          className="absolute top-90 right-20 w-[50px] h-[50px] animate-spin-slow"
        />
       <img
          src={starImg}
          alt="Rotating Circle"
          className="absolute bottom-60 left-130 w-[30px] h-[30px] animate-spin-slow"
        />
       
       <img
          src={lightImg}
          alt="Light Beam"
          className="absolute top-20 left-1/8  w-[100px] h-[100px] animate-light-float"
        />
    </div>
  );
};

export default Contact;
