import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import TradingIcon from '../components/TradingIcon';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
            {/* Use a distinct color for the header icon */}
            <TradingIcon size={28} style={{ filter: 'drop-shadow(0 0 2px #ff9800)' }} color="#ff9800" />
          </span>
          <Link to="/">TradeBull</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/signup" className="nav-link">Signup</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;