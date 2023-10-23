import './Circlerow.css'

function Circlerow () {
    return (
      <div>
      <div className="circlewrapper">
        <div className="circle-container">
          <div className="circle one">
            <div className="gradient"></div>
          </div>
          <h2 className="text-4xl">Care</h2>
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
      <div className="hometext">
      <p className='mt-10 mx-10 text-xl leading-7 text-gray-700'>
    We know that choosing an assisted living community where your loved one will enjoy the best quality of life can be difficult and confusing.  It is not an easy choice and we make transitioning from living at home to living in our State licensed 12 room community based assisted living facility as smooth as possible. We listen closely to your questions and address your concerns before offering the customized level of care that works the best for each of our residents. We believe that the more information you have the easier it will be to decide that Pinecrest of Lake Geneva is your best option.
      </p></div>
    </div>
  );
}

export default Circlerow;