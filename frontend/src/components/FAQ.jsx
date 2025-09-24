import React, { useState } from "react";
import faqData from "../assets/faqData";
import AnimatedHeading from "../pages/AnimatedHeading";
import bg_img from "../assets/bg_img.webp";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="space-y-6">
          
          <div className="text-left max-w-xl mb-8 lg:mb-12">
            <AnimatedHeading text="Growth Desk FAQs" />
          </div>

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-sky-700 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-semibold text-sky-700 transition"
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 sm:p-5 text-gray-600 border-t leading-relaxed space-y-3">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-none space-y-3">
                      {faq.answer.map((point, i) => (
                        <li key={i}>
                          <span className="font-semibold text-gray-900">
                            {point.title}:
                          </span>{" "}
                          <span className="text-gray-700">{point.desc}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center lg:justify-end lg:pt-33 items-center">
          <img
            src={bg_img}
            alt="FAQ image"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
