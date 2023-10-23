import "./Imagegallery.css";
import React, { useState } from "react";
function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage("");
    setModalOpen(false);
  };

  return (
    <div className="gallerycontainer">
      <div className="container">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/ns3.bmp"
              alt="Gallery image 1"
              className="gallery__img"
              onClick={() => handleOpenModal("/ns3.bmp")}
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/commonarea2.jpeg"
              alt="Gallery image 2"
              className="gallery__img"
              onClick={() => handleOpenModal("/commonarea2.jpeg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/diningroom.jpeg"
              alt="Gallery image 3"
              className="gallery__img"    
              onClick={() => handleOpenModal("/diningroom.jpeg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--4 ">
            <img
              src="/fireplace.jpeg"
              alt="Gallery image 4"
              className="gallery__img fire"
              onClick={() => handleOpenModal("/fireplace.jpeg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/bedroom.jpeg"
              alt="Gallery image 5"
              className="gallery__img"
              onClick={() => handleOpenModal("/bedroom.jpeg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/people2.jpeg"
              alt="Gallery image 6"
              className="gallery__img"
              onClick={() => handleOpenModal("/people2.jpeg")}
            />
          </figure>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt="modal" />
        </div>
      )}
    </div>
  );
}

export default Imagegallery;
