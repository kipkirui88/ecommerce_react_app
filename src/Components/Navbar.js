
import React, { useState } from 'react';
import '../Navbar.css'; // Create a separate CSS file for Navbar styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <span>My App</span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
      <div className="right-section">
        <button className="login-btn">Login</button>
        <div className="cart-icon">🛒</div>
      </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;