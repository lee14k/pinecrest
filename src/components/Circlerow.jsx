import './Circlerow.css'

function Circlerow () {
    return (
      <div>
      <div className="circlewrapper">
        <div className="circle-container">
          <div className="circle one">
            <div className="gradient"></div>
          </div>
          <h2 className="text-4xl">Independence</h2>
        </div>
        <div className="circle-container">
          <div className="circle two"></div>
          <h2 className="text-4xl">Companionship</h2>
        </div>
        <div className="circle-container">
          <div className="circle three"></div>
          <h2 className="text-4xl">Comfort</h2>
        </div>
      </div>
      
    </div>
  );
}

export default Circlerow;