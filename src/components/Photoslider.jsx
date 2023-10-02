import React, { useState } from "react";
import Footer from "./Footer";

const images = [
  './homeone.jpeg', // replace with your image URLs
  './bedroom.jpeg', 
  './commonarea.jpeg',
  './commonarea2.jpeg',
  './pc2.jpg',
  './pc3.jpg',
  './pc4.jpeg',
  // add more URLs as needed
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

  return (
    <div>
          
      <div className="slider">
      <button
          className="arrow left-arrow"
          onClick={goToPrevSlide}
        >
      {"<"} 
        </button>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slidez ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        <button
          className="arrow right-arrow"
          onClick={goToNextSlide}
        >
          {">"}
        </button>
      </div>
      <Footer />
      
    </div>
  );
}

export default Photoslider;
