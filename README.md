# Crystal Service - Website

Sitio web profesional para Crystal Service JJ, empresa especializada en soluciones de vidrio, aluminio y acero.

## 🚀 Características

- **Diseño Responsivo** - Optimizado para desktop y móvil
- **Internacionalización** - Soporte completo para español e inglés
- **Tema Claro/Oscuro** - Interfaz adaptable a preferencias del usuario
- **Formulario de Contacto Seguro** - Backend API para envío de emails
- **Páginas Legales** - Política de privacidad, términos y cookies
- **Catálogo de Productos** - Con filtros y detalles
- **SEO Optimizado** - Meta tags y estructura semántica

## 🛠️ Tecnologías

- **Frontend**: React 19, React Router, CSS3
- **Backend**: Node.js API (Vercel Functions)
- **Email**: EmailJS (backend seguro)
- **Despliegue**: Vercel
- **Internacionalización**: Sistema propio de traducciones

## 📦 Instalación Local

```bash
# Clonar el repositorio
git clone <repository-url>
cd crystal_service

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## 🌐 Despliegue en Vercel

### 1. Preparación

1. **Crear cuenta en Vercel**: [vercel.com](https://vercel.com)
2. **Conectar repositorio**: Importar desde GitHub/GitLab
3. **Configurar variables de entorno** (ver sección siguiente)

### 2. Variables de Entorno

En el dashboard de Vercel, configurar las siguientes variables:

```env
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id
EMAILJS_PUBLIC_KEY=tu_public_key
```

### 3. Configuración de EmailJS

1. **Crear cuenta en EmailJS**: [emailjs.com](https://emailjs.com)
2. **Configurar servicio de email** (Gmail, Outlook, etc.)
3. **Crear template de email** con las siguientes variables:
   - `from_name` - Nombre del remitente
   - `from_phone` - Teléfono del remitente
   - `from_email` - Email del remitente
   - `from_company` - Empresa del remitente
   - `subject` - Asunto del mensaje
   - `message` - Contenido del mensaje
   - `to_name` - Nombre del destinatario

### 4. Despliegue Automático

Vercel detectará automáticamente la configuración y desplegará:
- **Frontend**: React app en `/`
- **Backend**: API en `/api/send-email`

## 🔧 Estructura del Proyecto

```
crystal_service/
├── api/
│   └── send-email.js          # Endpoint para envío de emails
├── public/
│   ├── icons/                 # Logos e iconos
│   ├── products/              # Imágenes de productos
│   └── index.html
├── src/
│   ├── components/            # Componentes React
│   ├── context/               # Contextos (idioma, tema)
│   ├── translations/          # Archivos de traducción
│   └── App.js
├── vercel.json               # Configuración de Vercel
└── package.json
```

## 🌍 Sistema de Traducciones

El sitio soporta español e inglés con un sistema de traducciones centralizado:

- **Archivos**: `src/translations/es.json` y `src/translations/en.json`
- **Uso**: `t('navigation.home')` en componentes
- **Estructura**: Organizada por secciones (navigation, hero, contact, etc.)

## 🔒 Seguridad

- **Credenciales protegidas**: EmailJS configurado en backend
- **Validación de datos**: Frontend y backend
- **HTTPS**: Automático en Vercel
- **CORS**: Configurado para dominio específico

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 600px, 768px, 1024px
- **Touch Friendly**: Botones y enlaces optimizados
- **Performance**: Imágenes optimizadas y lazy loading

## 🎨 Temas

- **Claro**: Fondo blanco, texto oscuro
- **Oscuro**: Fondo oscuro, texto claro
- **Persistencia**: Preferencia guardada en localStorage
- **Accesibilidad**: Contraste y focus states

## 📞 Contacto

Para soporte técnico o consultas sobre el proyecto:
- **Email**: crystalservicejj@gmail.com
- **WhatsApp**: +507 6456-2658

## 📄 Licencia

Este proyecto es privado y propiedad de Crystal Service JJ.

---

**Desarrollado con ❤️ para Crystal Service JJ**
