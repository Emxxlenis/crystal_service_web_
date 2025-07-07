'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const CookiesPolicy = () => {
  const { t } = useLanguage();

  const sections = [
    'what_are_cookies',
    'types_of_cookies',
    'technical_cookies',
    'analytics_cookies',
    'third_party_cookies',
    'cookie_management',
    'mobile_cookies',
    'policy_updates',
    'consent',
    'contact'
  ];

  return (
    <section className="section privacy-section">
      <div className="privacy-container">
        <h1 className="privacy-title">{t('cookies.title')}</h1>
        <p className="privacy-date">{t('cookies.lastUpdated')}</p>
        
        {/* Table of Contents */}
        <div className="privacy-toc">
          <h3>{t('cookies.tocTitle')}</h3>
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <a href={`#section-${index + 1}`}>{t(`cookies.sections.${section}.title`)}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="privacy-content">
          {sections.map((section, index) => (
            <div key={index} className="privacy-section-block" id={`section-${index + 1}`}>
              <h2 className="privacy-section-title">{t(`cookies.sections.${section}.title`)}</h2>
              <p className="privacy-section-text">{t(`cookies.sections.${section}.content`)}</p>
            </div>
          ))}
        </div>

        {/* Professional Contact Section */}
        <div className="privacy-contact">
          <h3>{t('cookies.contactTitle')}</h3>
          <p>{t('cookies.contactSubtitle')}</p>
          <div className="privacy-contact-info">
            <div className="privacy-contact-item">
              <FaEnvelope />
              <a href="mailto:crystalservicejj@gmail.com">crystalservicejj@gmail.com</a>
            </div>
            <div className="privacy-contact-item">
              <FaPhone />
              <a href="tel:64562658">6456-2658</a>
            </div>
            <div className="privacy-contact-item">
              <FaWhatsapp />
              <a href="https://wa.me/50764562658" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy; 