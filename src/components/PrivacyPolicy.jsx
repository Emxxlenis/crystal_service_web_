'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  const sections = [
    'info_collection',
    'info_usage',
    'info_sharing',
    'data_security',
    'your_rights',
    'cookies',
    'third_party_links',
    'policy_changes',
    'contact'
  ];

  return (
    <section className="section privacy-section">
      <div className="privacy-container">
        <h1 className="privacy-title">{t('privacy.title')}</h1>
        <p className="privacy-date">{t('privacy.lastUpdated')}</p>
        
        {/* Table of Contents */}
        <div className="privacy-toc">
          <h3>{t('privacy.tocTitle')}</h3>
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <a href={`#section-${index + 1}`}>{t(`privacy.sections.${section}.title`)}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="privacy-content">
          {sections.map((section, index) => (
            <div key={index} className="privacy-section-block" id={`section-${index + 1}`}>
              <h2 className="privacy-section-title">{t(`privacy.sections.${section}.title`)}</h2>
              <p className="privacy-section-text">{t(`privacy.sections.${section}.content`)}</p>
            </div>
          ))}
        </div>

        {/* Professional Contact Section */}
        <div className="privacy-contact">
          <h3>{t('privacy.contactTitle')}</h3>
          <p>{t('privacy.contactSubtitle')}</p>
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

export default PrivacyPolicy; 