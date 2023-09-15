import './Circlerow.css'

function Circlerow () {
    return (
      <div>
      <div className="circlewrapper">
        <div className="circle-container">
          <div className="circle one">
            <div className="gradient"></div>
          </div>
          <h2>Independence</h2>
        </div>
        <div className="circle-container">
          <div className="circle two"></div>
          <h2>Companionship</h2>
        </div>
        <div className="circle-container">
          <div className="circle three"></div>
          <h2>Comfortable Living</h2>
        </div>
      </div>
      <h2>Compassion, Community, & Care</h2>
      <p>
  We know that choosing an assisted living community where your loved one will enjoy the best quality of life can be difficult and frustrating.
You want a place that offers all the comforts of home with the assurance that the staff respects the person you love and will keep them safe.
      </p>
    </div>
  );
}

export default Circlerow;