# Configuración de Variables de Entorno

## Variables Requeridas

Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de entorno:

### Para Desarrollo Local

Crear un archivo `.env` en la raíz del proyecto:

```env
EMAILJS_SERVICE_ID=tu_service_id_aqui
EMAILJS_TEMPLATE_ID=tu_template_id_aqui
EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### Para Producción (Vercel)

En el dashboard de Vercel, ir a:
1. **Settings** > **Environment Variables**
2. Agregar las siguientes variables:

```env
EMAILJS_SERVICE_ID=tu_service_id_aqui
EMAILJS_TEMPLATE_ID=tu_template_id_aqui
EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## Cómo Obtener las Credenciales de EmailJS

### 1. Crear Cuenta en EmailJS
- Ir a [emailjs.com](https://emailjs.com)
- Crear una cuenta gratuita

### 2. Configurar Servicio de Email
- En el dashboard, ir a **Email Services**
- Agregar un nuevo servicio (Gmail, Outlook, etc.)
- Copiar el **Service ID**

### 3. Crear Template de Email
- Ir a **Email Templates**
- Crear un nuevo template
- Usar las siguientes variables en el template:

```html
Nombre: {{from_name}}
Teléfono: {{from_phone}}
Email: {{from_email}}
Empresa: {{from_company}}
Asunto: {{subject}}
Mensaje: {{message}}
```

- Copiar el **Template ID**

### 4. Obtener Public Key
- En **Account** > **API Keys**
- Copiar la **Public Key**

## Seguridad

- **Nunca** subir el archivo `.env` al repositorio
- Las credenciales están protegidas en el backend
- El frontend no tiene acceso directo a las credenciales
- Vercel encripta las variables de entorno automáticamente

## Verificación

Para verificar que todo funciona:

1. **Desarrollo local**: `npm start`
2. **Producción**: Desplegar en Vercel
3. **Probar formulario**: Enviar un mensaje de prueba
4. **Verificar logs**: Revisar la consola de Vercel para errores 