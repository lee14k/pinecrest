import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ourmission from "./components/Ourmission";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import Directions from "./components/Directions";
import Photos from "./components/Photos";
import Careers from "./components/Careers";
import Conbar from "./components/Conbar";
import Privacy from "./components/Privacy";
import Accessibility from "./components/Accessibility";

function App() {
  return (
    <div>
      
      <Router>
        <Conbar
        
          address="N3367 County Rd NN, 
Lake Geneva, WI 53147"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmission" element={<Ourmission />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Directions" element={<Directions />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Ourmission#FAQ" element={<Ourmission />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Accessibility" element={<Accessibility />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
