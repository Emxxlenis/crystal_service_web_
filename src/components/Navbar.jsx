import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LangContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // WhatsApp contact link
  const whatsappLink = 'https://wa.me/50764562658?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.';

  return (
    <nav className="navbar redesigned-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-logo" aria-label="Inicio" onClick={closeMenu}>
            <img src="/icons/Crystal_g_iso.svg" alt="Crystal Service Logo" style={{ height: '38px', verticalAlign: 'middle' }} />
          </Link>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>{t('navigation.home')}</Link>
          <Link href="/catalogo" className={`navbar-link ${pathname === '/catalogo' ? 'active' : ''}`} onClick={closeMenu}>{t('navigation.catalog')}</Link>
          <Link href="/about" className={`navbar-link ${pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>{t('navigation.about')}</Link>
          <Link href="/contacto" className={`navbar-link ${pathname === '/contacto' ? 'active' : ''}`} onClick={closeMenu}>{t('navigation.contact')}</Link>
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