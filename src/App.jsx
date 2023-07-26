import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Ourmission from './components/Ourmission'
import Services from './components/Services';
import Contactus from './components/Contactus';
import Directions from './components/Directions'
import Photos from './components/Photos'
import Careers from './components/Careers'

function App() {
  return (
    <div>
  <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmission" element={<Ourmission />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Directions" element={<Directions />} />

          <Route path="/Photos" element={<Photos />} />
          <Route path="/Careers" element={<Careers />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
