import React from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const Hero = () => {
  const { t } = useLanguage();
  const whatsappLink = 'https://wa.me/50764562658?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.';

  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <a
          href={whatsappLink}
          className="navbar-btn whatsapp-btn hero-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('hero.whatsapp')}
        </a>
        <div className="hero-trust">
          {t('hero.trust')}
        </div>
      </div>
    </section>
  );
};

export default Hero; 