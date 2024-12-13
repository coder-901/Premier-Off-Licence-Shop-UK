// Footer.js
import React from 'react';
import footerLogo from './website-logo.png';

function Footer() {
  return (
    <footer>

      <div className="footer-content">
        <div className="footer-logo">
          <img src={footerLogo} alt="Little Lemon Footer Logo" />
        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>................, UK</p>
          <p>Email: contact@gmail.com</p>
          <p>Phone: (+44) 7462 806652</p>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Premier Off Licence. All rights reserved.</p>
        </div>
      </div>


      {/* Footer content */}
    </footer>
  );
}

export default Footer;