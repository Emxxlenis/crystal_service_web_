'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const CLIENT_LOGOS = [
  'client_1.png',
  'client_2.png',
  'client_3.png',
  'client_4.png',
  'client_5.png',
  'client_6.png',
];

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section clients-section">
      <h1 className="clients-title">{t('projects.title')}</h1>
      <div className="clients-logos-grid">
        {CLIENT_LOGOS.map((logo, i) => (
          <div className="client-logo-box" key={i}>
            <img src={`/icons/clients/${logo}`} alt={`Cliente ${i + 1}`} className="client-logo-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 