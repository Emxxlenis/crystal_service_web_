import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';

const PRODUCTS = [
  {
    key: 'aluminum_windows',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'PUERTAS Y VENTANAS DE ALUMINIO',
      en: 'ALUMINUM DOORS AND WINDOWS'
    },
    description: {
      es: 'Soluciones modernas en aluminio para puertas y ventanas.',
      en: 'Modern aluminum solutions for doors and windows.'
    },
    color: {
      es: 'Plata, Blanco, Negro',
      en: 'Silver, White, Black'
    },
    type: {
      es: 'Corredizas, Abatibles',
      en: 'Sliding, Hinged'
    }
  },
  {
    key: 'bath_doors',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'PUERTAS DE BAÑO',
      en: 'BATH DOORS'
    },
    description: {
      es: 'Puertas de baño de vidrio templado y diseño elegante.',
      en: 'Elegant tempered glass bath doors.'
    },
    color: {
      es: 'Transparente, Esmerilado',
      en: 'Clear, Frosted'
    },
    type: {
      es: 'Corredizas, Abatibles',
      en: 'Sliding, Hinged'
    }
  },
  {
    key: 'louvers',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'LOUVERS DE ALUMINIO',
      en: 'ALUMINUM LOUVERS'
    },
    description: {
      es: 'Louvers de aluminio para ventilación y diseño.',
      en: 'Aluminum louvers for ventilation and design.'
    },
    color: {
      es: 'Plata, Blanco, Negro',
      en: 'Silver, White, Black'
    },
    type: {
      es: 'Fijos, Móviles',
      en: 'Fixed, Movable'
    }
  },
  {
    key: 'mirrors',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'ESPEJOS',
      en: 'MIRRORS'
    },
    description: {
      es: 'Espejos a medida para cualquier espacio.',
      en: 'Custom mirrors for any space.'
    },
    color: {
      es: 'Plata',
      en: 'Silver'
    },
    type: {
      es: '',
      en: ''
    }
  },
  // Puedes agregar más productos aquí
];

const Products = () => {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState(null);

  if (selected) {
    const product = PRODUCTS.find(p => p.key === selected);
    return (
      <section className="section product-detail-section">
        <div className="product-detail-layout">
          <div className="product-detail-info">
            <h1 className="product-detail-title">{product.title[language]}</h1>
            <p className="product-detail-desc">{product.description[language]}</p>
            <div className="product-detail-attrs">
              <div>
                <strong>{t('products.detail.color')}:</strong> {product.color[language]}
              </div>
              {product.type[language] && (
                <div>
                  <strong>{t('products.detail.type')}:</strong> {product.type[language]}
                </div>
              )}
            </div>
            <button className="quote-btn">
              {t('products.detail.quote')}
            </button>
            <button className="back-btn" onClick={() => setSelected(null)}>
              {t('products.detail.backToProducts')}
            </button>
          </div>
          <div className="product-detail-imagebox">
            <img src={product.img} alt={product.title[language]} className="product-detail-img-large" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="section products-section">
      <h1>{t('products.title')}</h1>
      <div className="products-grid">
        {PRODUCTS.map(product => (
          <div className="product-card" key={product.key}>
            <img src={product.img} alt={product.title[language]} className="product-img" />
            <button className="product-btn" onClick={() => setSelected(product.key)}>
              {product.title[language]} +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products; 