'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import '../App.css';
import { getProductMainImage, getCloudinaryDirectUrl } from '../utils/cloudinaryConfig';
import Image from 'next/image';

const PRODUCTS = [
  {
    key: 'puertas_ducha_medida',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'PUERTAS DE DUCHA A LA MEDIDA',
      en: 'CUSTOM SHOWER DOORS'
    },
    description: {
      es: 'Servicio personalizado de puertas de ducha con opciones corredizas y abatibles. Vidrio templado de alta calidad y amplia variedad de herrajes para personalizar completamente tu espacio de baño.',
      en: 'Custom shower door service with sliding and hinged options. High-quality tempered glass and wide variety of hardware to completely customize your bathroom space.'
    },
    color: {
      es: 'Transparente, Esmerilado',
      en: 'Clear, Frosted'
    },
    type: {
      es: 'Corrediza, Abatible',
      en: 'Sliding, Hinged'
    }
  },
  {
    key: 'sistema_eolo',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'SISTEMA EOLO',
      en: 'EOLO SYSTEM'
    },
    description: {
      es: 'Sistema de puerta de ducha con paño fijo y puerta corrediza. Disponible en configuración tipo L o con bañera. Incluye herrajes básicos y exclusivos en acabados satinados, brillantes y negro-dorado.',
      en: 'Shower door system with fixed panel and sliding door. Available in L-type configuration or with bathtub. Includes basic and exclusive hardware in satin, bright and black-gold finishes.'
    },
    color: {
      es: 'Transparente, Esmerilado',
      en: 'Clear, Frosted'
    },
    type: {
      es: 'Corrediza, Fijo',
      en: 'Sliding, Fixed'
    }
  },
  {
    key: 'modelo_cy',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'MODELO CY',
      en: 'CY MODEL'
    },
    description: {
      es: 'Sistema de 2 puertas corredizas con vidrio templado de 6 milímetros. Incluye tirador toallero doble integrado y herrajes exclusivamente plateados. Adaptable a espacios desde 1.20 hasta 1.80 metros de ancho.',
      en: 'System of 2 sliding doors with 6mm tempered glass. Includes integrated double towel holder and exclusively silver hardware. Adaptable to spaces from 1.20 to 1.80 meters wide.'
    },
    color: {
      es: 'Transparente',
      en: 'Clear'
    },
    type: {
      es: 'Corredizas',
      en: 'Sliding'
    }
  },
  {
    key: 'modelo_aqua_black',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'MODELO AQUA BLACK',
      en: 'AQUA BLACK MODEL'
    },
    description: {
      es: 'Diseño elegante con paño fijo y puerta corrediza. Vidrio templado de 6 milímetros con opción de papel esmerilado adicional. Tirador en negro para un acabado sofisticado y moderno.',
      en: 'Elegant design with fixed panel and sliding door. 6mm tempered glass with optional frosted paper. Black handle for a sophisticated and modern finish.'
    },
    color: {
      es: 'Transparente, Esmerilado',
      en: 'Clear, Frosted'
    },
    type: {
      es: 'Corrediza, Fijo',
      en: 'Sliding, Fixed'
    }
  },
  {
    key: 'ventanas_aluminio',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'PUERTAS Y VENTANAS DE ALUMINIO',
      en: 'ALUMINUM DOORS AND WINDOWS'
    },
    description: {
      es: 'Soluciones completas en aluminio: ventanas tipo Europa y francesa, puertas corredizas y abatibles, sistemas automáticos y plegables. Variedad en tonos y vidrios especializados.',
      en: 'Complete aluminum solutions: European and French-style windows, sliding and hinged doors, automatic and folding systems. Variety in tones and specialized glass.'
    },
    color: {
      es: 'Natural, Blanco, Negro, Maderado',
      en: 'Natural, White, Black, Wood'
    },
    type: {
      es: 'Europa, Francesa, Corredizas, Abatibles',
      en: 'European, French, Sliding, Hinged'
    }
  },
  {
    key: 'barandas_acero_inoxidable',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'BARANDAS DE ACERO INOXIDABLE Y VIDRIO',
      en: 'STAINLESS STEEL AND GLASS RAILINGS'
    },
    description: {
      es: 'Soluciones completas en barandas: acero inoxidable con cabillas y cuerda, vidrio templado exclusivo, y combinaciones mixtas. Pasamanos para piscina, pared y baño.',
      en: 'Complete railing solutions: stainless steel with rods and rope, exclusive tempered glass, and mixed combinations. Pool, wall and bathroom handrails.'
    },
    color: {
      es: 'Acero Inoxidable, Dorado, Negro',
      en: 'Stainless Steel, Gold, Black'
    },
    type: {
      es: 'Cabillas, Cuerda, Vidrio, Mixtas',
      en: 'Rods, Rope, Glass, Mixed'
    }
  },
  {
    key: 'vidrio_templado',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'VIDRIO TEMPLADO',
      en: 'TEMPERED GLASS'
    },
    description: {
      es: 'Vidrio templado de alta resistencia para proyectos residenciales y comerciales.',
      en: 'High-resistance tempered glass for residential and commercial projects.'
    },
    color: {
      es: 'Transparente',
      en: 'Clear'
    },
    type: {
      es: 'Templado, Laminado',
      en: 'Tempered, Laminated'
    }
  },
  {
    key: 'puertas_automatizadas',
    img: '/products/fondo_home.jpg',
    title: {
      es: 'PUERTAS AUTOMATIZADAS',
      en: 'AUTOMATED DOORS'
    },
    description: {
      es: 'Puertas automatizadas de alto flujo, rápidas y silenciosas.',
      en: 'High-flow, fast and silent automated doors.'
    },
    color: {
      es: 'Aluminio, Vidrio',
      en: 'Aluminum, Glass'
    },
    type: {
      es: 'Deslizantes, Giratorias',
      en: 'Sliding, Revolving'
    }
  }
];

/**
 * Products component displays a list of products and their details.
 * @component
 * @returns {JSX.Element}
 */
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
            <Image 
              src={getCloudinaryDirectUrl(getProductMainImage(product.key))} 
              alt={product.title[language]} 
              className="product-detail-img-large" 
              width={600} 
              height={400} 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority
            />
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
            <Image 
              src={getCloudinaryDirectUrl(getProductMainImage(product.key))} 
              alt={product.title[language]} 
              className="product-img" 
              width={320} 
              height={320} 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
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