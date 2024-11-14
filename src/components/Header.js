import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Create this CSS file for styling the header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Holding Hands Seva</h1> {/* Replace with an image if you have a logo */}
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/impact-stories">Impact Stories</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="donate-button">
        <Link to="/donate">Donate Now</Link>
      </div>
    </header>
  );
};

export default Header;