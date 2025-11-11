import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoIbmec from '../assets/logo-ibmec1.png'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './Header.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="logoib">
          <Link to="/">
            <img src={logoIbmec} alt="logo da ibmec" />
          </Link>
        </div>
        <nav className="nav-links">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/galeria">Galeria de projetos</NavLink>
          <NavLink to="/sobre">Sobre nós</NavLink>
        </nav>
        <Link to="/form" className="btn-primary desktop-only-btn">
          Envie seu projeto
        </Link>
        <div className="mobile-right-group">
          <Link to="/form" className="btn-primary mobile-only-btn">
            Envie seu projeto
          </Link>
          <div className="menu-hamburger" onClick={openMenu}>
            <FaBars />
          </div>
        </div>
      </header>
      <div className={isMenuOpen ? "menu-overlay active" : "menu-overlay"}>
        <div className="menu-backdrop" onClick={closeMenu}></div>
        <div className="menu-sidebar">
          <div className="menu-sidebar-header">
            <div className="mobile-close-icon" onClick={closeMenu}>
              <FaTimes />
            </div>
          </div>
          <div className="menu-sidebar-content">
            <Link to="/form" className="btn-primary" onClick={closeMenu}>
              Envie seu projeto
            </Link>
            <NavLink to="/" onClick={closeMenu}>Início</NavLink>
            <NavLink to="/galeria" onClick={closeMenu}>Galeria de projetos</NavLink>
            <NavLink to="/sobre" onClick={closeMenu}>Sobre nós</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;