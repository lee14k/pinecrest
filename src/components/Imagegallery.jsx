import './Imagegallery.css'
import React, { useState } from 'react'
function Imagegallery () {
    const [isModalOpen, setModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState ('')

const handleOpenModal = (image) => {
    setCurrentImage(image)
    setModalOpen(true)
}

const handleCloseModal =()=> {
    setCurrentImage('')
    setModalOpen(false);
}

    return (
        <div className="gallerycontainer">

<div className="container">
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src="src/assets/commonarea.jpeg" alt="Gallery image 1" className="gallery__img"  onClick={()=> handleOpenModal('src/assets/commonarea.jpeg')}/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <img src="src/assets/commonarea2.jpeg" alt="Gallery image 2" className="gallery__img" onClick={()=> handleOpenModal('src/assets/commonarea2.jpeg')}/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <img src="src/assets/diningroom.jpeg" alt="Gallery image 3" className="gallery__img" onClick={()=> handleOpenModal('src/assets/diningroom.jpeg')}/>
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <img src="src/assets/fireplace.jpeg" alt="Gallery image 4" className="gallery__img" onClick={()=> handleOpenModal("src/assets/fireplace.jpeg")}/>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <img src="src/assets/bedroom.jpeg" alt="Gallery image 5" className="gallery__img" onClick={()=> handleOpenModal("src/assets/bedroom.jpeg")}/>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <img src="src/assets/people2.jpeg" alt="Gallery image 6" className="gallery__img" onClick={()=> handleOpenModal("src/assets/people2.jpeg")}/>
                </figure>
            </div>
        </div>
        {isModalOpen && (
            <div className='modal'>
<span className="close" onClick={handleCloseModal}>&times;</span>
<img className="modal-content" src={currentImage} alt="modal"/>
            </div>
        )}
        </div>
    )
}

export default Imagegallery