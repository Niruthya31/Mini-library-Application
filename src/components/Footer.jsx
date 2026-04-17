import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mini Library</h3>
          <p>Your gateway to endless stories and knowledge.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p> Email: minilibrary@gmail.com</p>
          <p> Phone: +91 234 567 890</p>
          <p> Address: ABC Book Street,Read City,Chennai</p>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p> Facebook |  Instagram |  Twitter</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 @mini library - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;