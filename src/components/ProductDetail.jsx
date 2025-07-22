'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { useRouter } from 'next/navigation';
import ImageCarousel from './ImageCarousel';
import { getProductImages } from '../utils/cloudinaryConfig';
import '../App.css';

// Extended product data with detailed information
const PRODUCT_DETAILS = {
  // Puertas de Ducha - Nuevos Productos
  sistema_eolo: {
    name: {
      es: 'Sistema Eolo',
      en: 'Eolo System'
    },
    desc: {
      es: 'Puerta de ducha con paño fijo y puerta corrediza. Sistema de baños tipo L o con bañera.',
      en: 'Shower door with fixed panel and sliding door. L-type bathroom system or with bathtub.'
    },
    longDesc: {
      es: 'El Sistema Eolo representa la perfecta combinación de funcionalidad y elegancia para espacios de baño modernos. Diseñado para adaptarse a diferentes configuraciones, incluye un paño fijo y una puerta corrediza que se desliza suavemente. Disponible en configuración tipo L o con bañera, este sistema ofrece máxima versatilidad para cualquier espacio de baño.',
      en: 'The Eolo System represents the perfect combination of functionality and elegance for modern bathroom spaces. Designed to adapt to different configurations, it includes a fixed panel and a sliding door that glides smoothly. Available in L-type configuration or with bathtub, this system offers maximum versatility for any bathroom space.'
    },
    features: {
      es: [
        'Paño fijo y puerta corrediza',
        'Sistema de baños tipo L o con bañera',
        'Herrajes básicos satinados y brillantes',
        'Herrajes exclusivos negro-dorado',
        'Vidrio templado de alta resistencia',
        'Instalación profesional incluida'
      ],
      en: [
        'Fixed panel and sliding door',
        'L-type bathroom system or with bathtub',
        'Basic satin and bright hardware',
        'Exclusive black-gold hardware',
        'High-resistance tempered glass',
        'Professional installation included'
      ]
    },
    applications: {
      es: [
        'Baños residenciales modernos',
        'Hoteles y spas de lujo',
        'Apartamentos y condominios',
        'Remodelaciones de baño',
        'Proyectos de diseño interior'
      ],
      en: [
        'Modern residential bathrooms',
        'Luxury hotels and spas',
        'Apartments and condominiums',
        'Bathroom renovations',
        'Interior design projects'
      ]
    },
    type: 'ducha'
  },
  modelo_cy: {
    name: {
      es: 'Modelo CY',
      en: 'CY Model'
    },
    desc: {
      es: '2 puertas corredizas, vidrio templado 6 milímetros, tirador toallero doble.',
      en: '2 sliding doors, 6mm tempered glass, double towel holder.'
    },
    longDesc: {
      es: 'El Modelo CY está diseñado para espacios de baño que requieren máxima funcionalidad y accesibilidad. Con sus dos puertas corredizas, permite un acceso completo al área de ducha. El vidrio templado de 6 milímetros garantiza durabilidad y seguridad, mientras que el tirador toallero doble integrado añade funcionalidad práctica.',
      en: 'The CY Model is designed for bathroom spaces that require maximum functionality and accessibility. With its two sliding doors, it allows complete access to the shower area. The 6mm tempered glass ensures durability and safety, while the integrated double towel holder adds practical functionality.'
    },
    features: {
      es: [
        '2 puertas corredizas',
        'Vidrio templado 6 milímetros',
        'Tirador toallero doble integrado',
        'Herrajes solo plateados',
        'Espacios desde 1.20 hasta 1.80 ancho',
        'Altura estándar'
      ],
      en: [
        '2 sliding doors',
        '6mm tempered glass',
        'Integrated double towel holder',
        'Silver hardware only',
        'Spaces from 1.20 to 1.80 width',
        'Standard height'
      ]
    },
    applications: {
      es: [
        'Baños de uso frecuente',
        'Espacios familiares',
        'Hoteles y resorts',
        'Centros deportivos',
        'Instalaciones comerciales'
      ],
      en: [
        'High-use bathrooms',
        'Family spaces',
        'Hotels and resorts',
        'Sports centers',
        'Commercial facilities'
      ]
    },
    type: 'ducha'
  },
  modelo_aqua_black: {
    name: {
      es: 'Modelo Aqua Black',
      en: 'Aqua Black Model'
    },
    desc: {
      es: 'Paño fijo y 1 puerta corrediza, vidrio templado de 6 milímetros.',
      en: 'Fixed panel and 1 sliding door, 6mm tempered glass.'
    },
    longDesc: {
      es: 'El Modelo Aqua Black combina elegancia moderna con funcionalidad práctica. Su diseño incluye un paño fijo y una puerta corrediza, perfecto para espacios de baño que requieren privacidad y estilo. El vidrio templado de 6 milímetros ofrece resistencia y claridad, mientras que el tirador en negro añade un toque de sofisticación.',
      en: 'The Aqua Black Model combines modern elegance with practical functionality. Its design includes a fixed panel and a sliding door, perfect for bathroom spaces that require privacy and style. The 6mm tempered glass offers resistance and clarity, while the black handle adds a touch of sophistication.'
    },
    features: {
      es: [
        'Paño fijo y 1 puerta corrediza',
        'Papel esmerilado opcional (valor adicional)',
        'Vidrio templado de 6 milímetros',
        'Tirador en negro elegante',
        'Diseño moderno y minimalista',
        'Fácil mantenimiento'
      ],
      en: [
        'Fixed panel and 1 sliding door',
        'Optional frosted paper (additional cost)',
        '6mm tempered glass',
        'Elegant black handle',
        'Modern and minimalist design',
        'Easy maintenance'
      ]
    },
    applications: {
      es: [
        'Baños modernos y contemporáneos',
        'Apartamentos de lujo',
        'Hoteles boutique',
        'Espacios de diseño minimalista',
        'Remodelaciones elegantes'
      ],
      en: [
        'Modern and contemporary bathrooms',
        'Luxury apartments',
        'Boutique hotels',
        'Minimalist design spaces',
        'Elegant renovations'
      ]
    },
    type: 'ducha'
  },
  puerta_abatible: {
    name: {
      es: 'Puerta Abatible',
      en: 'Hinged Door'
    },
    desc: {
      es: 'Paño fijo y puertas. Vidrio templado de 10 milímetros. Variedad en tiradores y herrajes.',
      en: 'Fixed panel and doors. 10mm tempered glass. Variety in handles and hardware.'
    },
    longDesc: {
      es: 'Nuestra Puerta Abatible ofrece la máxima personalización para espacios de baño únicos. Con vidrio templado de 10 milímetros, proporciona mayor resistencia y estabilidad. La variedad en tiradores y herrajes permite crear un diseño completamente personalizado que se adapte a cualquier estilo de decoración.',
      en: 'Our Hinged Door offers maximum customization for unique bathroom spaces. With 10mm tempered glass, it provides greater resistance and stability. The variety in handles and hardware allows creating a completely customized design that adapts to any decoration style.'
    },
    features: {
      es: [
        'Paño fijo y puertas abatibles',
        'Vidrio templado de 10 milímetros',
        'Herrajes básicos satinados y brillantes',
        'Herrajes exclusivos negro y dorado',
        'Variedad en tiradores y herrajes',
        'Configuración tipo L disponible',
        'Exclusivos modelo plegable'
      ],
      en: [
        'Fixed panel and hinged doors',
        '10mm tempered glass',
        'Basic satin and bright hardware',
        'Exclusive black and gold hardware',
        'Variety in handles and hardware',
        'L-type configuration available',
        'Exclusive folding model'
      ]
    },
    applications: {
      es: [
        'Baños de lujo y alta gama',
        'Proyectos de diseño exclusivo',
        'Hoteles de 5 estrellas',
        'Residencias de lujo',
        'Espacios de arquitectura premium'
      ],
      en: [
        'Luxury and high-end bathrooms',
        'Exclusive design projects',
        '5-star hotels',
        'Luxury residences',
        'Premium architecture spaces'
      ]
    },
    type: 'ducha'
  },
  puertas_ducha_medida: {
    name: {
      es: 'Puertas de Ducha a la Medida',
      en: 'Custom Shower Doors'
    },
    desc: {
      es: 'Corrediza, Abatible, Vidrio templado, gran variedad en herrajes para elegir y personalizar tus baños.',
      en: 'Sliding, Hinged, Tempered glass, great variety in hardware to choose and customize your bathrooms.'
    },
    longDesc: {
      es: 'Nuestro servicio de Puertas de Ducha a la Medida te permite crear el baño de tus sueños. Ofrecemos una amplia gama de opciones en tipos de puertas, vidrio templado de diferentes espesores y una extensa variedad de herrajes para que puedas personalizar completamente tu espacio de baño según tus necesidades y preferencias de diseño.',
      en: 'Our Custom Shower Doors service allows you to create the bathroom of your dreams. We offer a wide range of options in door types, tempered glass of different thicknesses and an extensive variety of hardware so you can completely customize your bathroom space according to your needs and design preferences.'
    },
    features: {
      es: [
        'Puertas corredizas y abatibles',
        'Vidrio templado de diferentes espesores',
        'Gran variedad en herrajes',
        'Personalización completa',
        'Medidas exactas a tu espacio',
        'Asesoría de diseño incluida',
        'Instalación profesional garantizada'
      ],
      en: [
        'Sliding and hinged doors',
        'Tempered glass of different thicknesses',
        'Great variety in hardware',
        'Complete customization',
        'Exact measurements for your space',
        'Design consultation included',
        'Guaranteed professional installation'
      ]
    },
    applications: {
      es: [
        'Proyectos de diseño personalizado',
        'Remodelaciones únicas',
        'Espacios arquitectónicos especiales',
        'Baños de lujo a medida',
        'Proyectos comerciales exclusivos'
      ],
      en: [
        'Custom design projects',
        'Unique renovations',
        'Special architectural spaces',
        'Custom luxury bathrooms',
        'Exclusive commercial projects'
      ]
    },
    type: 'ducha'
  },
  vidrio_templado: {
    name: {
      es: 'Vidrio Templado',
      en: 'Tempered Glass'
    },
    desc: {
      es: 'Vidrio templado de alta resistencia para proyectos residenciales y comerciales.',
      en: 'High-resistance tempered glass for residential and commercial projects.'
    },
    longDesc: {
      es: 'Nuestro vidrio templado es sometido a un proceso térmico especial que lo hace hasta 5 veces más resistente que el vidrio común. Ideal para puertas, ventanas, divisiones y fachadas donde se requiere máxima seguridad y durabilidad.',
      en: 'Our tempered glass undergoes a special thermal process that makes it up to 5 times more resistant than regular glass. Ideal for doors, windows, partitions and facades where maximum security and durability is required.'
    },
    features: {
      es: [
        'Resistencia 5 veces mayor que vidrio común',
        'Seguridad al romperse (fragmentos pequeños)',
        'Diversos espesores disponibles',
        'Aplicaciones residenciales y comerciales',
        'Cumple normas de seguridad internacionales'
      ],
      en: [
        '5 times more resistant than regular glass',
        'Safety when broken (small fragments)',
        'Various thicknesses available',
        'Residential and commercial applications',
        'Complies with international safety standards'
      ]
    },
    applications: {
      es: [
        'Puertas de entrada y interiores',
        'Ventanas y fachadas',
        'Divisiones de baño',
        'Barandas y escaleras',
        'Muebles y estanterías'
      ],
      en: [
        'Entry and interior doors',
        'Windows and facades',
        'Bathroom partitions',
        'Railings and stairs',
        'Furniture and shelves'
      ]
    },
    type: 'vidrio'
  },
  divisiones_bano: {
    name: {
      es: 'Divisiones de Baño',
      en: 'Bath Partitions'
    },
    desc: {
      es: 'Divisiones de baño en vidrio templado, elegantes y funcionales.',
      en: 'Elegant and functional tempered glass bath partitions.'
    },
    longDesc: {
      es: 'Nuestras divisiones de baño en vidrio templado combinan elegancia y funcionalidad. Fabricadas con materiales de alta calidad, ofrecen privacidad y resistencia a la humedad, perfectas para cualquier espacio de baño.',
      en: 'Our tempered glass bath partitions combine elegance and functionality. Manufactured with high-quality materials, they offer privacy and moisture resistance, perfect for any bathroom space.'
    },
    features: {
      es: [
        'Vidrio templado de alta resistencia',
        'Resistente a la humedad y corrosión',
        'Diferentes acabados disponibles',
        'Instalación profesional incluida',
        'Garantía de durabilidad'
      ],
      en: [
        'High-resistance tempered glass',
        'Moisture and corrosion resistant',
        'Various finishes available',
        'Professional installation included',
        'Durability guarantee'
      ]
    },
    applications: {
      es: [
        'Baños residenciales',
        'Hoteles y spas',
        'Gimnasios y centros deportivos',
        'Oficinas corporativas',
        'Restaurantes y comercios'
      ],
      en: [
        'Residential bathrooms',
        'Hotels and spas',
        'Gyms and sports centers',
        'Corporate offices',
        'Restaurants and businesses'
      ]
    },
    type: 'vidrio'
  },
  puertas_vidrio: {
    name: {
      es: 'Puertas de Vidrio Templado',
      en: 'Tempered Glass Doors'
    },
    desc: {
      es: 'Puertas de vidrio templado para interiores y exteriores.',
      en: 'Tempered glass doors for indoor and outdoor use.'
    },
    longDesc: {
      es: 'Fabricamos puertas de vidrio templado que combinan seguridad, elegancia y funcionalidad. Ideales para crear espacios abiertos y luminosos, manteniendo la privacidad y resistencia necesarias.',
      en: 'We manufacture tempered glass doors that combine security, elegance and functionality. Ideal for creating open and bright spaces, while maintaining the necessary privacy and resistance.'
    },
    features: {
      es: [
        'Vidrio templado de seguridad',
        'Bisagras y herrajes de calidad',
        'Diferentes tipos de apertura',
        'Acabados personalizados',
        'Instalación profesional'
      ],
      en: [
        'Safety tempered glass',
        'Quality hinges and hardware',
        'Different opening types',
        'Custom finishes',
        'Professional installation'
      ]
    },
    applications: {
      es: [
        'Entradas principales',
        'Divisiones interiores',
        'Balcones y terrazas',
        'Oficinas y comercios',
        'Espacios residenciales'
      ],
      en: [
        'Main entrances',
        'Interior partitions',
        'Balconies and terraces',
        'Offices and businesses',
        'Residential spaces'
      ]
    },
    type: 'vidrio'
  },
  ventanas_aluminio: {
    name: {
      es: 'Ventanas en Aluminio',
      en: 'Aluminum Windows'
    },
    desc: {
      es: 'Ventanas tipo Europa y francesa con variedad en diseño y precios. Vidrio crudo, termo acústico e insulado. Tonos natural, blanco, negro y maderado. Vidrios claro, reflectivo, oscuro y gris.',
      en: 'European and French-style windows with design and price variety. Raw, thermo-acoustic and insulated glass. Natural, white, black and wood tones. Clear, reflective, dark and gray glass.'
    },
    longDesc: {
      es: 'Nuestras ventanas en aluminio representan la excelencia en diseño y funcionalidad. Ofrecemos ventanas tipo Europa y francesa con una amplia variedad de opciones de diseño y precios competitivos. Disponibles con vidrio crudo, termo acústico e insulado para máxima eficiencia energética. Tonos disponibles: natural, blanco, negro y maderado. Vidrios: claro, reflectivo, oscuro y gris.',
      en: 'Our aluminum windows represent excellence in design and functionality. We offer European and French-style windows with a wide variety of design options and competitive prices. Available with raw, thermo-acoustic and insulated glass for maximum energy efficiency. Available tones: natural, white, black and wood. Glass: clear, reflective, dark and gray.'
    },
    features: {
      es: [
        'Ventanas tipo Europa y francesa',
        'Vidrio crudo, termo acústico e insulado',
        'Tonos natural, blanco, negro y maderado',
        'Vidrios claro, reflectivo, oscuro y gris',
        'Variedad en diseño y precios',
        'Instalación profesional incluida'
      ],
      en: [
        'European and French-style windows',
        'Raw, thermo-acoustic and insulated glass',
        'Natural, white, black and wood tones',
        'Clear, reflective, dark and gray glass',
        'Variety in design and prices',
        'Professional installation included'
      ]
    },
    applications: {
      es: [
        'Proyectos residenciales',
        'Edificios comerciales',
        'Hoteles y restaurantes',
        'Oficinas corporativas',
        'Remodelaciones y nuevas construcciones'
      ],
      en: [
        'Residential projects',
        'Commercial buildings',
        'Hotels and restaurants',
        'Corporate offices',
        'Renovations and new constructions'
      ]
    },
    type: 'puertas_ventanas'
  },
  puertas_aluminio: {
    name: {
      es: 'Puertas en Aluminio',
      en: 'Aluminum Doors'
    },
    desc: {
      es: 'Puertas corredizas, abatibles y anti-ruido. Puerta plegable y de varios paños corredizos. Puertas para negocios con cierra automático. Variedad en tonos de aluminio y vidrio.',
      en: 'Sliding, hinged and anti-noise doors. Folding door and multi-panel sliding doors. Business doors with automatic closer. Variety in aluminum and glass tones.'
    },
    longDesc: {
      es: 'Nuestras puertas en aluminio ofrecen soluciones versátiles para cualquier espacio. Incluimos puertas corredizas, abatibles y anti-ruido para máxima funcionalidad. También ofrecemos puertas plegables y de varios paños corredizos para espacios que requieren amplitud. Puertas especiales para negocios con cierra automático. Gran variedad en tonos de aluminio y vidrio.',
      en: 'Our aluminum doors offer versatile solutions for any space. We include sliding, hinged and anti-noise doors for maximum functionality. We also offer folding doors and multi-panel sliding doors for spaces requiring amplitude. Special doors for businesses with automatic closer. Great variety in aluminum and glass tones.'
    },
    features: {
      es: [
        'Puertas corredizas y abatibles',
        'Puertas anti-ruido especializadas',
        'Puerta plegable a la medida',
        'Puertas de varios paños corredizos',
        'Puertas para negocios con cierra automático',
        'Variedad en tonos de aluminio y vidrio'
      ],
      en: [
        'Sliding and hinged doors',
        'Specialized anti-noise doors',
        'Custom folding door',
        'Multi-panel sliding doors',
        'Business doors with automatic closer',
        'Variety in aluminum and glass tones'
      ]
    },
    applications: {
      es: [
        'Entradas principales residenciales',
        'Locales comerciales',
        'Oficinas y edificios corporativos',
        'Hoteles y restaurantes',
        'Espacios que requieren control de ruido'
      ],
      en: [
        'Residential main entrances',
        'Commercial stores',
        'Offices and corporate buildings',
        'Hotels and restaurants',
        'Spaces requiring noise control'
      ]
    },
    type: 'puertas_ventanas'
  },
  puerta_corrediza_europa: {
    name: {
      es: 'Puerta Corrediza Tipo Europa',
      en: 'European-Style Sliding Door'
    },
    desc: {
      es: 'Gran variedad en tonos de aluminio y vidrios claros y reflectivos. Vidrios insulados de alta calidad. Diseños exclusivos con garantía de confianza y durabilidad.',
      en: 'Great variety in aluminum tones and clear and reflective glass. High-quality insulated glass. Exclusive designs with guaranteed trust and durability.'
    },
    longDesc: {
      es: 'Nuestras puertas corredizas tipo Europa representan la elegancia y funcionalidad europea. Ofrecemos gran variedad en tonos de aluminio y vidrios claros y reflectivos para adaptarse a cualquier diseño. Vidrios insulados de alta calidad para máxima eficiencia energética. Diseños exclusivos con garantía de confianza y durabilidad.',
      en: 'Our European-style sliding doors represent European elegance and functionality. We offer great variety in aluminum tones and clear and reflective glass to adapt to any design. High-quality insulated glass for maximum energy efficiency. Exclusive designs with guaranteed trust and durability.'
    },
    features: {
      es: [
        'Gran variedad en tonos de aluminio',
        'Vidrios claros y reflectivos',
        'Vidrios insulados de alta calidad',
        'Diseños exclusivos',
        'Garantía de confianza y durabilidad',
        'Sistema de deslizamiento suave'
      ],
      en: [
        'Great variety in aluminum tones',
        'Clear and reflective glass',
        'High-quality insulated glass',
        'Exclusive designs',
        'Guaranteed trust and durability',
        'Smooth sliding system'
      ]
    },
    applications: {
      es: [
        'Entradas principales elegantes',
        'Conectores interior-exterior',
        'Terrazas y balcones',
        'Espacios comerciales premium',
        'Residencias de lujo'
      ],
      en: [
        'Elegant main entrances',
        'Interior-exterior connectors',
        'Terraces and balconies',
        'Premium commercial spaces',
        'Luxury residences'
      ]
    },
    type: 'puertas_ventanas'
  },
  puertas_automaticas: {
    name: {
      es: 'Puertas Automáticas',
      en: 'Automatic Doors'
    },
    desc: {
      es: 'Dale el mejor servicio a tus clientes con puertas automáticas de alta calidad. Variedad en apertura de 1 puerta o 2 puertas. Calidad y confianza garantizadas.',
      en: 'Give your customers the best service with high-quality automatic doors. Variety in opening with 1 door or 2 doors. Guaranteed quality and trust.'
    },
    longDesc: {
      es: 'Nuestras puertas automáticas están diseñadas para dar el mejor servicio a tus clientes. Fabricadas con materiales de alta calidad y tecnología avanzada. Ofrecemos variedad en apertura de 1 puerta o 2 puertas según las necesidades del espacio. Calidad y confianza garantizadas en cada instalación.',
      en: 'Our automatic doors are designed to give your customers the best service. Manufactured with high-quality materials and advanced technology. We offer variety in opening with 1 door or 2 doors according to space needs. Guaranteed quality and trust in every installation.'
    },
    features: {
      es: [
        'Puertas automáticas de alta calidad',
        'Variedad en apertura: 1 o 2 puertas',
        'Tecnología avanzada de detección',
        'Operación silenciosa y suave',
        'Calidad y confianza garantizadas',
        'Mantenimiento preventivo incluido'
      ],
      en: [
        'High-quality automatic doors',
        'Variety in opening: 1 or 2 doors',
        'Advanced detection technology',
        'Silent and smooth operation',
        'Guaranteed quality and trust',
        'Preventive maintenance included'
      ]
    },
    applications: {
      es: [
        'Centros comerciales',
        'Hoteles y restaurantes',
        'Oficinas corporativas',
        'Hospitales y clínicas',
        'Aeropuertos y estaciones'
      ],
      en: [
        'Shopping centers',
        'Hotels and restaurants',
        'Corporate offices',
        'Hospitals and clinics',
        'Airports and stations'
      ]
    },
    type: 'puertas_ventanas'
  },
  ventanas_europa_corredizas: {
    name: {
      es: 'Ventanas Tipo Europa Corredizas',
      en: 'European-Style Sliding Windows'
    },
    desc: {
      es: 'Gran variedad de colores en aluminio y vidrio con múltiples opciones de apertura. Calidad y confianza en cada instalación. Diseños modernos y funcionales.',
      en: 'Great variety of colors in aluminum and glass with multiple opening options. Quality and trust in every installation. Modern and functional designs.'
    },
    longDesc: {
      es: 'Nuestras ventanas tipo Europa corredizas ofrecen gran variedad de colores en aluminio y vidrio con múltiples opciones de apertura para adaptarse a cualquier necesidad. Calidad y confianza en cada instalación con diseños modernos y funcionales que combinan estética y funcionalidad.',
      en: 'Our European-style sliding windows offer great variety of colors in aluminum and glass with multiple opening options to adapt to any need. Quality and trust in every installation with modern and functional designs that combine aesthetics and functionality.'
    },
    features: {
      es: [
        'Gran variedad de colores en aluminio',
        'Múltiples opciones de apertura',
        'Vidrio de alta calidad',
        'Calidad y confianza garantizadas',
        'Diseños modernos y funcionales',
        'Instalación profesional'
      ],
      en: [
        'Great variety of aluminum colors',
        'Multiple opening options',
        'High-quality glass',
        'Guaranteed quality and trust',
        'Modern and functional designs',
        'Professional installation'
      ]
    },
    applications: {
      es: [
        'Viviendas residenciales',
        'Edificios de apartamentos',
        'Oficinas modernas',
        'Hoteles y resorts',
        'Proyectos de renovación'
      ],
      en: [
        'Residential homes',
        'Apartment buildings',
        'Modern offices',
        'Hotels and resorts',
        'Renovation projects'
      ]
    },
    type: 'puertas_ventanas'
  },
  puerta_tipo_francesa: {
    name: {
      es: 'Puerta Tipo Francesa',
      en: 'French-Style Door'
    },
    desc: {
      es: 'Diseños exclusivos con variedad en tonos de aluminio y vidrios claros y reflectivos. Elegancia francesa combinada con tecnología moderna y durabilidad.',
      en: 'Exclusive designs with variety in aluminum tones and clear and reflective glass. French elegance combined with modern technology and durability.'
    },
    longDesc: {
      es: 'Nuestras puertas tipo francesa representan la elegancia clásica francesa combinada con tecnología moderna. Diseños exclusivos con variedad en tonos de aluminio y vidrios claros y reflectivos. Durabilidad garantizada con acabados de alta calidad que mantienen su belleza a lo largo del tiempo.',
      en: 'Our French-style doors represent classic French elegance combined with modern technology. Exclusive designs with variety in aluminum tones and clear and reflective glass. Guaranteed durability with high-quality finishes that maintain their beauty over time.'
    },
    features: {
      es: [
        'Diseños exclusivos',
        'Variedad en tonos de aluminio',
        'Vidrios claros y reflectivos',
        'Elegancia francesa clásica',
        'Tecnología moderna',
        'Durabilidad garantizada'
      ],
      en: [
        'Exclusive designs',
        'Variety in aluminum tones',
        'Clear and reflective glass',
        'Classic French elegance',
        'Modern technology',
        'Guaranteed durability'
      ]
    },
    applications: {
      es: [
        'Entradas principales elegantes',
        'Hoteles boutique',
        'Restaurantes de lujo',
        'Residencias exclusivas',
        'Espacios de arquitectura premium'
      ],
      en: [
        'Elegant main entrances',
        'Boutique hotels',
        'Luxury restaurants',
        'Exclusive residences',
        'Premium architecture spaces'
      ]
    },
    type: 'puertas_ventanas'
  },
  puerta_vidrio_templado: {
    name: {
      es: 'Puerta de Vidrio Templado',
      en: 'Tempered Glass Door'
    },
    desc: {
      es: 'Puertas de vidrio templado de alta resistencia y durabilidad. Ideales para espacios modernos y elegantes.',
      en: 'High-resistance and durable tempered glass doors. Ideal for modern and elegant spaces.'
    },
    longDesc: {
      es: 'Nuestras puertas de vidrio templado combinan elegancia y funcionalidad para crear espacios modernos y luminosos. El vidrio templado ofrece máxima seguridad y durabilidad, siendo ideal para aplicaciones residenciales y comerciales que requieren transparencia y resistencia.',
      en: 'Our tempered glass doors combine elegance and functionality to create modern and bright spaces. Tempered glass offers maximum safety and durability, being ideal for residential and commercial applications that require transparency and resistance.'
    },
    features: {
      es: [
        'Vidrio templado de alta resistencia',
        'Múltiples opciones de acabado',
        'Instalación profesional',
        'Garantía de durabilidad',
        'Diseño personalizable',
        'Mantenimiento mínimo'
      ],
      en: [
        'High-resistance tempered glass',
        'Multiple finish options',
        'Professional installation',
        'Durability guarantee',
        'Customizable design',
        'Minimal maintenance'
      ]
    },
    applications: {
      es: [
        'Entradas principales',
        'Divisiones interiores',
        'Puertas de oficina',
        'Espacios comerciales',
        'Aplicaciones residenciales'
      ],
      en: [
        'Main entrances',
        'Interior partitions',
        'Office doors',
        'Commercial spaces',
        'Residential applications'
      ]
    },
    type: 'puertas_ventanas'
  },
  pergola: {
    name: {
      es: 'Pérgolas y Estructuras',
      en: 'Pergolas and Structures'
    },
    desc: {
      es: 'Diseño y construcción de pérgolas personalizadas en aluminio y acero inoxidable para espacios exteriores.',
      en: 'Design and construction of custom pergolas in aluminum and stainless steel for outdoor spaces.'
    },
    longDesc: {
      es: 'Nuestras pérgolas y estructuras están diseñadas para transformar espacios exteriores en áreas funcionales y elegantes. Utilizamos materiales premium como aluminio y acero inoxidable para garantizar durabilidad y resistencia climática. Cada proyecto es personalizado según las necesidades específicas del cliente y las características del espacio.',
      en: 'Our pergolas and structures are designed to transform outdoor spaces into functional and elegant areas. We use premium materials such as aluminum and stainless steel to ensure durability and weather resistance. Each project is customized according to the specific needs of the client and the characteristics of the space.'
    },
    features: {
      es: [
        'Diseño personalizado',
        'Materiales premium (aluminio y acero)',
        'Resistencia climática',
        'Instalación profesional',
        'Acabados premium',
        'Mantenimiento mínimo'
      ],
      en: [
        'Custom design',
        'Premium materials (aluminum and steel)',
        'Weather resistance',
        'Professional installation',
        'Premium finishes',
        'Minimal maintenance'
      ]
    },
    applications: {
      es: [
        'Terrazas residenciales',
        'Jardines privados',
        'Áreas de piscina',
        'Espacios comerciales',
        'Proyectos de paisajismo'
      ],
      en: [
        'Residential terraces',
        'Private gardens',
        'Pool areas',
        'Commercial spaces',
        'Landscaping projects'
      ]
    },
    type: 'especial'
  },
  smart_glass: {
    name: {
      es: 'Smart Glass (Papel inteligente)',
      en: 'Smart Glass (Smart Film)'
    },
    desc: {
      es: 'Solución inteligente para privacidad y control de luz en oficinas, divisiones y vidrios. Instalación rápida y limpia.',
      en: 'Smart solution for privacy and light control on offices, partitions, and glass. Fast and clean installation.'
    },
    longDesc: {
      es: 'Ofrecemos tecnología de papel inteligente para vidrios, ideal para oficinas, divisiones y espacios que requieren privacidad y control de luz. Solución estética, moderna y de fácil instalación.',
      en: 'We offer smart film technology for glass, ideal for offices, partitions, and spaces requiring privacy and light control. An aesthetic, modern, and easy-to-install solution.'
    },
    features: {
      es: [
        'Privacidad instantánea',
        'Control de luz',
        'Fácil de instalar',
        'Sin obras ni polvo',
        'Moderno y estético'
      ],
      en: [
        'Instant privacy',
        'Light control',
        'Easy to install',
        'No construction or dust',
        'Modern and aesthetic'
      ]
    },
    applications: {
      es: [
        'Oficinas',
        'Divisiones de vidrio',
        'Salas de reuniones',
        'Consultorios',
        'Hogar'
      ],
      en: [
        'Offices',
        'Glass partitions',
        'Meeting rooms',
        'Clinics',
        'Home'
      ]
    },
    type: 'especial'
  },
  barandas_acero: {
    name: {
      es: 'Barandas de Acero Inoxidable',
      en: 'Stainless Steel Railings'
    },
    desc: {
      es: 'Barandas de acero inoxidable para interiores y exteriores.',
      en: 'Stainless steel railings for indoor and outdoor use.'
    },
    longDesc: {
      es: 'Nuestras barandas de acero inoxidable ofrecen seguridad y elegancia en cualquier espacio. Fabricadas con materiales de alta calidad, son resistentes a la corrosión y mantienen su brillo por años.',
      en: 'Our stainless steel railings offer safety and elegance in any space. Manufactured with high-quality materials, they are corrosion resistant and maintain their shine for years.'
    },
    features: {
      es: [
        'Acero inoxidable de alta calidad',
        'Resistencia a la corrosión',
        'Diseño personalizable',
        'Instalación profesional',
        'Mantenimiento mínimo'
      ],
      en: [
        'High-quality stainless steel',
        'Corrosion resistance',
        'Customizable design',
        'Professional installation',
        'Minimal maintenance'
      ]
    },
    applications: {
      es: [
        'Escaleras residenciales',
        'Balcones y terrazas',
        'Espacios comerciales',
        'Hoteles y restaurantes',
        'Oficinas corporativas'
      ],
      en: [
        'Residential stairs',
        'Balconies and terraces',
        'Commercial spaces',
        'Hotels and restaurants',
        'Corporate offices'
      ]
    },
    type: 'acero'
  },
  limpieza_remocion_oxido: {
    name: {
      es: 'Limpieza y Remoción de Óxido',
      en: 'Cleaning and Rust Removal'
    },
    desc: {
      es: 'Limpieza profesional y remoción de óxido en estructuras metálicas y de vidrio.',
      en: 'Professional cleaning and rust removal for metal and glass structures.'
    },
    longDesc: {
      es: 'Nuestro servicio de limpieza profesional y remoción de óxido mantiene tus estructuras en perfecto estado. Utilizamos técnicas avanzadas y productos especializados para restaurar y proteger tus instalaciones.',
      en: 'Our professional cleaning and rust removal service keeps your structures in perfect condition. We use advanced techniques and specialized products to restore and protect your installations.'
    },
    features: {
      es: [
        'Limpieza profesional especializada',
        'Remoción de óxido avanzada',
        'Productos de alta calidad',
        'Equipo de seguridad completo',
        'Resultados garantizados'
      ],
      en: [
        'Specialized professional cleaning',
        'Advanced rust removal',
        'High-quality products',
        'Complete safety equipment',
        'Guaranteed results'
      ]
    },
    applications: {
      es: [
        'Estructuras de acero inoxidable',
        'Fachadas de vidrio',
        'Sistemas de aluminio',
        'Barandas y escaleras',
        'Instalaciones industriales'
      ],
      en: [
        'Stainless steel structures',
        'Glass facades',
        'Aluminum systems',
        'Railings and stairs',
        'Industrial installations'
      ]
    },
    type: 'especial'
  },
  // Barandas de Acero Inoxidable y Vidrio - Nuevos Productos
  barandas_acero_inoxidable: {
    name: {
      es: 'Barandas en Acero Inoxidable',
      en: 'Stainless Steel Railings'
    },
    desc: {
      es: 'Barandas en acero inoxidable con opciones de cabillas, cuerda, acero + vidrio y acero inoxidable puro. Soluciones versátiles para interiores y exteriores con máxima durabilidad.',
      en: 'Stainless steel railings with options for rods, rope, steel + glass and pure stainless steel. Versatile solutions for indoor and outdoor use with maximum durability.'
    },
    longDesc: {
      es: 'Nuestras barandas en acero inoxidable ofrecen la máxima durabilidad y resistencia a la corrosión. Disponibles en múltiples configuraciones: cabillas tradicionales, cuerda para un look moderno, combinación de acero + vidrio, o acero inoxidable puro. Soluciones versátiles para interiores y exteriores que mantienen su brillo por años con mínimo mantenimiento.',
      en: 'Our stainless steel railings offer maximum durability and corrosion resistance. Available in multiple configurations: traditional rods, rope for a modern look, steel + glass combination, or pure stainless steel. Versatile solutions for indoor and outdoor use that maintain their shine for years with minimal maintenance.'
    },
    features: {
      es: [
        'Opciones de cabillas tradicionales',
        'Cuerda para look moderno',
        'Combinación acero + vidrio',
        'Acero inoxidable puro',
        'Resistencia a la corrosión',
        'Mínimo mantenimiento requerido'
      ],
      en: [
        'Traditional rod options',
        'Rope for modern look',
        'Steel + glass combination',
        'Pure stainless steel',
        'Corrosion resistance',
        'Minimal maintenance required'
      ]
    },
    applications: {
      es: [
        'Escaleras residenciales',
        'Balcones y terrazas',
        'Piscinas y áreas húmedas',
        'Oficinas corporativas',
        'Espacios comerciales'
      ],
      en: [
        'Residential staircases',
        'Balconies and terraces',
        'Pools and wet areas',
        'Corporate offices',
        'Commercial spaces'
      ]
    },
    type: 'barandas'
  },
  barandas_vidrio_templado: {
    name: {
      es: 'Barandas en Vidrio Templado',
      en: 'Tempered Glass Railings'
    },
    desc: {
      es: 'Exclusivas barandas en vidrio templado con diferentes calibres y tonalidades. Colores exclusivos como dorado y negro. Elegancia para hogar, locales comerciales y oficinas.',
      en: 'Exclusive tempered glass railings with different gauges and tones. Exclusive colors like gold and black. Elegance for homes, commercial stores and offices.'
    },
    longDesc: {
      es: 'Nuestras barandas en vidrio templado representan la elegancia y sofisticación en su máxima expresión. Fabricadas con vidrio templado de diferentes calibres y tonalidades, ofrecemos colores exclusivos como dorado y negro que no encontrarás en otros lugares. Perfectas para agregar elegancia a hogares, locales comerciales y oficinas.',
      en: 'Our tempered glass railings represent elegance and sophistication at its finest. Manufactured with tempered glass of different gauges and tones, we offer exclusive colors like gold and black that you won\'t find elsewhere. Perfect for adding elegance to homes, commercial stores and offices.'
    },
    features: {
      es: [
        'Vidrio templado de alta resistencia',
        'Diferentes calibres disponibles',
        'Múltiples tonalidades',
        'Colores exclusivos dorado y negro',
        'Elegancia y sofisticación',
        'Transparencia máxima'
      ],
      en: [
        'High-resistance tempered glass',
        'Different gauges available',
        'Multiple tones',
        'Exclusive gold and black colors',
        'Elegance and sophistication',
        'Maximum transparency'
      ]
    },
    applications: {
      es: [
        'Hogares de lujo',
        'Locales comerciales exclusivos',
        'Oficinas corporativas',
        'Hoteles boutique',
        'Espacios de arquitectura premium'
      ],
      en: [
        'Luxury homes',
        'Exclusive commercial stores',
        'Corporate offices',
        'Boutique hotels',
        'Premium architecture spaces'
      ]
    },
    type: 'barandas'
  },
  baranda_acero_vidrio: {
    name: {
      es: 'Baranda Acero Inoxidable y Vidrio Templado',
      en: 'Stainless Steel and Tempered Glass Railing'
    },
    desc: {
      es: 'Solo acero inoxidable, solo vidrio templado con soportes, o combinación de ambos. Pasamanos para piscina, en pared, para baño y mucho más. Máxima versatilidad.',
      en: 'Stainless steel only, tempered glass only with supports, or combination of both. Pool handrails, wall-mounted, bathroom and much more. Maximum versatility.'
    },
    longDesc: {
      es: 'Nuestras barandas combinadas ofrecen máxima versatilidad para cualquier espacio. Disponibles en configuración solo acero inoxidable, solo vidrio templado con soportes, o la combinación perfecta de ambos materiales. Especializadas en pasamanos para piscina, instalación en pared, para baño y muchas más aplicaciones.',
      en: 'Our combined railings offer maximum versatility for any space. Available in stainless steel only configuration, tempered glass only with supports, or the perfect combination of both materials. Specialized in pool handrails, wall installation, bathroom and many more applications.'
    },
    features: {
      es: [
        'Solo acero inoxidable',
        'Solo vidrio templado con soportes',
        'Combinación de ambos materiales',
        'Pasamanos para piscina',
        'Instalación en pared',
        'Pasamanos para baño'
      ],
      en: [
        'Stainless steel only',
        'Tempered glass only with supports',
        'Combination of both materials',
        'Pool handrails',
        'Wall installation',
        'Bathroom handrails'
      ]
    },
    applications: {
      es: [
        'Piscinas residenciales y comerciales',
        'Baños accesibles',
        'Escaleras de emergencia',
        'Áreas de rehabilitación',
        'Espacios públicos'
      ],
      en: [
        'Residential and commercial pools',
        'Accessible bathrooms',
        'Emergency staircases',
        'Rehabilitation areas',
        'Public spaces'
      ]
    },
    type: 'barandas'
  },
  puertas_automatizadas: {
    name: {
      es: 'Puertas Automáticas',
      en: 'Automatic Doors'
    },
    desc: {
      es: 'Dale el mejor servicio a tus clientes con puertas automáticas de alta calidad. Variedad en apertura de 1 puerta o 2 puertas. Calidad y confianza garantizadas.',
      en: 'Give your customers the best service with high-quality automatic doors. Variety in opening with 1 door or 2 doors. Guaranteed quality and trust.'
    },
    longDesc: {
      es: 'Nuestras puertas automáticas están diseñadas para dar el mejor servicio a tus clientes. Fabricadas con materiales de alta calidad y tecnología avanzada. Ofrecemos variedad en apertura de 1 puerta o 2 puertas según las necesidades del espacio. Calidad y confianza garantizadas en cada instalación.',
      en: 'Our automatic doors are designed to give your customers the best service. Manufactured with high-quality materials and advanced technology. We offer variety in opening with 1 door or 2 doors according to space needs. Guaranteed quality and trust in every installation.'
    },
    features: {
      es: [
        'Puertas automáticas de alta calidad',
        'Variedad en apertura: 1 o 2 puertas',
        'Tecnología avanzada de detección',
        'Operación silenciosa y suave',
        'Calidad y confianza garantizadas',
        'Mantenimiento preventivo incluido'
      ],
      en: [
        'High-quality automatic doors',
        'Variety in opening: 1 or 2 doors',
        'Advanced detection technology',
        'Silent and smooth operation',
        'Guaranteed quality and trust',
        'Preventive maintenance included'
      ]
    },
    applications: {
      es: [
        'Centros comerciales',
        'Hoteles y restaurantes',
        'Oficinas corporativas',
        'Hospitales y clínicas',
        'Aeropuertos y estaciones'
      ],
      en: [
        'Shopping centers',
        'Hotels and restaurants',
        'Corporate offices',
        'Hospitals and clinics',
        'Airports and stations'
      ]
    },
    type: 'especial'
  },
  // Servicios Especializados - Nuevos Productos
  espejos: {
    name: {
      es: 'Espejos',
      en: 'Mirrors'
    },
    desc: {
      es: 'Espejos a la medida con biselados, platinas decorativas, canteado y canteado brillantes. Tonalidades ahumado, natural y bronce. Con luz LED, estilo mosaico, completo y seccionado.',
      en: 'Custom mirrors with beveled edges, decorative platinum, edge and bright edge finishes. Smoked, natural and bronze tones. With LED lighting, mosaic style, complete and sectioned.'
    },
    longDesc: {
      es: 'Nuestros espejos a la medida representan la excelencia en acabados y personalización. Ofrecemos biselados elegantes, platinas decorativas, canteado y canteado brillantes para crear efectos únicos. Disponibles en tonalidades ahumado, natural y bronce. Incluimos opciones con luz LED integrada, estilo mosaico, espejos completos y seccionados para adaptarse a cualquier diseño.',
      en: 'Our custom mirrors represent excellence in finishes and customization. We offer elegant beveled edges, decorative platinum, edge and bright edge finishes to create unique effects. Available in smoked, natural and bronze tones. We include options with integrated LED lighting, mosaic style, complete and sectioned mirrors to adapt to any design.'
    },
    features: {
      es: [
        'Espejos a la medida',
        'Biselados elegantes',
        'Platinas decorativas',
        'Canteado y canteado brillantes',
        'Tonalidades ahumado, natural y bronce',
        'Luz LED integrada opcional'
      ],
      en: [
        'Custom mirrors',
        'Elegant beveled edges',
        'Decorative platinum',
        'Edge and bright edge finishes',
        'Smoked, natural and bronze tones',
        'Optional integrated LED lighting'
      ]
    },
    applications: {
      es: [
        'Baños y vestidores',
        'Salones de belleza',
        'Hoteles y spas',
        'Decoración de interiores',
        'Gimnasios y centros deportivos'
      ],
      en: [
        'Bathrooms and dressing rooms',
        'Beauty salons',
        'Hotels and spas',
        'Interior decoration',
        'Gyms and sports centers'
      ]
    },
    type: 'especial'
  },
  divisiones_oficinas: {
    name: {
      es: 'Divisiones de Oficinas',
      en: 'Office Partitions'
    },
    desc: {
      es: 'En vidrio templado, aluminio y vidrio, a la medida con vidrios jumbos. Variedad en tonos de aluminio y vidrio, herrajes incluidos. Papel esmerilado a diseño o completo opcional.',
      en: 'Tempered glass, aluminum and glass, custom with jumbo glass. Variety in aluminum and glass tones, hardware included. Optional frosted paper with design or complete coverage.'
    },
    longDesc: {
      es: 'Nuestras divisiones de oficinas están fabricadas en vidrio templado, aluminio y vidrio, todas a la medida con vidrios jumbos para máxima transparencia. Ofrecemos gran variedad en tonos de aluminio y vidrio, con herrajes completos incluidos. Opcionalmente incluimos papel esmerilado a diseño personalizado o cobertura completa para mayor privacidad.',
      en: 'Our office partitions are manufactured in tempered glass, aluminum and glass, all custom with jumbo glass for maximum transparency. We offer great variety in aluminum and glass tones, with complete hardware included. We optionally include frosted paper with custom design or complete coverage for greater privacy.'
    },
    features: {
      es: [
        'Vidrio templado de alta resistencia',
        'Aluminio y vidrio combinados',
        'Vidrios jumbos a la medida',
        'Variedad en tonos de aluminio y vidrio',
        'Herrajes completos incluidos',
        'Papel esmerilado opcional'
      ],
      en: [
        'High-resistance tempered glass',
        'Combined aluminum and glass',
        'Custom jumbo glass',
        'Variety in aluminum and glass tones',
        'Complete hardware included',
        'Optional frosted paper'
      ]
    },
    applications: {
      es: [
        'Oficinas corporativas',
        'Espacios de coworking',
        'Salas de reuniones',
        'Áreas de recepción',
        'Zonas de trabajo colaborativo'
      ],
      en: [
        'Corporate offices',
        'Coworking spaces',
        'Meeting rooms',
        'Reception areas',
        'Collaborative work zones'
      ]
    },
    type: 'especial'
  },
  mallas_mosquiteras_plisadas: {
    name: {
      es: 'Mallas Mosquiteras Plisadas',
      en: 'Pleated Mosquito Nets'
    },
    desc: {
      es: 'Variedad en apertura con calidad y elegancia. Gran variedad en tonos de aluminio. Solución práctica y estética para control de insectos en cualquier espacio.',
      en: 'Variety in opening with quality and elegance. Great variety in aluminum tones. Practical and aesthetic solution for insect control in any space.'
    },
    longDesc: {
      es: 'Nuestras mallas mosquiteras plisadas ofrecen variedad en apertura con la máxima calidad y elegancia. Fabricadas con gran variedad en tonos de aluminio para adaptarse a cualquier decoración. Representan la solución práctica y estética perfecta para control de insectos en cualquier espacio, manteniendo la ventilación natural.',
      en: 'Our pleated mosquito nets offer variety in opening with maximum quality and elegance. Manufactured with great variety in aluminum tones to adapt to any decoration. They represent the perfect practical and aesthetic solution for insect control in any space, while maintaining natural ventilation.'
    },
    features: {
      es: [
        'Variedad en apertura',
        'Calidad y elegancia',
        'Gran variedad en tonos de aluminio',
        'Control efectivo de insectos',
        'Mantenimiento de ventilación natural',
        'Instalación fácil y rápida'
      ],
      en: [
        'Variety in opening',
        'Quality and elegance',
        'Great variety in aluminum tones',
        'Effective insect control',
        'Maintenance of natural ventilation',
        'Easy and quick installation'
      ]
    },
    applications: {
      es: [
        'Ventanas residenciales',
        'Balcones y terrazas',
        'Puertas de entrada',
        'Áreas de descanso',
        'Espacios comerciales'
      ],
      en: [
        'Residential windows',
        'Balconies and terraces',
        'Entrance doors',
        'Rest areas',
        'Commercial spaces'
      ]
    },
    type: 'especial'
  },
  disenos_aluminio: {
    name: {
      es: 'Diseños en Aluminio',
      en: 'Aluminum Designs'
    },
    desc: {
      es: 'Gran variedad de colores en aluminio para oficinas, hogar o negocio. Elegancia para tus espacios con soluciones personalizadas que combinan funcionalidad y diseño.',
      en: 'Great variety of aluminum colors for offices, home or business. Elegance for your spaces with customized solutions that combine functionality and design.'
    },
    longDesc: {
      es: 'Nuestros diseños en aluminio ofrecen gran variedad de colores para adaptarse a oficinas, hogar o negocio. Creamos elegancia para tus espacios con soluciones personalizadas que combinan perfectamente funcionalidad y diseño. Cada proyecto es único y adaptado a las necesidades específicas del cliente.',
      en: 'Our aluminum designs offer great variety of colors to adapt to offices, home or business. We create elegance for your spaces with customized solutions that perfectly combine functionality and design. Each project is unique and adapted to the specific needs of the client.'
    },
    features: {
      es: [
        'Gran variedad de colores en aluminio',
        'Soluciones para oficinas, hogar y negocio',
        'Elegancia en diseño',
        'Soluciones personalizadas',
        'Combinación de funcionalidad y diseño',
        'Adaptación a necesidades específicas'
      ],
      en: [
        'Great variety of aluminum colors',
        'Solutions for offices, home and business',
        'Design elegance',
        'Customized solutions',
        'Combination of functionality and design',
        'Adaptation to specific needs'
      ]
    },
    applications: {
      es: [
        'Oficinas corporativas',
        'Hogares residenciales',
        'Negocios comerciales',
        'Espacios de diseño',
        'Proyectos arquitectónicos'
      ],
      en: [
        'Corporate offices',
        'Residential homes',
        'Commercial businesses',
        'Design spaces',
        'Architectural projects'
      ]
    },
    type: 'especial'
  },
  sistema_louver: {
    name: {
      es: 'Sistema Louver',
      en: 'Louver System'
    },
    desc: {
      es: 'Cerramientos en sistema louver para mayor ventilación. Puertas y ventanas corredizas o abatibles con gran variedad en tonos de aluminio. Control de flujo de aire eficiente.',
      en: 'Louver system enclosures for greater ventilation. Sliding or hinged doors and windows with great variety in aluminum tones. Efficient air flow control.'
    },
    longDesc: {
      es: 'Nuestro sistema louver ofrece cerramientos especializados para mayor ventilación en cualquier espacio. Incluimos puertas y ventanas corredizas o abatibles con gran variedad en tonos de aluminio. El control de flujo de aire eficiente permite mantener la comodidad térmica mientras se optimiza la circulación del aire.',
      en: 'Our louver system offers specialized enclosures for greater ventilation in any space. We include sliding or hinged doors and windows with great variety in aluminum tones. Efficient air flow control allows maintaining thermal comfort while optimizing air circulation.'
    },
    features: {
      es: [
        'Cerramientos en sistema louver',
        'Mayor ventilación natural',
        'Puertas y ventanas corredizas',
        'Puertas y ventanas abatibles',
        'Gran variedad en tonos de aluminio',
        'Control de flujo de aire eficiente'
      ],
      en: [
        'Louver system enclosures',
        'Greater natural ventilation',
        'Sliding doors and windows',
        'Hinged doors and windows',
        'Great variety in aluminum tones',
        'Efficient air flow control'
      ]
    },
    applications: {
      es: [
        'Fachadas comerciales',
        'Sistemas de ventilación',
        'Áreas industriales',
        'Espacios que requieren ventilación',
        'Proyectos arquitectónicos'
      ],
      en: [
        'Commercial facades',
        'Ventilation systems',
        'Industrial areas',
        'Spaces requiring ventilation',
        'Architectural projects'
      ]
    },
    type: 'especial'
  },
};

// ProductDetail component displays detailed information for a single product, including images, features, and applications.
// It uses the productSlug prop to fetch the correct product data and renders a carousel, descriptions, and a WhatsApp contact button.
// All text is internationalized using the useLanguage context.

const ProductDetail = ({ productSlug }) => {
  const { language, t } = useLanguage();
  const router = useRouter();
  
  // Retrieve product details by slug
  const product = PRODUCT_DETAILS[productSlug];
  
  if (!product) {
    // Render a not found message if the product does not exist
    return (
      <section className="section">
        <div className="container">
          <h1>{t('product.notFound')}</h1>
          <button 
            onClick={() => router.back()} 
            className="btn btn-primary"
          >
            {t('common.back')}
          </button>
        </div>
      </section>
    );
  }

  // Open WhatsApp with a pre-filled message for product inquiry
  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en cotizar: ${product.name[language]}`;
    const whatsappUrl = `https://wa.me/50764562658?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section product-detail-section">
      <div className="product-detail-container">
        {/* Navigation header with back button */}
        <div className="product-header">
          <button 
            onClick={() => router.back()} 
            className="back-btn"
          >
            ← {t('common.back')}
          </button>
        </div>
        
        {/* Main content: product image carousel and info */}
        <div className="product-main-content">
          {/* Product image carousel */}
          <div className="product-image-container">
            <ImageCarousel 
              images={getProductImages(productSlug)} 
              productName={product.name[language]} 
            />
          </div>
          
          {/* Product information */}
          <div className="product-info-container">
            <h1 className="product-detail-title">{product.name[language]}</h1>
            <p className="product-detail-desc">{product.longDesc[language]}</p>
          </div>
        </div>
        
        {/* Features and applications sections */}
        <div className="product-sections">
          <div className="product-features">
            <h3>{t('product.features')}</h3>
            <ul>
              {product.features[language].map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="product-applications">
            <h3>{t('product.applications')}</h3>
            <ul>
              {product.applications[language].map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* WhatsApp contact button for product quote */}
        <div className="product-whatsapp-container">
                      <button 
              onClick={handleWhatsAppClick}
              className="product-whatsapp-btn"
            >
              {t('product.quoteWhatsapp')}
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail; 