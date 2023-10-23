import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headbanner from "./Headbanner";
import Circlerow from "./Circlerow";
import Colorrow from "./Colorrow";
import Imagegallery from "./Imagegallery";
import Footer from "./Footer";
import Ourmission from "./Ourmission";
import Staticimage from './Staticimage'
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Staticimage />
      <div className="hometext">
      <h1 className="text-6xl">Welcome to Pinecrest of Lake Geneva</h1>
      <h2 className="caveat text-4xl mb-16">Quality Assisted Living for Older Adults</h2>
      </div>
      <Circlerow />
      <Colorrow />
      <Testimonials />
      <Imagegallery />
      <Footer />
    </div>
  );
}

export default Home;
