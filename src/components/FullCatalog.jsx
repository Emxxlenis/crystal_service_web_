'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LangContext';
import { useRouter } from 'next/navigation';
import { getProductMainImage, getCloudinaryDirectUrl } from '../utils/cloudinaryConfig';
import '../App.css';
import Image from 'next/image';

const PRODUCTS = [
  // Puertas de Ducha
  {
    key: 'puertas_ducha_medida',
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
    name: {
      es: 'Puerta Abatible',
      en: 'Hinged Door'
    },
    desc: {
      es: 'Puerta de vidrio templado con bisagras y herrajes de alta calidad. Apertura suave y segura, ideal para baños y espacios modernos. Personalizable en acabados y medidas.',
      en: 'Tempered glass door with high-quality hinges and hardware. Smooth and secure opening, ideal for bathrooms and modern spaces. Customizable in finishes and sizes.'
    },
    type: 'ducha'
  },
  // Puertas y Ventanas
  {
    key: 'ventanas_aluminio',
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
    key: 'puerta_tipo_francesa',
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
    name: {
      es: 'Puerta de Vidrio Templado',
      en: 'Tempered Glass Door'
    },
    desc: {
      es: 'Vidrio templado de alta resistencia para proyectos residenciales y comerciales. Ideal para puertas, divisiones y fachadas. Seguridad, durabilidad y acabado elegante para cualquier espacio.',
      en: 'High-resistance tempered glass for residential and commercial projects. Ideal for doors, partitions, and facades. Provides safety, durability, and an elegant finish for any space.'
    },
    type: 'puertas_ventanas'
  },
  // Barandas de Acero Inoxidable y Vidrio
  {
    key: 'barandas_acero_inoxidable',
    name: {
      es: 'Barandas de Acero Inoxidable',
      en: 'Stainless Steel Railings'
    },
    desc: {
      es: 'Barandas de acero inoxidable para interiores y exteriores. Resistentes a la corrosión, fáciles de mantener y con diseño moderno. Ideales para escaleras, balcones y terrazas en hogares y comercios.',
      en: 'Stainless steel railings for indoor and outdoor use. Corrosion-resistant, easy to maintain, and with a modern design. Ideal for stairs, balconies, and terraces in homes and businesses.'
    },
    type: 'barandas'
  },
  {
    key: 'pergola',
    name: {
      es: 'Pérgolas y Estructuras',
      en: 'Pergolas and Structures'
    },
    desc: {
      es: 'Diseño y construcción de pérgolas personalizadas en aluminio y acero inoxidable. Estructuras para terrazas, jardines y espacios exteriores con acabados premium y resistencia climática.',
      en: 'Design and construction of custom pergolas in aluminum and stainless steel. Structures for terraces, gardens and outdoor spaces with premium finishes and weather resistance.'
    },
    type: 'especial'
  },
  {
    key: 'smart_glass',
    name: {
      es: 'Smart Glass (Papel inteligente)',
      en: 'Smart Glass (Smart Film)'
    },
    desc: {
      es: 'Solución inteligente para privacidad y control de luz en oficinas, divisiones y vidrios. Permite transformar espacios con solo un toque, brindando confort, modernidad y elegancia. Instalación rápida y limpia.',
      en: 'Smart solution for privacy and light control on offices, partitions, and glass. Instantly transforms spaces with a touch, providing comfort, modern style, and elegance. Fast and clean installation.'
    },
    type: 'especial'
  },
  {
    key: 'barandas_vidrio_templado',
    name: {
      es: 'Barandas en Vidrio Templado',
      en: 'Tempered Glass Railings'
    },
    desc: {
      es: 'Exclusivas barandas en vidrio templado con diferentes calibres y tonalidades. Colores como dorado y negro. Elegancia y seguridad para hogares, comercios y oficinas, ideales para escaleras y balcones.',
      en: 'Exclusive tempered glass railings with different gauges and tones, including gold and black. Elegance and safety for homes, businesses, and offices, ideal for stairs and balconies.'
    },
    type: 'barandas'
  },
  {
    key: 'baranda_acero_vidrio',
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
    name: {
      es: 'Espejos',
      en: 'Mirrors'
    },
    desc: {
      es: 'Espejos a la medida con biselados, platinas decorativas y acabados brillantes. Tonalidades ahumado, natural y bronce. Opciones con luz LED, estilo mosaico, completos o seccionados. Ideales para baños, salas y oficinas.',
      en: 'Custom mirrors with beveled edges, decorative trims, and polished finishes. Smoked, natural, and bronze tones. Options with LED lighting, mosaic style, full or sectioned. Perfect for bathrooms, living rooms, and offices.'
    },
    type: 'especial'
  },
  {
    key: 'divisiones_oficinas',
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

/**
 * FullCatalog component displays the complete product catalog with filters.
 * @component
 * @returns {JSX.Element}
 */
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
            <Image 
              src={getCloudinaryDirectUrl(getProductMainImage(product.key))} 
              alt={product.name[language]} 
              className="catalog-img" 
              width={400} 
              height={300} 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority={filter === 'all'}
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