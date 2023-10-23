import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const images = [
  './sliderone.jpg', // replace with your image URLs
  './slidertwo.jpg', 
  './slidethree.jpg',
  './sliderfive.jpg',
  './slidersix.jpg',
  './sliderseven.jpg',
  './slider8.jpeg',
  './pc4.jpeg',
  './slider9.jpg',
  './ns4.bmp',
];

function Photoslider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Set up timer
  useEffect(() => {
    const timer = setTimeout(goToNextSlide, 5000); // Change image every 5 seconds (5000ms)

    return () => {
      clearTimeout(timer); // Clear the timer when component unmounts
    };
  }, [activeIndex]); // Reactivate timer every time activeIndex changes

  return (
    <div>
      <div className="flex justify-center">
        <div className="slider">
          <button className="arrow left-arrow" onClick={goToPrevSlide}>
            {"<"} 
          </button>
          {images.map((image, index) => (
            <div
              key={index}
              className={`slidez ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <button className="arrow right-arrow" onClick={goToNextSlide}>
            {">"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Photoslider;