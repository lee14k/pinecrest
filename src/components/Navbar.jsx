import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
  const history = useHistory();
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Check initial window width on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
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
    history.push(route);
    setDropdown(false);
    setShowMobile(false);
  };

  return (
    <div className="navbar">
      {typeof window !== 'undefined' && isMobile && (
        <div className={`hamburger-icon ${showMobile && !dropdown ? 'open' : ''}`} onClick={toggleHamburger}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
      {(showMobile || !isMobile || dropdown) && (
        <ul className={`nav ${dropdown ? 'open' : ''}`}>
          <li>
         
          </li>
          <li>
            <Link to="/" onClick={() => handleNavLinkClick('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleNavLinkClick('/about')}>
              About
            </Link>
          </li>
          <li>Contact Us</li>
          <li onClick={handleDropdownClick} className={`dropdown-item ${dropdown ? 'open' : ''}`}>
            Cottages
          </li>
          {dropdown && (
            <ul>
              <li>
                <Link to="/thelodge" onClick={() => handleNavLinkClick('/thelodge')}>
                  The Lodge
                </Link>
              </li>
              <li>
                <Link to="/sunrisesuite" onClick={() => handleNavLinkClick('/sunrisesuite')}>
                  Sunrise Suite
                </Link>
              </li>
              <li>
                <Link to="/cottageone" onClick={() => handleNavLinkClick('/cottageone')}>
                  Cottage One
                </Link>
              </li>
              <li>
                <Link to="/cottagetwo" onClick={() => handleNavLinkClick('/cottagetwo')}>
                  Cottage Two
                </Link>
              </li>
              <li>
                <Link to="/cottagethree" onClick={() => handleNavLinkClick('/cottagethree')}>
                  Cottage Three
                </Link>
              </li>
              <li>
                <Link to="/cottagefour" onClick={() => handleNavLinkClick('/cottagefour')}>
                  Cottage Four
                </Link>
              </li>
              <li>
                <Link to="/cottagefive" onClick={() => handleNavLinkClick('/cottagefive')}>
                  Cottage Five
                </Link>
              </li>
              <li>
                <Link to="/cottagesix" onClick={() => handleNavLinkClick('/cottagesix')}>
                  Cottage Six
                </Link>
              </li>
              <li>
                <Link to="/cottageseven" onClick={() => handleNavLinkClick('/cottageseven')}>
                  Cottage Seven
                </Link>
              </li>
              <li>
                <Link to="/moteleight" onClick={() => handleNavLinkClick('/moteleight')}>
                  Motel Eight
                </Link>
              </li>
              <li>
                <Link to="/motelnine" onClick={() => handleNavLinkClick('/motelnine')}>
                  Motel Nine
                </Link>
              </li>
              <li>
                <Link to="/motelten" onClick={() => handleNavLinkClick('/motelten')}>
                  Motel Ten
                </Link>
              </li>
              <li>
                <Link to="/fishshack" onClick={() => handleNavLinkClick('/fishshack')}>
                  Fish Shack
                </Link>
              </li>
            </ul>
          )}
          <li>Policies</li>
          <li>Reserve your Stay</li>
          <li>Local Attractions</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
