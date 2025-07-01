import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
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
    },
    type: 'aluminio'
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
    },
    type: 'vidrio'
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
    },
    type: 'aluminio'
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
    },
    type: 'espejo'
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
    },
    type: 'vidrio'
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
    },
    type: 'acero'
  }
];

const FILTERS = [
  { key: 'all', es: 'Todos', en: 'All' },
  { key: 'aluminio', es: 'Aluminio', en: 'Aluminum' },
  { key: 'vidrio', es: 'Vidrio', en: 'Glass' },
  { key: 'espejo', es: 'Espejo', en: 'Mirror' },
  { key: 'acero', es: 'Acero', en: 'Steel' }
];

const FullCatalog = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const filteredProducts = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);
  return (
    <section className="section catalog-section">
      <h1 className="catalog-title">{t('catalog.allProducts')}</h1>
      <div className="catalog-filters pills">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`catalog-filter-btn pill${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f[language]}
          </button>
        ))}
      </div>
      <div className="catalog-grid">
        {filteredProducts.map(product => (
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
    </section>
  );
};

export default FullCatalog; 