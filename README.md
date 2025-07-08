# Crystal Service - Website

Sitio web corporativo para Crystal Service JJ, empresa panameña especializada en soluciones de vidrio, aluminio y acero inoxidable.

## Características

- **Diseño responsive** optimizado para todos los dispositivos
- **Sistema bilingüe** (español/inglés) con persistencia
- **Modo oscuro/claro** con transiciones suaves
- **Formulario de contacto** integrado con EmailJS
- **Catálogo de productos** con filtros dinámicos
- **Páginas legales** completas (privacidad, términos, cookies)
- **SEO optimizado** con meta tags y estructura semántica

## Tecnologías

- **Frontend**: React 19 + Next.js 14
- **Styling**: CSS3 con variables CSS y diseño responsive
- **Email**: EmailJS para formularios de contacto
- **Imágenes**: Cloudinary para optimización
- **Deployment**: Vercel Platform

## Instalación

```bash
npm install
npm run dev
```

## Estructura del Proyecto

```
crystal_service_web/
├── app/                       # Next.js App Router
│   ├── layout.js             # Layout principal
│   ├── page.js               # Página de inicio
│   └── productos/[slug]/     # Páginas de productos
├── public/                   # Assets estáticos
│   ├── icons/               # Iconos y logos
│   └── favicon.ico          # Favicon
├── src/
│   ├── components/          # Componentes React
│   ├── context/             # Contextos (idioma, tema)
│   ├── translations/        # Traducciones ES/EN
│   └── utils/               # Utilidades y configuraciones
└── vercel.json              # Configuración de Vercel
```

## Scripts Disponibles

- `npm run dev` - Desarrollo local
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting del código

## Despliegue

El proyecto está configurado para despliegue automático en Vercel. Cada push a la rama principal desencadena un nuevo despliegue.

---

*Desarrollado para Crystal Service JJ - Panamá*
