import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoIbmec from '../assets/logo-ibmec1.png'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 

// 1. Importe o CSS do componente
import './Header.css'; 

const Header = () => {
  // Estado para controlar o menu lateral (aberto/fechado)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funções para abrir e fechar (mais claro do que 'toggle')
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="navbar">
        
        {/* 1. Logo (Sempre visível) */}
        <div className="logoib">
          <Link to="/">
            <img src={logoIbmec} alt="logo da ibmec" />
          </Link>
        </div>

        {/* 2. Links de Navegação (SÓ PARA DESKTOP) */}
        <nav className="nav-links">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/galeria">Galeria de projetos</NavLink>
          <NavLink to="/sobre">Sobre nós</NavLink>
        </nav>

        {/* 3. Botão "Envie seu projeto" (SÓ PARA DESKTOP) */}
        <Link to="/form" className="btn-primary desktop-only-btn">
          Envie seu projeto
        </Link>

        {/* 4. Grupo da Direita (SÓ PARA MOBILE) */}
        <div className="mobile-right-group">
          <Link to="/form" className="btn-primary mobile-only-btn">
            Envie seu projeto
          </Link>
          <div className="menu-hamburger" onClick={openMenu}>
            <FaBars />
          </div>
        </div>
      </header>

      {/* 5. O Menu Lateral (SÓ PARA MOBILE, CONDICIONAL) */}
      {/* Usamos 'isMenuOpen' para mostrar/esconder */}
      <div className={isMenuOpen ? "menu-overlay active" : "menu-overlay"}>
        
        {/* Fundo escuro que, ao clicar, fecha o menu */}
        <div className="menu-backdrop" onClick={closeMenu}></div>
        
        {/* O menu lateral branco que desliza */}
        <div className="menu-sidebar">
          <div className="menu-sidebar-header">
            {/* O "X" para fechar */}
            <div className="mobile-close-icon" onClick={closeMenu}>
              <FaTimes />
            </div>
          </div>
          
          {/* Layout interno do menu, como na sua imagem */}
          <div className="menu-sidebar-content">
            <Link to="/form" className="btn-primary" onClick={closeMenu}>
              Envie seu projeto
            </Link>
            
            {/* Links de navegação */}
            <NavLink to="/" onClick={closeMenu}>Início</NavLink>
            <NavLink to="/galeria" onClick={closeMenu}>Galeria de projetos</NavLink>
            <NavLink to="/sobre" onClick={closeMenu}>Sobre nós</NavLink>

            {/* Você pode adicionar os outros links do exemplo aqui */}
            {/* <a href="#">Área do Aluno</a> */}
            {/* <a href="#">Acompanhe sua Matrícula</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;