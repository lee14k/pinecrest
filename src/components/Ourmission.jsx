import "./Ourmission.css";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Missiongrid from "./Missiongrid";
import { HashLink } from 'react-router-hash-link';

function Ourmission() {
  return (
    <div>

     <Missiongrid/>
     <div id="FAQ">
<FAQ/>  
</div>
<Footer/>  
    </div>
  );
}

export default Ourmission;

