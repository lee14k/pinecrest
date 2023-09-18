import "./Headbanner.css";
import React, { useState, useEffect } from "react";

const images = [
  "./banner.jpeg", // replace with your image URLs
  "./bedroom.jpeg",
  "./commonarea.jpeg",
  // add more URLs as needed
];

function Headbanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="header-content">
        <img src="/piecrest.png" className="overlay-logo" />
        <button
          type="button"
          className="overlay-button rounded-md bg-emerald-600 px-6 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
Contact Us        </button>
      </div>
    </div>
  );
}

export default Headbanner;
