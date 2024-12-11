// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>

      <div className="footer-content">
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
          <p>&copy; 2023 Little Lemon. All rights reserved.</p>
        </div>
      </div>


      {/* Footer content */}
    </footer>
  );
}

export default Footer;