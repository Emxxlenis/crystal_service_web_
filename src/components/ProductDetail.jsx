'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { useRouter } from 'next/navigation';
import '../App.css';

// Extended product data with detailed information
const PRODUCT_DETAILS = {
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
    img: '/products/fondo_home.jpg',
    type: 'vidrio'
  },
  espejos: {
    name: {
      es: 'Espejos',
      en: 'Mirrors'
    },
    desc: {
      es: 'Espejos a medida para cualquier espacio, con acabados profesionales.',
      en: 'Custom mirrors for any space, with professional finishes.'
    },
    longDesc: {
      es: 'Fabricamos espejos a medida con la más alta calidad. Ofrecemos diferentes tipos de acabados y bordes según las necesidades de tu proyecto. Perfectos para baños, vestidores, gimnasios y decoración.',
      en: 'We manufacture custom mirrors with the highest quality. We offer different types of finishes and edges according to your project needs. Perfect for bathrooms, dressing rooms, gyms and decoration.'
    },
    features: {
      es: [
        'Fabricación a medida',
        'Diferentes espesores disponibles',
        'Bordes pulidos o biselados',
        'Acabados resistentes a la humedad',
        'Instalación profesional incluida'
      ],
      en: [
        'Custom manufacturing',
        'Different thicknesses available',
        'Polished or beveled edges',
        'Moisture-resistant finishes',
        'Professional installation included'
      ]
    },
    applications: {
      es: [
        'Baños y vestidores',
        'Gimnasios y spas',
        'Decoración de interiores',
        'Salones de belleza',
        'Hoteles y restaurantes'
      ],
      en: [
        'Bathrooms and dressing rooms',
        'Gyms and spas',
        'Interior decoration',
        'Beauty salons',
        'Hotels and restaurants'
      ]
    },
    img: '/products/fondo_home.jpg',
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
    img: '/products/fondo_home.jpg',
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
    img: '/products/fondo_home.jpg',
    type: 'vidrio'
  },
  smart_glass: {
    name: {
      es: 'Smart Glass (Papel Inteligente)',
      en: 'Smart Glass (Intelligent Film)'
    },
    desc: {
      es: 'Transforma vidrios comunes en inteligentes con tecnología de privacidad.',
      en: 'Transform regular glass into smart glass with privacy technology.'
    },
    longDesc: {
      es: 'Nuestra tecnología Smart Glass permite transformar cualquier vidrio en un panel inteligente con control de privacidad. Con un simple interruptor, puedes cambiar la transparencia del vidrio, ofreciendo privacidad instantánea cuando la necesites.',
      en: 'Our Smart Glass technology allows you to transform any glass into an intelligent panel with privacy control. With a simple switch, you can change the transparency of the glass, offering instant privacy when you need it.'
    },
    features: {
      es: [
        'Control de privacidad instantáneo',
        'Tecnología de cristal líquido',
        'Bajo consumo energético',
        'Instalación en vidrios existentes',
        'Control remoto disponible'
      ],
      en: [
        'Instant privacy control',
        'Liquid crystal technology',
        'Low energy consumption',
        'Installation on existing glass',
        'Remote control available'
      ]
    },
    applications: {
      es: [
        'Oficinas ejecutivas',
        'Salas de reuniones',
        'Baños y vestidores',
        'Fachadas comerciales',
        'Espacios residenciales'
      ],
      en: [
        'Executive offices',
        'Meeting rooms',
        'Bathrooms and dressing rooms',
        'Commercial facades',
        'Residential spaces'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'vidrio'
  },
  papel_ahumado: {
    name: {
      es: 'Papel Ahumado para Fachadas',
      en: 'Smoked Film for Facades'
    },
    desc: {
      es: 'Papel ahumado para control solar y privacidad en fachadas.',
      en: 'Smoked film for solar control and privacy on facades.'
    },
    longDesc: {
      es: 'Nuestro papel ahumado para fachadas ofrece control solar efectivo y privacidad, reduciendo significativamente el calor y los rayos UV. Ideal para edificios comerciales y residenciales que buscan eficiencia energética.',
      en: 'Our smoked film for facades offers effective solar control and privacy, significantly reducing heat and UV rays. Ideal for commercial and residential buildings seeking energy efficiency.'
    },
    features: {
      es: [
        'Control solar efectivo',
        'Reducción de rayos UV',
        'Privacidad garantizada',
        'Fácil instalación',
        'Durabilidad extendida'
      ],
      en: [
        'Effective solar control',
        'UV ray reduction',
        'Guaranteed privacy',
        'Easy installation',
        'Extended durability'
      ]
    },
    applications: {
      es: [
        'Fachadas comerciales',
        'Ventanas residenciales',
        'Oficinas corporativas',
        'Hoteles y restaurantes',
        'Vehículos comerciales'
      ],
      en: [
        'Commercial facades',
        'Residential windows',
        'Corporate offices',
        'Hotels and restaurants',
        'Commercial vehicles'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'vidrio'
  },
  ventanas_aluminio: {
    name: {
      es: 'Ventanas de Aluminio',
      en: 'Aluminum Windows'
    },
    desc: {
      es: 'Ventanas de aluminio modernas y resistentes para todo tipo de proyectos.',
      en: 'Modern and durable aluminum windows for all types of projects.'
    },
    longDesc: {
      es: 'Nuestras ventanas de aluminio combinan elegancia, durabilidad y eficiencia energética. Fabricadas con perfiles de alta calidad y sistemas de cierre herméticos que garantizan aislamiento térmico y acústico.',
      en: 'Our aluminum windows combine elegance, durability and energy efficiency. Manufactured with high-quality profiles and hermetic closing systems that guarantee thermal and acoustic insulation.'
    },
    features: {
      es: [
        'Perfiles de aluminio de alta calidad',
        'Sistemas de cierre herméticos',
        'Aislamiento térmico y acústico',
        'Diversos colores y acabados',
        'Resistencia a la corrosión'
      ],
      en: [
        'High-quality aluminum profiles',
        'Hermetic closing systems',
        'Thermal and acoustic insulation',
        'Various colors and finishes',
        'Corrosion resistance'
      ]
    },
    applications: {
      es: [
        'Viviendas residenciales',
        'Edificios comerciales',
        'Oficinas corporativas',
        'Hoteles y restaurantes',
        'Instituciones educativas'
      ],
      en: [
        'Residential housing',
        'Commercial buildings',
        'Corporate offices',
        'Hotels and restaurants',
        'Educational institutions'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'aluminio'
  },
  puertas_aluminio: {
    name: {
      es: 'Puertas en Aluminio',
      en: 'Aluminum Doors'
    },
    desc: {
      es: 'Puertas de aluminio para interiores y exteriores, funcionales y seguras.',
      en: 'Aluminum doors for indoor and outdoor use, functional and secure.'
    },
    longDesc: {
      es: 'Nuestras puertas de aluminio están diseñadas para ofrecer máxima durabilidad y funcionalidad. Fabricadas con perfiles de alta calidad y sistemas de cierre seguros, son ideales para cualquier tipo de proyecto.',
      en: 'Our aluminum doors are designed to offer maximum durability and functionality. Manufactured with high-quality profiles and secure closing systems, they are ideal for any type of project.'
    },
    features: {
      es: [
        'Perfiles de aluminio de alta calidad',
        'Sistemas de cierre seguros',
        'Resistencia a la corrosión',
        'Diversos colores y acabados',
        'Instalación profesional'
      ],
      en: [
        'High-quality aluminum profiles',
        'Secure closing systems',
        'Corrosion resistance',
        'Various colors and finishes',
        'Professional installation'
      ]
    },
    applications: {
      es: [
        'Entradas principales',
        'Puertas de garaje',
        'Puertas comerciales',
        'Puertas de seguridad',
        'Puertas automáticas'
      ],
      en: [
        'Main entrances',
        'Garage doors',
        'Commercial doors',
        'Security doors',
        'Automatic doors'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'aluminio'
  },
  louver: {
    name: {
      es: 'Sistema Louver',
      en: 'Louver System'
    },
    desc: {
      es: 'Sistema de lamas de aluminio para ventilación y diseño.',
      en: 'Aluminum louver system for ventilation and design.'
    },
    longDesc: {
      es: 'Nuestro sistema Louver de aluminio combina funcionalidad y diseño. Permite una ventilación controlada mientras mantiene la estética moderna, ideal para fachadas y espacios que requieren flujo de aire.',
      en: 'Our aluminum Louver system combines functionality and design. It allows controlled ventilation while maintaining modern aesthetics, ideal for facades and spaces that require air flow.'
    },
    features: {
      es: [
        'Lamas de aluminio de alta calidad',
        'Ventilación controlada',
        'Diseño moderno y elegante',
        'Fácil mantenimiento',
        'Instalación personalizada'
      ],
      en: [
        'High-quality aluminum blades',
        'Controlled ventilation',
        'Modern and elegant design',
        'Easy maintenance',
        'Custom installation'
      ]
    },
    applications: {
      es: [
        'Fachadas comerciales',
        'Sistemas de ventilación',
        'Protección solar',
        'Espacios industriales',
        'Edificios residenciales'
      ],
      en: [
        'Commercial facades',
        'Ventilation systems',
        'Solar protection',
        'Industrial spaces',
        'Residential buildings'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'aluminio'
  },
  ventanas_europa: {
    name: {
      es: 'Ventanas tipo Europa',
      en: 'European-Style Windows'
    },
    desc: {
      es: 'Ventanas de aluminio tipo Europa, elegantes y eficientes.',
      en: 'Elegant and efficient European-style aluminum windows.'
    },
    longDesc: {
      es: 'Nuestras ventanas tipo Europa combinan el diseño clásico europeo con la tecnología moderna. Ofrecen excelente aislamiento térmico y acústico, además de una estética elegante que complementa cualquier arquitectura.',
      en: 'Our European-style windows combine classic European design with modern technology. They offer excellent thermal and acoustic insulation, plus an elegant aesthetic that complements any architecture.'
    },
    features: {
      es: [
        'Diseño europeo clásico',
        'Aislamiento térmico superior',
        'Aislamiento acústico efectivo',
        'Sistemas de cierre herméticos',
        'Diversos colores disponibles'
      ],
      en: [
        'Classic European design',
        'Superior thermal insulation',
        'Effective acoustic insulation',
        'Hermetic closing systems',
        'Various colors available'
      ]
    },
    applications: {
      es: [
        'Viviendas residenciales',
        'Edificios históricos',
        'Oficinas corporativas',
        'Hoteles boutique',
        'Restaurantes elegantes'
      ],
      en: [
        'Residential housing',
        'Historic buildings',
        'Corporate offices',
        'Boutique hotels',
        'Elegant restaurants'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'aluminio'
  },
  puertas_corredizas: {
    name: {
      es: 'Puertas Corredizas',
      en: 'Sliding Doors'
    },
    desc: {
      es: 'Puertas corredizas de aluminio y vidrio para espacios modernos.',
      en: 'Aluminum and glass sliding doors for modern spaces.'
    },
    longDesc: {
      es: 'Nuestras puertas corredizas combinan aluminio y vidrio para crear espacios abiertos y modernos. Ideales para conectar interiores con exteriores, ofrecen funcionalidad y elegancia en un solo sistema.',
      en: 'Our sliding doors combine aluminum and glass to create open and modern spaces. Ideal for connecting interiors with exteriors, they offer functionality and elegance in a single system.'
    },
    features: {
      es: [
        'Sistema de deslizamiento suave',
        'Vidrio templado de seguridad',
        'Perfiles de aluminio resistentes',
        'Fácil operación',
        'Mantenimiento mínimo'
      ],
      en: [
        'Smooth sliding system',
        'Safety tempered glass',
        'Resistant aluminum profiles',
        'Easy operation',
        'Minimal maintenance'
      ]
    },
    applications: {
      es: [
        'Balcones y terrazas',
        'Patios interiores',
        'Oficinas modernas',
        'Espacios comerciales',
        'Viviendas contemporáneas'
      ],
      en: [
        'Balconies and terraces',
        'Interior patios',
        'Modern offices',
        'Commercial spaces',
        'Contemporary housing'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'aluminio'
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
    img: '/products/fondo_home.jpg',
    type: 'acero'
  },
  estructuras_acero: {
    name: {
      es: 'Estructuras en Acero Inoxidable',
      en: 'Stainless Steel Structures'
    },
    desc: {
      es: 'Estructuras de acero inoxidable para proyectos arquitectónicos y comerciales.',
      en: 'Stainless steel structures for architectural and commercial projects.'
    },
    longDesc: {
      es: 'Fabricamos estructuras de acero inoxidable para proyectos arquitectónicos y comerciales complejos. Nuestras soluciones combinan resistencia estructural con elegancia visual, perfectas para espacios que requieren durabilidad y estética.',
      en: 'We manufacture stainless steel structures for complex architectural and commercial projects. Our solutions combine structural strength with visual elegance, perfect for spaces that require durability and aesthetics.'
    },
    features: {
      es: [
        'Acero inoxidable de grado arquitectónico',
        'Diseño estructural personalizado',
        'Resistencia a condiciones extremas',
        'Acabados de alta calidad',
        'Instalación especializada'
      ],
      en: [
        'Architectural grade stainless steel',
        'Custom structural design',
        'Resistance to extreme conditions',
        'High-quality finishes',
        'Specialized installation'
      ]
    },
    applications: {
      es: [
        'Fachadas arquitectónicas',
        'Estructuras comerciales',
        'Espacios públicos',
        'Proyectos industriales',
        'Obras de arte estructural'
      ],
      en: [
        'Architectural facades',
        'Commercial structures',
        'Public spaces',
        'Industrial projects',
        'Structural art works'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'acero'
  },
  muros_cortina: {
    name: {
      es: 'Muros Cortina',
      en: 'Curtain Walls'
    },
    desc: {
      es: 'Muros cortina de vidrio y aluminio para fachadas modernas.',
      en: 'Glass and aluminum curtain walls for modern facades.'
    },
    longDesc: {
      es: 'Nuestros muros cortina combinan vidrio y aluminio para crear fachadas modernas y eficientes. Ofrecen excelente aislamiento térmico, control solar y una estética contemporánea que define el carácter de cualquier edificio.',
      en: 'Our curtain walls combine glass and aluminum to create modern and efficient facades. They offer excellent thermal insulation, solar control and a contemporary aesthetic that defines the character of any building.'
    },
    features: {
      es: [
        'Sistema modular de alta calidad',
        'Aislamiento térmico superior',
        'Control solar efectivo',
        'Diseño personalizable',
        'Instalación profesional'
      ],
      en: [
        'High-quality modular system',
        'Superior thermal insulation',
        'Effective solar control',
        'Customizable design',
        'Professional installation'
      ]
    },
    applications: {
      es: [
        'Edificios corporativos',
        'Centros comerciales',
        'Hoteles de lujo',
        'Torres residenciales',
        'Centros de convenciones'
      ],
      en: [
        'Corporate buildings',
        'Shopping centers',
        'Luxury hotels',
        'Residential towers',
        'Convention centers'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
  },
  fachadas_modernas: {
    name: {
      es: 'Fachadas Modernas',
      en: 'Modern Facades'
    },
    desc: {
      es: 'Fachadas modernas en vidrio, aluminio y acero para proyectos comerciales y residenciales.',
      en: 'Modern facades in glass, aluminum, and steel for commercial and residential projects.'
    },
    longDesc: {
      es: 'Diseñamos y construimos fachadas modernas que combinan vidrio, aluminio y acero para crear edificios icónicos. Nuestras soluciones integran tecnología avanzada con diseño arquitectónico innovador.',
      en: 'We design and build modern facades that combine glass, aluminum and steel to create iconic buildings. Our solutions integrate advanced technology with innovative architectural design.'
    },
    features: {
      es: [
        'Diseño arquitectónico innovador',
        'Materiales de alta tecnología',
        'Eficiencia energética',
        'Sostenibilidad ambiental',
        'Mantenimiento inteligente'
      ],
      en: [
        'Innovative architectural design',
        'High-tech materials',
        'Energy efficiency',
        'Environmental sustainability',
        'Smart maintenance'
      ]
    },
    applications: {
      es: [
        'Edificios corporativos',
        'Centros comerciales',
        'Hoteles boutique',
        'Torres residenciales',
        'Centros culturales'
      ],
      en: [
        'Corporate buildings',
        'Shopping centers',
        'Boutique hotels',
        'Residential towers',
        'Cultural centers'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
  },
  fachadas_comerciales: {
    name: {
      es: 'Fachadas Comerciales',
      en: 'Commercial Facades'
    },
    desc: {
      es: 'Fachadas comerciales personalizadas para negocios y locales.',
      en: 'Custom commercial facades for businesses and stores.'
    },
    longDesc: {
      es: 'Creamos fachadas comerciales que destacan la identidad de tu negocio. Combinamos funcionalidad con diseño atractivo para crear espacios que atraen clientes y reflejan la calidad de tu marca.',
      en: 'We create commercial facades that highlight your business identity. We combine functionality with attractive design to create spaces that attract customers and reflect your brand quality.'
    },
    features: {
      es: [
        'Diseño personalizado por marca',
        'Materiales comerciales resistentes',
        'Iluminación integrada',
        'Fácil mantenimiento',
        'Instalación rápida'
      ],
      en: [
        'Custom brand design',
        'Resistant commercial materials',
        'Integrated lighting',
        'Easy maintenance',
        'Quick installation'
      ]
    },
    applications: {
      es: [
        'Tiendas y comercios',
        'Restaurantes y bares',
        'Oficinas comerciales',
        'Centros de servicios',
        'Espacios de coworking'
      ],
      en: [
        'Stores and businesses',
        'Restaurants and bars',
        'Commercial offices',
        'Service centers',
        'Coworking spaces'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
  },
  cerramientos_oficinas: {
    name: {
      es: 'Cerramientos de Oficinas',
      en: 'Office Enclosures'
    },
    desc: {
      es: 'Cerramientos de oficinas en vidrio y aluminio para espacios corporativos.',
      en: 'Glass and aluminum office enclosures for corporate spaces.'
    },
    longDesc: {
      es: 'Nuestros cerramientos de oficinas crean espacios de trabajo modernos y funcionales. Combinan transparencia con privacidad, permitiendo colaboración mientras mantienen la concentración individual.',
      en: 'Our office enclosures create modern and functional workspaces. They combine transparency with privacy, allowing collaboration while maintaining individual focus.'
    },
    features: {
      es: [
        'Vidrio templado de seguridad',
        'Perfiles de aluminio elegantes',
        'Sistemas de cierre suaves',
        'Acabados profesionales',
        'Instalación rápida'
      ],
      en: [
        'Safety tempered glass',
        'Elegant aluminum profiles',
        'Smooth closing systems',
        'Professional finishes',
        'Quick installation'
      ]
    },
    applications: {
      es: [
        'Oficinas ejecutivas',
        'Salas de reuniones',
        'Espacios de coworking',
        'Recepción y lobby',
        'Áreas de trabajo abiertas'
      ],
      en: [
        'Executive offices',
        'Meeting rooms',
        'Coworking spaces',
        'Reception and lobby',
        'Open work areas'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
  },
  puertas_automatizadas: {
    name: {
      es: 'Puertas Automatizadas',
      en: 'Automated Doors'
    },
    desc: {
      es: 'Puertas automatizadas de alto flujo, rápidas y silenciosas.',
      en: 'High-flow, fast and silent automated doors.'
    },
    longDesc: {
      es: 'Nuestras puertas automatizadas están diseñadas para espacios de alto tráfico. Ofrecen velocidad, silencio y seguridad, mejorando la experiencia de los usuarios mientras optimizan el flujo de personas.',
      en: 'Our automated doors are designed for high-traffic spaces. They offer speed, silence and security, improving user experience while optimizing people flow.'
    },
    features: {
      es: [
        'Sistema de detección avanzado',
        'Operación silenciosa',
        'Velocidad de apertura ajustable',
        'Múltiples modos de operación',
        'Mantenimiento preventivo'
      ],
      en: [
        'Advanced detection system',
        'Silent operation',
        'Adjustable opening speed',
        'Multiple operation modes',
        'Preventive maintenance'
      ]
    },
    applications: {
      es: [
        'Centros comerciales',
        'Hospitales y clínicas',
        'Aeropuertos y estaciones',
        'Hoteles y restaurantes',
        'Edificios corporativos'
      ],
      en: [
        'Shopping centers',
        'Hospitals and clinics',
        'Airports and stations',
        'Hotels and restaurants',
        'Corporate buildings'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
  },
  divisiones_oficinas: {
    name: {
      es: 'Divisiones de Oficinas',
      en: 'Office Partitions'
    },
    desc: {
      es: 'Divisiones de oficinas en vidrio y aluminio para ambientes modernos.',
      en: 'Glass and aluminum office partitions for modern environments.'
    },
    longDesc: {
      es: 'Creamos divisiones de oficinas que optimizan el espacio y mejoran la productividad. Nuestras soluciones combinan transparencia con funcionalidad, creando ambientes de trabajo modernos y colaborativos.',
      en: 'We create office partitions that optimize space and improve productivity. Our solutions combine transparency with functionality, creating modern and collaborative work environments.'
    },
    features: {
      es: [
        'Vidrio templado de alta calidad',
        'Perfiles de aluminio modernos',
        'Instalación modular',
        'Fácil reconfiguración',
        'Acabados personalizados'
      ],
      en: [
        'High-quality tempered glass',
        'Modern aluminum profiles',
        'Modular installation',
        'Easy reconfiguration',
        'Custom finishes'
      ]
    },
    applications: {
      es: [
        'Oficinas abiertas',
        'Salas de conferencias',
        'Espacios de trabajo colaborativo',
        'Áreas de recepción',
        'Zonas de descanso'
      ],
      en: [
        'Open offices',
        'Conference rooms',
        'Collaborative workspaces',
        'Reception areas',
        'Break zones'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
  },
  mantenimiento_reparacion: {
    name: {
      es: 'Mantenimiento y Reparación',
      en: 'Maintenance and Repair'
    },
    desc: {
      es: 'Servicio de mantenimiento y reparación para todos nuestros productos.',
      en: 'Maintenance and repair service for all our products.'
    },
    longDesc: {
      es: 'Ofrecemos servicios completos de mantenimiento y reparación para todos nuestros productos. Nuestro equipo técnico especializado garantiza el funcionamiento óptimo y la durabilidad de tus instalaciones.',
      en: 'We offer complete maintenance and repair services for all our products. Our specialized technical team ensures optimal operation and durability of your installations.'
    },
    features: {
      es: [
        'Mantenimiento preventivo',
        'Reparaciones de emergencia',
        'Equipo técnico especializado',
        'Garantía de servicio',
        'Respuesta rápida 24/7'
      ],
      en: [
        'Preventive maintenance',
        'Emergency repairs',
        'Specialized technical team',
        'Service guarantee',
        '24/7 quick response'
      ]
    },
    applications: {
      es: [
        'Sistemas de vidrio',
        'Estructuras de aluminio',
        'Instalaciones de acero',
        'Sistemas automatizados',
        'Fachadas y muros cortina'
      ],
      en: [
        'Glass systems',
        'Aluminum structures',
        'Steel installations',
        'Automated systems',
        'Facades and curtain walls'
      ]
    },
    img: '/products/fondo_home.jpg',
    type: 'especial'
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
    img: '/products/fondo_home.jpg',
    type: 'especial'
  }
};

const ProductDetail = ({ productSlug }) => {
  const { language, t } = useLanguage();
  const router = useRouter();
  
  const product = PRODUCT_DETAILS[productSlug];
  
  if (!product) {
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

  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en cotizar: ${product.name[language]}`;
    const whatsappUrl = `https://wa.me/50764562658?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section product-detail-section">
      <div className="product-detail-container">
        {/* Navigation header */}
        <div className="product-header">
          <button 
            onClick={() => router.back()} 
            className="back-btn"
          >
            ← {t('common.back')}
          </button>
        </div>
        
        {/* Main content */}
        <div className="product-main-content">
          {/* Product image */}
          <div className="product-image-container">
            <img 
              src={product.img} 
              alt={product.name[language]} 
              className="product-detail-image"
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
        
        {/* WhatsApp button */}
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