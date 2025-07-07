# Crystal Service JJ - Website

Sitio web corporativo desarrollado para Crystal Service JJ, empresa panameña especializada en soluciones de vidrio, aluminio y acero inoxidable.

## Descripción del Proyecto

Sitio web completo con funcionalidades empresariales que incluye:
- **Diseño responsive** optimizado para todos los dispositivos
- **Sistema bilingüe** (español/inglés) para alcance internacional
- **Modo oscuro/claro** con persistencia de preferencias
- **Formulario de contacto** integrado con sistema de email
- **Catálogo de productos** con sistema de filtros
- **Páginas legales** completas (privacidad, términos, cookies)

## Stack Tecnológico

- **Frontend**: React 19 + Next.js 14
- **Styling**: CSS3 con diseño responsive
- **Backend**: Vercel Functions (serverless)
- **Email Service**: EmailJS integrado
- **Deployment**: Vercel Platform
- **Internacionalización**: Sistema custom de traducciones

## Setup del Proyecto

Para desarrollo local:
```bash
npm install
npm run dev
```

El sitio está desplegado en Vercel con EmailJS configurado para el formulario de contacto.

## Arquitectura del Proyecto

```
crystal_service_web/
├── api/
│   └── send-email.js          # API endpoint para emails
├── app/                       # Next.js app router
│   ├── layout.js
│   ├── page.js
│   └── productos/[slug]/
├── public/                    # Assets estáticos
│   ├── icons/
│   └── products/
├── src/
│   ├── components/            # Componentes React
│   ├── context/               # Contextos (idioma, tema)
│   ├── translations/          # Traducciones ES/EN
│   └── utils/                 # Utilidades
└── vercel.json               # Configuración de Vercel
```

## Sistema de Internacionalización

Implementación custom de sistema de traducciones con:
- Context API para gestión de estado
- Persistencia en localStorage
- Estructura jerárquica de claves
- Validación automática en desarrollo

```jsx
const { t } = useLanguage();
return <h1>{t('navigation.home')}</h1>;
```

## Características Destacadas

### Diseño y UX
- **Mobile-first approach** con breakpoints optimizados
- **Accesibilidad** con contraste y focus states
- **Performance** optimizada con lazy loading
- **SEO** con meta tags y estructura semántica

### Funcionalidades Técnicas
- **Formulario de contacto** con validación completa
- **Catálogo dinámico** con páginas de producto individuales
- **Sistema de temas** con transiciones suaves
- **Navegación** con rutas dinámicas

### Seguridad y Mantenimiento
- **Validación de datos** en frontend y backend
- **HTTPS** automático en producción
- **CORS** configurado apropiadamente
- **Error handling** robusto

## Documentación Técnica

- **Sistema de traducciones**: `docs/TRANSLATION_SYSTEM.md`
- **Validación de traducciones**: `npm run validate-translations`
- **Componentes**: Organizados por funcionalidad
- **Estilos**: CSS modular en `App.css`

## Información de Contacto

Para consultas técnicas o soporte:
- **Email**: crystalservicejj@gmail.com
- **WhatsApp**: +507 6456-2658

## Estado del Proyecto

✅ **Completado y en producción**
- Desarrollo: 2-3 semanas
- Cliente satisfecho con entregables
- Sitio funcionando en producción
- Documentación técnica completa

---

*Desarrollado para Crystal Service JJ - Panamá*
