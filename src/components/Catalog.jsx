'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import Link from 'next/link';
import '../App.css';

const PRODUCTS = [
  {
    key: 'aluminum_windows',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas y Ventanas de Aluminio',
      en: 'Aluminum Doors and Windows'
    },
    desc: {
      es: 'Soluciones modernas y resistentes en aluminio para puertas y ventanas residenciales y comerciales.',
      en: 'Modern and durable aluminum solutions for residential and commercial doors and windows.'
    }
  },
  {
    key: 'bath_doors',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas de Baño',
      en: 'Bath Doors'
    },
    desc: {
      es: 'Puertas de baño de vidrio templado con diseño elegante y seguro.',
      en: 'Elegant and safe tempered glass bath doors.'
    }
  },
  {
    key: 'louvers',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Louvers de Aluminio',
      en: 'Aluminum Louvers'
    },
    desc: {
      es: 'Louvers de aluminio para ventilación y diseño arquitectónico.',
      en: 'Aluminum louvers for ventilation and architectural design.'
    }
  },
  {
    key: 'mirrors',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Espejos',
      en: 'Mirrors'
    },
    desc: {
      es: 'Espejos a medida para cualquier espacio, con acabados de alta calidad.',
      en: 'Custom mirrors for any space, with high-quality finishes.'
    }
  },
  {
    key: 'glass_railings',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Barandales de Vidrio',
      en: 'Glass Railings'
    },
    desc: {
      es: 'Barandales de vidrio templado para interiores y exteriores.',
      en: 'Tempered glass railings for indoor and outdoor use.'
    }
  },
  {
    key: 'steel_doors',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas de Acero Inoxidable',
      en: 'Stainless Steel Doors'
    },
    desc: {
      es: 'Puertas de acero inoxidable para máxima seguridad y durabilidad.',
      en: 'Stainless steel doors for maximum security and durability.'
    }
  }
];

const Catalog = () => {
  const { language, t } = useLanguage();
  const showProducts = PRODUCTS.slice(0, 3);
  const hasMore = PRODUCTS.length > 3;
  return (
    <section id="products" className="section catalog-section">
      <h1 className="catalog-title">{t('catalog.title')}</h1>
      <div className="catalog-grid">
        {showProducts.map(product => (
          <div className="catalog-card" key={product.key}>
            <img src={product.img} alt={product.name[language]} className="catalog-img" />
            <div className="catalog-info">
              <h3>{product.name[language]}</h3>
              <p>{product.desc[language]}</p>
              <a
                href={`https://wa.me/50764562658?text=Hola,%20quiero%20cotizar%20el%20producto:%20${encodeURIComponent(product.name[language])}`}
                className="catalog-quote-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('catalog.quoteWhatsapp')}
              </a>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="catalog-more-btn-box">
          <Link href="/catalogo" className="catalog-more-btn">
            {t('catalog.seeMore')}
          </Link>
        </div>
      )}
    </section>
  );
};

export default Catalog; 