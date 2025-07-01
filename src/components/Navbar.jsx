import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LangContext';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // WhatsApp link (replace with your number)
  const whatsappLink = 'https://wa.me/50764562658?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.';

  return (
    <nav className="navbar redesigned-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo" aria-label="Inicio" onClick={closeMenu}>
            <img src={process.env.PUBLIC_URL + '/icons/Crystal_g_iso.svg'} alt="Crystal Service Logo" style={{ height: '38px', verticalAlign: 'middle' }} />
          </Link>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => 'navbar-link' + (isActive ? ' active' : '')} onClick={closeMenu}>{t('navigation.home')}</NavLink>
          <NavLink to="/catalogo" className={({ isActive }) => 'navbar-link' + (isActive ? ' active' : '')} onClick={closeMenu}>{t('navigation.catalog')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => 'navbar-link' + (isActive ? ' active' : '')} onClick={closeMenu}>{t('navigation.about')}</NavLink>
          <NavLink to="/contacto" className={({ isActive }) => 'navbar-link' + (isActive ? ' active' : '')} onClick={closeMenu}>{t('navigation.contact')}</NavLink>
          <div className="navbar-menu-controls">
            <button 
              className="navbar-btn language-btn" 
              onClick={toggleLanguage}
              aria-label={t('navigation.languageSwitch')}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button 
              className="navbar-btn theme-btn" 
              onClick={toggleTheme}
              aria-label={theme === 'light' ? t('navigation.darkMode') : t('navigation.lightMode')}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
        <div className="navbar-controls redesigned-navbar-controls">
          <button 
            className="navbar-btn language-btn" 
            onClick={toggleLanguage}
            aria-label={t('navigation.languageSwitch')}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            className="navbar-btn theme-btn" 
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t('navigation.darkMode') : t('navigation.lightMode')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a
            href={whatsappLink}
            className="navbar-btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            {t('navigation.whatsapp')}
          </a>
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label={t('navigation.toggleMenu')}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;