import './Circlerow.css'

function Circlerow () {
    return (
      <div>
      <div className="circlewrapper">
        <div className="circle-container">
          <div className="circle one">
            <div className="gradient"></div>
          </div>
          <h2 className="text-4xl">Compassion</h2>
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
      <p>
        We know that choosing an assisted living community where your loved one will enjoy the best quality of life can be difficult and frustrating.
You want a place that offers all the comforts of home with the assurance that the staff respects the person you love and will keep them safe.
It is not an easy choice and we make transitioning from living at home to living in our adult living facility as smooth as possible. It takes time to understand the needs of our residents.
We listen closely to your questions and address your concerns before offering the customized level of care that works the best for each of our residents.
We believe that the more information you have the easier it will be to decide that Pinecrest of Lake Geneva is your best option.
      </p>
    </div>
  );
}

export default Circlerow;