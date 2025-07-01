import React from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="about2-section">
      <h1 className="about2-title">{t('about.title')}</h1>
      <p className="about2-subtitle">{t('about.subtitle')}</p>
      <div className="about2-history-row">
        <div className="about2-history-text">
          <h2 className="about2-history-title">{t('about.history.title')}</h2>
          <p className="about2-history-desc">{t('about.history.description')}</p>
        </div>
        <div className="about2-history-imgbox">
          <img src={process.env.PUBLIC_URL + '/products/fondo_home.jpg'} alt="Historia Crystal Service" className="about2-history-img" />
        </div>
      </div>
      <div className="about2-mv-row">
        <div className="about2-mv-block">
          <h3 className="about2-mv-title">{t('about.mission.title')}</h3>
          <p className="about2-mv-desc">{t('about.mission.description')}</p>
        </div>
        <div className="about2-mv-block">
          <h3 className="about2-mv-title">{t('about.vision.title')}</h3>
          <p className="about2-mv-desc">{t('about.vision.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default About; 