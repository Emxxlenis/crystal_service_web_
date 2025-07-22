'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';
import ImageCarousel from './ImageCarousel';

/**
 * About component displays the company introduction, history, mission, and vision.
 * Uses translations for multilingual support.
 * @component
 * @returns {JSX.Element}
 */
const About = () => {
  const { t } = useLanguage();
  return (
    <section className="about2-section">
      {/* Section title */}
      <h1 className="about2-title">{t('about.title')}</h1>
      {/* Subtitle with company summary */}
      <p className="about2-subtitle">{t('about.subtitle')}</p>
      <div className="about2-history-row">
        <div className="about2-history-text">
          {/* Company history */}
          <h2 className="about2-history-title">{t('about.history.title')}</h2>
          <p className="about2-history-desc">{t('about.history.description')}</p>
        </div>
        <div className="about2-history-imgbox">
          {/* Image carousel with company images */}
          <ImageCarousel
            images={["about_us1", "about_us2", "about_us3", "about_us4", "about_us5", "about_us6"]}
            productName={t('about.title')}
            hideControls={true}
          />
        </div>
      </div>
      <div className="about2-mv-row">
        {/* Mission and Vision blocks */}
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