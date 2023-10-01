import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Check initial window width on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleHamburger = () => {
    setDropdown(false); // Close the dropdown when toggling the hamburger
    setShowMobile(!showMobile);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  const handleNavLinkClick = (route) => {
    navigate(route);
    setDropdown(false);
    setShowMobile(false);
  };

  return (
    <div className="navbar">
      {typeof window !== "undefined" && isMobile && (
        <div
          className={`hamburger-icon ${showMobile && !dropdown ? "open" : ""}`}
          onClick={toggleHamburger}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
      {(showMobile || !isMobile || dropdown) && (
<ul className={`nav ${dropdown ? "open" : ""} ${isMobile ? "mobile" : ""}`}>
        
          <li className="text-2xl">
            <Link to="/" onClick={() => handleNavLinkClick("/")}>
              Home
            </Link>
          </li>
          <li className="text-2xl">
            <Link
              to="/Ourmission"
              onClick={() => handleNavLinkClick("/Ourmission")}
            >
              Our Mission
            </Link>
          </li>
          <Link
            to="/Contactus"
            onClick={() => handleNavLinkClick("/Contactus")}
          >
            <li className="text-2xl">Contact Us</li>
          </Link>

          <li className="text-2xl">
            <Link
              to="/Services"
              onClick={() => handleNavLinkClick("/Services")}
            >
              Services
            </Link>
          </li>
          
          <li className="text-2xl">
            <Link
              to="Ourmission/#FAQ"
              onClick={() => handleNavLinkClick("Ourmission/#FAQ")}
            >
              FAQ
            </Link>
          </li>

          <Link to="/Careers" onClick={() => handleNavLinkClick("/Careers")}>
            <li className="text-2xl">Careers</li>
          </Link>
             <Link to="/Photos" onClick={() => handleNavLinkClick("/Photos")}>
            <li className="text-2xl">Photos</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
