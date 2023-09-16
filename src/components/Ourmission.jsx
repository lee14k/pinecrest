import "./Ourmission.css";
import FAQ from "./FAQ";
import Footer from "./Footer";
function Ourmission() {
  return (
    <div>
                <h1 className="text-6xl">Our Mission</h1>
      <div className="missioncontainer">
        <img src="/people2.jpeg" alt="" />
        <div className="textcontainer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugit optio ut. Dolores expedita officia quos quae velit, harum
            dolorum distinctio dolor provident voluptate molestiae, facilis
            suscipit deleniti architecto saepe?
          </p>
          <button className="phonebutton">Contact us today</button>
        </div>
      </div>
<FAQ/>  
<Footer/>  
    </div>
  );
}

export default Ourmission;

