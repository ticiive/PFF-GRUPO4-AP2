import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="social-links">
        
        <a href="#" className="social-link-item">
          <FaFacebook /> 
          <p>@ibmec</p>
        </a>
        
        <a href="#" className="social-link-item">
          <FaInstagram />
          <p>@ibmec</p>
        </a>
        
        <a href="#" className="social-link-item">
          <FaLinkedin />
          <p>@ibmec</p>
        </a>
        
      </div>
      <div className="copyright">
        &copy; 2025 - ibmec - todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;