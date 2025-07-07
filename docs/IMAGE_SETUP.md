# Configuración de Imágenes de Productos

## Opciones Recomendadas para Cliente Profesional

### 1. Cloudinary (Recomendado - Gratis)

#### Setup:
1. Crear cuenta en [cloudinary.com](https://cloudinary.com)
2. Obtener credenciales del dashboard
3. Subir imágenes a Cloudinary
4. Usar URLs automáticas

#### Ventajas:
- ✅ Gratis hasta 25GB
- ✅ Optimización automática
- ✅ URLs CDN rápidas
- ✅ Transformaciones automáticas (resize, crop, etc.)
- ✅ No ocupa espacio en repo

#### Implementación:
```jsx
// En lugar de: /products/fondo_home.jpg
// Usar: https://res.cloudinary.com/tu-cloud/image/upload/v1/products/vidrio-templado.jpg

const PRODUCT_IMAGES = {
  vidrio_templado: 'https://res.cloudinary.com/tu-cloud/image/upload/v1/products/vidrio-templado.jpg',
  espejos: 'https://res.cloudinary.com/tu-cloud/image/upload/v1/products/espejos.jpg',
  // etc...
};
```

### 2. Vercel Blob Storage

#### Setup:
1. Instalar: `npm install @vercel/blob`
2. Configurar en Vercel dashboard
3. Subir imágenes programáticamente

#### Ventajas:
- ✅ Integrado con Vercel
- ✅ Optimización automática
- ✅ URLs CDN
- ✅ Fácil de usar

### 3. Subir a Vercel sin GitHub

#### Opción A: Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Opción B: Drag & Drop
1. Ir a [vercel.com](https://vercel.com)
2. Crear nuevo proyecto
3. Arrastrar carpeta del proyecto
4. Vercel detecta automáticamente Next.js

## 📁 Estructura de Imágenes Recomendada

### Para Cloudinary:
```
products/
├── vidrio-templado.jpg
├── espejos.jpg
├── divisiones-bano.jpg
├── puertas-vidrio.jpg
├── aluminio-ventanas.jpg
├── louvers.jpg
├── barandas-acero.jpg
├── fachadas.jpg
└── smart-glass.jpg
```

### Para Vercel (public/):
```
public/
├── products/
│   ├── vidrio-templado.jpg
│   ├── espejos.jpg
│   └── ...
└── icons/
    └── Crystal_g_iso.svg
```

## 🔧 Implementación en Código

### Actualizar ProductDetail.jsx:
```jsx
const PRODUCT_DETAILS = {
  vidrio_templado: {
    // ... otros datos
    img: 'https://res.cloudinary.com/tu-cloud/image/upload/v1/products/vidrio-templado.jpg',
  },
  espejos: {
    // ... otros datos
    img: 'https://res.cloudinary.com/tu-cloud/image/upload/v1/products/espejos.jpg',
  },
  // etc...
};
```

### Actualizar FullCatalog.jsx:
```jsx
const PRODUCTS = [
  {
    key: 'aluminum_windows',
    img: 'https://res.cloudinary.com/tu-cloud/image/upload/v1/products/aluminio-ventanas.jpg',
    // ... otros datos
  },
  // etc...
];
```

## 📊 Comparación de Opciones

| Opción | Costo | Facilidad | Performance | Profesional |
|--------|-------|-----------|-------------|-------------|
| **Cloudinary** | Gratis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Vercel Blob** | Gratis | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **GitHub + Vercel** | Gratis | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **AWS S3** | Bajo | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 🎯 Recomendación Final

**Para tu cliente, recomiendo Cloudinary porque:**
1. **Profesional**: URLs CDN rápidas
2. **Gratis**: Hasta 25GB es suficiente
3. **Fácil**: Setup en 5 minutos
4. **Optimizado**: Imágenes automáticamente optimizadas
5. **Escalable**: Puede crecer con el negocio

## 📝 Pasos para Implementar

1. **Crear cuenta Cloudinary**
2. **Subir imágenes** (drag & drop)
3. **Copiar URLs** de cada imagen
4. **Actualizar código** con nuevas URLs
5. **Testear** en desarrollo
6. **Deploy** a producción

¿Quieres que te ayude a implementar alguna de estas opciones? 