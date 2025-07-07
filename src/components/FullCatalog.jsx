'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import { useRouter } from 'next/navigation';
import '../App.css';

const PRODUCTS = [
  // Vidrio y Cristalería
  {
    key: 'vidrio_templado',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Vidrio Templado',
      en: 'Tempered Glass'
    },
    desc: {
      es: 'Vidrio templado de alta resistencia para proyectos residenciales y comerciales.',
      en: 'High-resistance tempered glass for residential and commercial projects.'
    },
    type: 'vidrio'
  },
  {
    key: 'espejos',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Espejos',
      en: 'Mirrors'
    },
    desc: {
      es: 'Espejos a medida para cualquier espacio, con acabados profesionales.',
      en: 'Custom mirrors for any space, with professional finishes.'
    },
    type: 'vidrio'
  },
  {
    key: 'divisiones_bano',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Divisiones de Baño',
      en: 'Bath Partitions'
    },
    desc: {
      es: 'Divisiones de baño en vidrio templado, elegantes y funcionales.',
      en: 'Elegant and functional tempered glass bath partitions.'
    },
    type: 'vidrio'
  },
  {
    key: 'puertas_vidrio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas de Vidrio Templado',
      en: 'Tempered Glass Doors'
    },
    desc: {
      es: 'Puertas de vidrio templado para interiores y exteriores.',
      en: 'Tempered glass doors for indoor and outdoor use.'
    },
    type: 'vidrio'
  },
  {
    key: 'smart_glass',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Smart Glass (Papel Inteligente)',
      en: 'Smart Glass (Intelligent Film)'
    },
    desc: {
      es: 'Transforma vidrios comunes en inteligentes con tecnología de privacidad.',
      en: 'Transform regular glass into smart glass with privacy technology.'
    },
    type: 'vidrio'
  },
  {
    key: 'papel_ahumado',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Papel Ahumado para Fachadas',
      en: 'Smoked Film for Facades'
    },
    desc: {
      es: 'Papel ahumado para control solar y privacidad en fachadas.',
      en: 'Smoked film for solar control and privacy on facades.'
    },
    type: 'vidrio'
  },
  // Aluminio
  {
    key: 'ventanas_aluminio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Ventanas de Aluminio',
      en: 'Aluminum Windows'
    },
    desc: {
      es: 'Ventanas de aluminio modernas y resistentes para todo tipo de proyectos.',
      en: 'Modern and durable aluminum windows for all types of projects.'
    },
    type: 'aluminio'
  },
  {
    key: 'puertas_aluminio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas en Aluminio',
      en: 'Aluminum Doors'
    },
    desc: {
      es: 'Puertas de aluminio para interiores y exteriores, funcionales y seguras.',
      en: 'Aluminum doors for indoor and outdoor use, functional and secure.'
    },
    type: 'aluminio'
  },
  {
    key: 'louver',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Sistema Louver',
      en: 'Louver System'
    },
    desc: {
      es: 'Sistema de lamas de aluminio para ventilación y diseño.',
      en: 'Aluminum louver system for ventilation and design.'
    },
    type: 'aluminio'
  },
  {
    key: 'ventanas_europa',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Ventanas tipo Europa',
      en: 'European-Style Windows'
    },
    desc: {
      es: 'Ventanas de aluminio tipo Europa, elegantes y eficientes.',
      en: 'Elegant and efficient European-style aluminum windows.'
    },
    type: 'aluminio'
  },
  {
    key: 'puertas_corredizas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas Corredizas',
      en: 'Sliding Doors'
    },
    desc: {
      es: 'Puertas corredizas de aluminio y vidrio para espacios modernos.',
      en: 'Aluminum and glass sliding doors for modern spaces.'
    },
    type: 'aluminio'
  },
  // Acero Inoxidable
  {
    key: 'barandas_acero',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Barandas de Acero Inoxidable',
      en: 'Stainless Steel Railings'
    },
    desc: {
      es: 'Barandas de acero inoxidable para interiores y exteriores.',
      en: 'Stainless steel railings for indoor and outdoor use.'
    },
    type: 'acero'
  },
  {
    key: 'estructuras_acero',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Estructuras en Acero Inoxidable',
      en: 'Stainless Steel Structures'
    },
    desc: {
      es: 'Estructuras de acero inoxidable para proyectos arquitectónicos y comerciales.',
      en: 'Stainless steel structures for architectural and commercial projects.'
    },
    type: 'acero'
  },
  // Servicios Especializados
  {
    key: 'muros_cortina',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Muros Cortina',
      en: 'Curtain Walls'
    },
    desc: {
      es: 'Muros cortina de vidrio y aluminio para fachadas modernas.',
      en: 'Glass and aluminum curtain walls for modern facades.'
    },
    type: 'especial'
  },
  {
    key: 'fachadas_modernas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Fachadas Modernas',
      en: 'Modern Facades'
    },
    desc: {
      es: 'Fachadas modernas en vidrio, aluminio y acero para proyectos comerciales y residenciales.',
      en: 'Modern facades in glass, aluminum, and steel for commercial and residential projects.'
    },
    type: 'especial'
  },
  {
    key: 'fachadas_comerciales',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Fachadas Comerciales',
      en: 'Commercial Facades'
    },
    desc: {
      es: 'Fachadas comerciales personalizadas para negocios y locales.',
      en: 'Custom commercial facades for businesses and stores.'
    },
    type: 'especial'
  },
  {
    key: 'cerramientos_oficinas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Cerramientos de Oficinas',
      en: 'Office Enclosures'
    },
    desc: {
      es: 'Cerramientos de oficinas en vidrio y aluminio para espacios corporativos.',
      en: 'Glass and aluminum office enclosures for corporate spaces.'
    },
    type: 'especial'
  },
  {
    key: 'puertas_automatizadas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas Automatizadas',
      en: 'Automated Doors'
    },
    desc: {
      es: 'Puertas automatizadas de alto flujo, rápidas y silenciosas.',
      en: 'High-flow, fast and silent automated doors.'
    },
    type: 'especial'
  },
  {
    key: 'divisiones_oficinas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Divisiones de Oficinas',
      en: 'Office Partitions'
    },
    desc: {
      es: 'Divisiones de oficinas en vidrio y aluminio para ambientes modernos.',
      en: 'Glass and aluminum office partitions for modern environments.'
    },
    type: 'especial'
  },
  {
    key: 'mantenimiento_reparacion',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Mantenimiento y Reparación',
      en: 'Maintenance and Repair'
    },
    desc: {
      es: 'Servicio de mantenimiento y reparación para todos nuestros productos.',
      en: 'Maintenance and repair service for all our products.'
    },
    type: 'especial'
  },
  {
    key: 'limpieza_remocion_oxido',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Limpieza y Remoción de Óxido',
      en: 'Cleaning and Rust Removal'
    },
    desc: {
      es: 'Limpieza profesional y remoción de óxido en estructuras metálicas y de vidrio.',
      en: 'Professional cleaning and rust removal for metal and glass structures.'
    },
    type: 'especial'
  }
];

const FILTERS = [
  { key: 'all', es: 'Todos', en: 'All' },
  { key: 'aluminio', es: 'Aluminio', en: 'Aluminum' },
  { key: 'vidrio', es: 'Vidrio', en: 'Glass' },
  { key: 'acero', es: 'Acero', en: 'Steel' },
  { key: 'especial', es: 'Especiales', en: 'Specialized' }
];

const FullCatalog = () => {
  const { language, t } = useLanguage();
  const router = useRouter();
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
          <div 
            className="catalog-card" 
            key={product.key}
            onClick={() => router.push(`/productos/${product.key}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={product.img} alt={product.name[language]} className="catalog-img" />
            <div className="catalog-info">
              <h3>{product.name[language]}</h3>
              <p>{product.desc[language]}</p>
              <button
                className="catalog-quote-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  const message = `Hola, quiero cotizar el producto: ${product.name[language]}`;
                  const whatsappUrl = `https://wa.me/50764562658?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                {t('catalog.quoteWhatsapp')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullCatalog; 