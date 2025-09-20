import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const AnimatedHeading = ({ text }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="heading whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mt-3"
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`char ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeading;
