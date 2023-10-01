import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headbanner from "./Headbanner";
import Circlerow from "./Circlerow";
import Colorrow from "./Colorrow";
import Imagegallery from "./Imagegallery";
import Footer from "./Footer";
import Ourmission from "./Ourmission";
import Testimonials from "./Testimonials";
function Home() {
  return (
    <div>
      <Headbanner />
      <Circlerow />
      <Colorrow />
      <Testimonials />
      <Imagegallery />
      <Footer />
    </div>
  );
}

export default Home;
