import './Imagegallery.css'

function Imagegallery () {
    return (
        <div className="gallerycontainer">

<div className="container">
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src="src/assets/commonarea.jpeg" alt="Gallery image 1" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <img src="src/assets/commonarea2.jpeg" alt="Gallery image 2" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <img src="src/assets/diningroom.jpeg" alt="Gallery image 3" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <img src="src/assets/fireplace.jpeg" alt="Gallery image 4" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <img src="src/assets/bedroom.jpeg" alt="Gallery image 5" className="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <img src="src/assets/people2.jpeg" alt="Gallery image 6" className="gallery__img"/>
                </figure>
            </div>
        </div>
        </div>
    )
}

export default Imagegallery