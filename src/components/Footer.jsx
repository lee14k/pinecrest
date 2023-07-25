import './Footer.css';
function Footer() {
  return (
    <div className="footercontainer">
      {/* Column 1 - Pinecrest of Lake Geneva header */}
      <div className="column">
<img className="footlogo" src="/newpclogo.png"/>      </div>

      {/* Column 2 - Unordered list */}
   

      {/* Column 3 - Contact header and "Call us now" */}
      <div className="column">
        <h2 className='foothead2'>Contact Us</h2>
        <h3 className='foothead3'>
Find us on Facebook        </h3>
      </div>

      <div className="column">
        <ul>

        <li>Services</li>
        <li>Directions</li>
        <li>Careers</li>
          <li>Accessibility</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
