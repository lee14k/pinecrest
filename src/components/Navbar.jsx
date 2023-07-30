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
        <ul className={`nav ${dropdown ? "open" : ""}`}>
          <li>{/* Add your content here */}</li>
          <li>
            <Link to="/" onClick={() => handleNavLinkClick("/")}>
              Home
            </Link>
          </li>
          <li>
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
            <li>Contact Us</li>
          </Link>

          <li>
            <Link
              to="/Services"
              onClick={() => handleNavLinkClick("/Services")}
            >
              Services
            </Link>
          </li>
          <Link
            to="/Directions"
            onClick={() => handleNavLinkClick("/Directions")}
          >
            <li>Directions</li>
          </Link>

          <Link to="/Photos" onClick={() => handleNavLinkClick("/Photos")}>
            <li>Photos</li>
          </Link>
          <Link to="/Careers" onClick={() => handleNavLinkClick("/Careers")}>
            <li>Careers</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
