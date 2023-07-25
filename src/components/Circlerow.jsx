import './Circlerow.css'

function Circlerow () {
    return (
      <div>
      <div className="circlewrapper">
        <div className="circle-container">
          <div className="circle one">
            <div className="gradient"></div>
          </div>
          <h2>Circle 1</h2>
        </div>
        <div className="circle-container">
          <div className="circle two"></div>
          <h2>Circle 2</h2>
        </div>
        <div className="circle-container">
          <div className="circle three"></div>
          <h2>Circle 3</h2>
        </div>
      </div>
      <h2>Comfortable & Independent Living</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quos
        saepe tenetur quae inventore ratione porro quis dolor recusandae laborum
        natus sint, cum error in asperiores beatae mollitia! Dolor, pariatur.
      </p>
    </div>
  );
}

export default Circlerow;