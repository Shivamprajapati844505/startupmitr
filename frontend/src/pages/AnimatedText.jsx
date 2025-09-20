import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const AnimatedText = ({ text, className = "", delayOffset = 0 }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <h1 ref={containerRef} className={`animated-text ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`animated-letter ${isVisible ? "visible" : ""}`}
          style={{
            animationDelay: `${delayOffset + index * 0.05}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
