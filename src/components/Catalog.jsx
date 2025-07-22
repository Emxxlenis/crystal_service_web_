'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getProductMainImage, getCloudinaryDirectUrl } from '../utils/cloudinaryConfig';
import '../App.css';
import Image from 'next/image';

const PRODUCTS = [
  {
    key: 'sistema_eolo',
    name: {
      es: 'Sistema Eolo',
      en: 'Eolo System'
    },
    desc: {
      es: 'Sistema de puerta de ducha con paño fijo y puerta corrediza. Disponible en configuración tipo L o con bañera. Incluye herrajes básicos y exclusivos en acabados satinados, brillantes y negro-dorado.',
      en: 'Shower door system with fixed panel and sliding door. Available in L-type configuration or with bathtub. Includes basic and exclusive hardware in satin, bright and black-gold finishes.'
    }
  },
  {
    key: 'modelo_cy',
    name: {
      es: 'Modelo CY',
      en: 'CY Model'
    },
    desc: {
      es: 'Sistema de 2 puertas corredizas con vidrio templado de 6 milímetros. Incluye tirador toallero doble integrado y herrajes exclusivamente plateados. Adaptable a espacios desde 1.20 hasta 1.80 metros de ancho.',
      en: 'System of 2 sliding doors with 6mm tempered glass. Includes integrated double towel holder and exclusively silver hardware. Adaptable to spaces from 1.20 to 1.80 meters wide.'
    }
  },
  {
    key: 'modelo_aqua_black',
    name: {
      es: 'Modelo Aqua Black',
      en: 'Aqua Black Model'
    },
    desc: {
      es: 'Diseño elegante con paño fijo y puerta corrediza. Vidrio templado de 6 milímetros con opción de papel esmerilado adicional. Tirador en negro para un acabado sofisticado y moderno.',
      en: 'Elegant design with fixed panel and sliding door. 6mm tempered glass with optional frosted paper. Black handle for a sophisticated and modern finish.'
    }
  },
  {
    key: 'ventanas_aluminio',
    name: {
      es: 'Puertas y Ventanas de Aluminio',
      en: 'Aluminum Doors and Windows'
    },
    desc: {
      es: 'Soluciones completas en aluminio: ventanas tipo Europa y francesa, puertas corredizas y abatibles, sistemas automáticos y plegables. Variedad en tonos y vidrios especializados.',
      en: 'Complete aluminum solutions: European and French-style windows, sliding and hinged doors, automatic and folding systems. Variety in tones and specialized glass.'
    }
  },
  {
    key: 'barandas_acero_inoxidable',
    name: {
      es: 'Barandas de Acero Inoxidable y Vidrio',
      en: 'Stainless Steel and Glass Railings'
    },
    desc: {
      es: 'Soluciones completas en barandas: acero inoxidable con cabillas y cuerda, vidrio templado exclusivo, y combinaciones mixtas. Pasamanos para piscina, pared y baño.',
      en: 'Complete railing solutions: stainless steel with rods and rope, exclusive tempered glass, and mixed combinations. Pool, wall and bathroom handrails.'
    }
  },
  {
    key: 'pergola',
    name: {
      es: 'Pérgolas y Estructuras',
      en: 'Pergolas and Structures'
    },
    desc: {
      es: 'Diseño y construcción de pérgolas personalizadas en aluminio y acero inoxidable. Estructuras para terrazas, jardines y espacios exteriores con acabados premium.',
      en: 'Design and construction of custom pergolas in aluminum and stainless steel. Structures for terraces, gardens and outdoor spaces with premium finishes.'
    }
  },
  {
    key: 'smart_glass',
    name: {
      es: 'Smart Glass y Tecnología',
      en: 'Smart Glass and Technology'
    },
    desc: {
      es: 'Vidrio inteligente con control de privacidad, divisores automáticos y sistemas de control. Tecnología avanzada para espacios modernos y funcionales.',
      en: 'Smart glass with privacy control, automatic partitions and control systems. Advanced technology for modern and functional spaces.'
    }
  }
];

/**
 * Catalog component displays a preview of featured products on the homepage.
 * @component
 * @returns {JSX.Element}
 */
const Catalog = () => {
  const { language, t } = useLanguage();
  const router = useRouter();
  // Show only the first three products as a preview
  const showProducts = PRODUCTS.slice(0, 3);
  const hasMore = PRODUCTS.length > 3;
  return (
    <section id="products" className="section catalog-section">
      <h1 className="catalog-title">{t('catalog.title')}</h1>
      {/* Product preview grid */}
      <div className="catalog-grid">
        {showProducts.map(product => (
          <div 
            className="catalog-card" 
            key={product.key}
            onClick={() => router.push(`/productos/${product.key}`)}
            style={{ cursor: 'pointer' }}
          >
            <Image 
              src={getCloudinaryDirectUrl(getProductMainImage(product.key))} 
              alt={product.name[language]} 
              className="catalog-img" 
              width={400} 
              height={300} 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority
            />
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
      {/* Button to view the full catalog if there are more products */}
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