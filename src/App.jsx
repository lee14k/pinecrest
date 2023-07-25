import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Ourmission from './components/Ourmission'
import Services from './components/Services';

function App() {
  return (
    <div>
  <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmission" element={<Ourmission />} />
          <Route path="/Services" element={<Services />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
