'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';
import Image from 'next/image';

const CLIENT_LOGOS = [
  'client_1.png',
  'client_2.png',
  'client_3.png',
  'client_4.png',
  'client_5.png',
];

/**
 * Projects component displays client logos in a grid.
 * @component
 * @returns {JSX.Element}
 */
const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section clients-section">
      <h1 className="clients-title">{t('projects.title')}</h1>
      <div className="clients-logos-grid">
        {CLIENT_LOGOS.map((logo, i) => (
          <div className="client-logo-box" key={i}>
            <Image 
              src={`/icons/clients/${logo}`} 
              alt={`Client ${i + 1}`} 
              className="client-logo-img" 
              width={120} 
              height={60} 
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 