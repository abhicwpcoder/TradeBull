import React from 'react';
import './Footer.css';
import TradingIcon from '../components/TradingIcon'; // Make sure this path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TradingIcon size={28} />
              <h3 style={{ margin: 0 }}>TradeBull</h3>
            </div>
            <p>Your trusted partner in stock trading and financial insights.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@tradebull.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} TradeBull. All rights reserved. Developed by Your Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;