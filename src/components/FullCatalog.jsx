'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import { useRouter } from 'next/navigation';
import { getProductMainImage, getCloudinaryDirectUrl } from '../utils/cloudinaryConfig';
import '../App.css';

const PRODUCTS = [
  // Puertas de Ducha
  {
    key: 'puertas_ducha_medida',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas de Ducha a la Medida',
      en: 'Custom Shower Doors'
    },
    desc: {
      es: 'Servicio personalizado de puertas de ducha con opciones corredizas y abatibles. Vidrio templado de alta calidad y amplia variedad de herrajes para personalizar completamente tu espacio de baño.',
      en: 'Custom shower door service with sliding and hinged options. High-quality tempered glass and wide variety of hardware to completely customize your bathroom space.'
    },
    type: 'ducha'
  },
  {
    key: 'sistema_eolo',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Sistema Eolo',
      en: 'Eolo System'
    },
    desc: {
      es: 'Sistema de puerta de ducha con paño fijo y puerta corrediza. Disponible en configuración tipo L o con bañera. Incluye herrajes básicos y exclusivos en acabados satinados, brillantes y negro-dorado.',
      en: 'Shower door system with fixed panel and sliding door. Available in L-type configuration or with bathtub. Includes basic and exclusive hardware in satin, bright and black-gold finishes.'
    },
    type: 'ducha'
  },
  {
    key: 'modelo_cy',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Modelo CY',
      en: 'CY Model'
    },
    desc: {
      es: 'Sistema de 2 puertas corredizas con vidrio templado de 6 milímetros. Incluye tirador toallero doble integrado y herrajes exclusivamente plateados. Adaptable a espacios desde 1.20 hasta 1.80 metros de ancho.',
      en: 'System of 2 sliding doors with 6mm tempered glass. Includes integrated double towel holder and exclusively silver hardware. Adaptable to spaces from 1.20 to 1.80 meters wide.'
    },
    type: 'ducha'
  },
  {
    key: 'modelo_aqua_black',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Modelo Aqua Black',
      en: 'Aqua Black Model'
    },
    desc: {
      es: 'Diseño elegante con paño fijo y puerta corrediza. Vidrio templado de 6 milímetros con opción de papel esmerilado adicional. Tirador en negro para un acabado sofisticado y moderno.',
      en: 'Elegant design with fixed panel and sliding door. 6mm tempered glass with optional frosted paper. Black handle for a sophisticated and modern finish.'
    },
    type: 'ducha'
  },
  {
    key: 'puerta_abatible',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puerta Abatible',
      en: 'Hinged Door'
    },
    desc: {
      es: 'Sistema de puerta abatible con paño fijo y vidrio templado de 10 milímetros. Amplia variedad de herrajes en acabados satinados, brillantes, negro y dorado. Disponible en configuración tipo L y modelo plegable.',
      en: 'Hinged door system with fixed panel and 10mm tempered glass. Wide variety of hardware in satin, bright, black and gold finishes. Available in L-type configuration and folding model.'
    },
    type: 'ducha'
  },
  // Puertas y Ventanas
  {
    key: 'ventanas_aluminio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Ventanas en Aluminio',
      en: 'Aluminum Windows'
    },
    desc: {
      es: 'Ventanas tipo Europa y francesa con variedad en diseño y precios. Vidrio crudo, termo acústico e insulado. Tonos natural, blanco, negro y maderado. Vidrios claro, reflectivo, oscuro y gris.',
      en: 'European and French-style windows with design and price variety. Raw, thermo-acoustic and insulated glass. Natural, white, black and wood tones. Clear, reflective, dark and gray glass.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'puertas_aluminio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas en Aluminio',
      en: 'Aluminum Doors'
    },
    desc: {
      es: 'Puertas corredizas, abatibles y anti-ruido. Puerta plegable y de varios paños corredizos. Puertas para negocios con cierra automático. Variedad en tonos de aluminio y vidrio.',
      en: 'Sliding, hinged and anti-noise doors. Folding door and multi-panel sliding doors. Business doors with automatic closer. Variety in aluminum and glass tones.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'puerta_corrediza_europa',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puerta Corrediza Tipo Europa',
      en: 'European-Style Sliding Door'
    },
    desc: {
      es: 'Gran variedad en tonos de aluminio y vidrios claros y reflectivos. Vidrios insulados de alta calidad. Diseños exclusivos con garantía de confianza y durabilidad.',
      en: 'Great variety in aluminum tones and clear and reflective glass. High-quality insulated glass. Exclusive designs with guaranteed trust and durability.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'puertas_automaticas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas Automáticas',
      en: 'Automatic Doors'
    },
    desc: {
      es: 'Dale el mejor servicio a tus clientes con puertas automáticas de alta calidad. Variedad en apertura de 1 puerta o 2 puertas. Calidad y confianza garantizadas.',
      en: 'Give your customers the best service with high-quality automatic doors. Variety in opening with 1 door or 2 doors. Guaranteed quality and trust.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'ventanas_europa_corredizas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Ventanas Tipo Europa Corredizas',
      en: 'European-Style Sliding Windows'
    },
    desc: {
      es: 'Gran variedad de colores en aluminio y vidrio con múltiples opciones de apertura. Calidad y confianza en cada instalación. Diseños modernos y funcionales.',
      en: 'Great variety of colors in aluminum and glass with multiple opening options. Quality and trust in every installation. Modern and functional designs.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'puertas_plegables',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puertas Plegables',
      en: 'Folding Doors'
    },
    desc: {
      es: 'Plegables a la medida con variedad en tonos de aluminio y vidrios claros y reflectivos. Dale amplitud a tus espacios con sistemas de apertura versátiles.',
      en: 'Custom folding doors with variety in aluminum tones and clear and reflective glass. Give amplitude to your spaces with versatile opening systems.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'puerta_tipo_francesa',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puerta Tipo Francesa',
      en: 'French-Style Door'
    },
    desc: {
      es: 'Diseños exclusivos con variedad en tonos de aluminio y vidrios claros y reflectivos. Elegancia francesa combinada con tecnología moderna y durabilidad.',
      en: 'Exclusive designs with variety in aluminum tones and clear and reflective glass. French elegance combined with modern technology and durability.'
    },
    type: 'puertas_ventanas'
  },
  {
    key: 'puerta_vidrio_templado',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Puerta de Vidrio Templado',
      en: 'Tempered Glass Door'
    },
    desc: {
      es: 'Puertas en vidrio templado abatibles o corredizas con herrajes completos. Gran variedad de herrajes en diseño y colores. Cerraduras de piso o de centro.',
      en: 'Hinged or sliding tempered glass doors with complete hardware. Great variety of hardware in design and colors. Floor or center locks.'
    },
    type: 'puertas_ventanas'
  },
  // Barandas de Acero Inoxidable y Vidrio
  {
    key: 'barandas_acero_inoxidable',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Barandas en Acero Inoxidable',
      en: 'Stainless Steel Railings'
    },
    desc: {
      es: 'Barandas en acero inoxidable con opciones de cabillas, cuerda, acero + vidrio y acero inoxidable puro. Soluciones versátiles para interiores y exteriores con máxima durabilidad.',
      en: 'Stainless steel railings with options for rods, rope, steel + glass and pure stainless steel. Versatile solutions for indoor and outdoor use with maximum durability.'
    },
    type: 'barandas'
  },
  {
    key: 'barandas_vidrio_templado',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Barandas en Vidrio Templado',
      en: 'Tempered Glass Railings'
    },
    desc: {
      es: 'Exclusivas barandas en vidrio templado con diferentes calibres y tonalidades. Colores exclusivos como dorado y negro. Elegancia para hogar, locales comerciales y oficinas.',
      en: 'Exclusive tempered glass railings with different gauges and tones. Exclusive colors like gold and black. Elegance for homes, commercial stores and offices.'
    },
    type: 'barandas'
  },
  {
    key: 'baranda_acero_vidrio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Baranda Acero Inoxidable y Vidrio Templado',
      en: 'Stainless Steel and Tempered Glass Railing'
    },
    desc: {
      es: 'Solo acero inoxidable, solo vidrio templado con soportes, o combinación de ambos. Pasamanos para piscina, en pared, para baño y mucho más. Máxima versatilidad.',
      en: 'Stainless steel only, tempered glass only with supports, or combination of both. Pool handrails, wall-mounted, bathroom and much more. Maximum versatility.'
    },
    type: 'barandas'
  },
  // Servicios Especializados
  {
    key: 'espejos',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Espejos',
      en: 'Mirrors'
    },
    desc: {
      es: 'Espejos a la medida con biselados, platinas decorativas, canteado y canteado brillantes. Tonalidades ahumado, natural y bronce. Con luz LED, estilo mosaico, completo y seccionado.',
      en: 'Custom mirrors with beveled edges, decorative platinum, edge and bright edge finishes. Smoked, natural and bronze tones. With LED lighting, mosaic style, complete and sectioned.'
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
      es: 'En vidrio templado, aluminio y vidrio, a la medida con vidrios jumbos. Variedad en tonos de aluminio y vidrio, herrajes incluidos. Papel esmerilado a diseño o completo opcional.',
      en: 'Tempered glass, aluminum and glass, custom with jumbo glass. Variety in aluminum and glass tones, hardware included. Optional frosted paper with design or complete coverage.'
    },
    type: 'especial'
  },
  {
    key: 'mallas_mosquiteras_plisadas',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Mallas Mosquiteras Plisadas',
      en: 'Pleated Mosquito Nets'
    },
    desc: {
      es: 'Variedad en apertura con calidad y elegancia. Gran variedad en tonos de aluminio. Solución práctica y estética para control de insectos en cualquier espacio.',
      en: 'Variety in opening with quality and elegance. Great variety in aluminum tones. Practical and aesthetic solution for insect control in any space.'
    },
    type: 'especial'
  },
  {
    key: 'disenos_aluminio',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Diseños en Aluminio',
      en: 'Aluminum Designs'
    },
    desc: {
      es: 'Gran variedad de colores en aluminio para oficinas, hogar o negocio. Elegancia para tus espacios con soluciones personalizadas que combinan funcionalidad y diseño.',
      en: 'Great variety of aluminum colors for offices, home or business. Elegance for your spaces with customized solutions that combine functionality and design.'
    },
    type: 'especial'
  },
  {
    key: 'sistema_louver',
    img: '/products/fondo_home.jpg',
    name: {
      es: 'Sistema Louver',
      en: 'Louver System'
    },
    desc: {
      es: 'Cerramientos en sistema louver para mayor ventilación. Puertas y ventanas corredizas o abatibles con gran variedad en tonos de aluminio. Control de flujo de aire eficiente.',
      en: 'Louver system enclosures for greater ventilation. Sliding or hinged doors and windows with great variety in aluminum tones. Efficient air flow control.'
    },
    type: 'especial'
  },
];

const FILTERS = [
  { key: 'all', es: 'Todos', en: 'All' },
  { key: 'ducha', es: 'Puertas de Ducha', en: 'Shower Doors' },
  { key: 'puertas_ventanas', es: 'Puertas y Ventanas', en: 'Doors and Windows' },
  { key: 'barandas', es: 'Barandas de Acero y Vidrio', en: 'Steel and Glass Railings' },
  { key: 'especial', es: 'Servicios Especiales', en: 'Special Services' }
];

// FullCatalog component displays the complete product catalog with category filters and animated transitions.
// It uses the useLanguage context for translations and manages filter state to show relevant products.

const FullCatalog = () => {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);
  // Filter products by selected category
  const filteredProducts = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);
  
  // Handle filter change and trigger animation
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <section className="section catalog-section">
      <h1 className="catalog-title">{t('catalog.allProducts')}</h1>
      {/* Category filter pills */}
      <div className="catalog-filters pills">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`catalog-filter-btn pill${filter === f.key ? ' active' : ''}`}
            onClick={() => handleFilterChange(f.key)}
          >
            {f[language]}
          </button>
        ))}
      </div>
      {/* Product grid with animation on filter change */}
      <div className="catalog-grid" key={animationKey}>
        {filteredProducts.map(product => (
          <div 
            className="catalog-card" 
            key={product.key}
            onClick={() => router.push(`/productos/${product.key}`)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={getCloudinaryDirectUrl(getProductMainImage(product.key))} 
              alt={product.name[language]} 
              className="catalog-img"
              width={400}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
    </section>
  );
};

export default FullCatalog; 