import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  // Don't forget to import the CSS file!

function Footer() {
  return (
    <div className="app-container">
      <footer>
        <ul>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
