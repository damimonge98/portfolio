// src/components/Header.js
import React, { useState } from 'react';
import '../css/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <div id="logo_container">
          <div id="logo"></div>
        </div>
        <nav className={isMenuOpen ? 'menu open' : 'menu'}>
          <ul>
            <li><a href="#about" onClick={closeMenu}>INICIO</a></li>
            <li><a href="#work-mosaic" onClick={closeMenu}>SERVICIOS</a></li>
            <li><a href="#about-us" onClick={closeMenu}>NOSOTROS</a></li>
          </ul>
        </nav>
        <div className={isMenuOpen ? 'hamburger-btn open' : 'hamburger-btn'} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      {isMenuOpen && <div className="menu-spacing"></div>}
    </>
  );
}

export default Header;