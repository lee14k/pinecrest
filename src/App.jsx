import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Ourmission from './components/Ourmission'

function App() {
  return (
    <div>
  <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ourmission" element={<Ourmission />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
