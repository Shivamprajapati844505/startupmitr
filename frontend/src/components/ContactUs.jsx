import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import AnimatedHeading from "./../pages/AnimatedHeading";

const Contact = () => {
  return (
    <div className="py-16 bg-white relative">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
          Contact Us
        </p>
        <AnimatedHeading text="Get in Touch With Us" />
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          We value your connection and are always ready to hear from you. Let’s
          create something great together.
        </p>
      </div>

      {/* Main Section */}
      <section className="px-4 md:px-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full space-y-6 px-6 py-10 lg:py-14 rounded-xl bg-indigo-900">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            We're Here to Help
          </h2>
          <p className="text-indigo-200 leading-relaxed text-sm sm:text-base md:text-lg">
            Our dedicated team is committed to providing prompt and effective
            support to ensure your needs are met. We believe in open
            communication and are always ready to listen.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-sky-700 p-3 rounded-full flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-indigo-300 text-sm">Phone Number</p>
                <p className="font-semibold text-white">+91-9211603280</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-sky-700 p-3 rounded-full flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-indigo-300 text-sm">Email Address</p>
                <p className="font-semibold text-white">
                  itsupport@startupmitr.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 text-sky-700 p-3 rounded-full flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-indigo-300 text-sm">Office Location</p>
                <p className="font-semibold text-white text-sm sm:text-base">
                  C-171 Sector 63, Noida, Uttar Pradesh – 201301
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 w-full bg-white p-6 sm:p-8 shadow-xl rounded-xl text-indigo-900">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            Let's Talk About Your Idea
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-sky-700 hover:bg-indigo-900 hover:scale-105 text-white px-6 py-3 rounded-full font-medium transition transform"
            >
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full px-4 mt-10">
        <iframe
          title="Google Map - Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.8702841358714!2d77.37990557523637!3d28.62639498493256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54ce3f30e69%3A0x9ce4f4edab8ccf9b!2sC-171%2C%20C%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1694862717926!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
