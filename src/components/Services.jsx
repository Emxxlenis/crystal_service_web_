import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const SERVICES = [
  {
    key: 'modelado_3d',
    img: process.env.PUBLIC_URL + '/products/fondo_home.jpg',
    title: {
      es: 'MODELADO 3D',
      en: '3D MODELING'
    },
    description: {
      es: 'Creamos modelos 3D precisos para visualizar tus proyectos antes de construirlos.',
      en: 'We create accurate 3D models to visualize your projects before building.'
    }
  },
  {
    key: 'planos',
    img: process.env.PUBLIC_URL + '/products/fondo_home.jpg',
    title: {
      es: 'PLANOS DE CONSTRUCCIÓN',
      en: 'CONSTRUCTION PLANS'
    },
    description: {
      es: 'Elaboramos planos detallados para la correcta ejecución de tu obra.',
      en: 'We prepare detailed plans for the correct execution of your project.'
    }
  },
  {
    key: 'render',
    img: process.env.PUBLIC_URL + '/products/fondo_home.jpg',
    title: {
      es: 'RENDERIZADO',
      en: 'RENDERING'
    },
    description: {
      es: 'Imágenes realistas para presentar y vender tus ideas.',
      en: 'Realistic images to present and sell your ideas.'
    }
  },
  {
    key: 'asesoria',
    img: process.env.PUBLIC_URL + '/products/fondo_home.jpg',
    title: {
      es: 'ASESORÍA',
      en: 'CONSULTING'
    },
    description: {
      es: 'Te orientamos en cada etapa de tu proyecto para lograr los mejores resultados.',
      en: 'We guide you in every stage of your project for the best results.'
    }
  }
  
];

const Services = () => {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState(null);

  if (selected) {
    const service = SERVICES.find(s => s.key === selected);
    return (
      <section className="section service-detail-section">
        <div className="product-detail-layout">
          <div className="product-detail-info">
            <h1 className="product-detail-title">{service.title[language]}</h1>
            <p className="product-detail-desc">{service.description[language]}</p>
            <button className="quote-btn">
              {t('services.detail.quote')}
            </button>
            <button className="back-btn" onClick={() => setSelected(null)}>
              {t('services.detail.backToServices')}
            </button>
          </div>
          <div className="product-detail-imagebox">
            <img src={service.img} alt={service.title[language]} className="product-detail-img-large" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section services-section">
      <h1>{t('services.title')}</h1>
      <div className="products-grid">
        {SERVICES.map(service => (
          <div className="product-card" key={service.key}>
            <img src={service.img} alt={service.title[language]} className="product-img" />
            <button className="product-btn" onClick={() => setSelected(service.key)}>
              {service.title[language]} +
            </button>
          </div>
        ))}
      </div>
      <div className="services-description">
        {t('services.description')}
      </div>
    </section>
  );
};

export default Services; 