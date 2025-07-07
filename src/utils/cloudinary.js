// Cloudinary utility for image URLs

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'tu_cloud_name';

/**
 * Generate Cloudinary URL for product images
 * @param {string} imageName - Name of the image file
 * @param {Object} options - Transformation options
 * @returns {string} Cloudinary URL
 */
export const getCloudinaryUrl = (imageName, options = {}) => {
  const defaultOptions = {
    quality: 'auto',
    format: 'auto',
    ...options
  };

  const transformations = Object.entries(defaultOptions)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');

  const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
  const folder = 'products';
  
  return `${baseUrl}/${transformations ? transformations + '/' : ''}${folder}/${imageName}`;
};

/**
 * Product image URLs
 */
export const PRODUCT_IMAGES = {
  vidrio_templado: getCloudinaryUrl('vidrio-templado.jpg'),
  espejos: getCloudinaryUrl('espejos.jpg'),
  divisiones_bano: getCloudinaryUrl('divisiones-bano.jpg'),
  puertas_vidrio: getCloudinaryUrl('puertas-vidrio.jpg'),
  aluminio_ventanas: getCloudinaryUrl('aluminio-ventanas.jpg'),
  louvers: getCloudinaryUrl('louvers.jpg'),
  barandas_acero: getCloudinaryUrl('barandas-acero.jpg'),
  fachadas: getCloudinaryUrl('fachadas.jpg'),
  smart_glass: getCloudinaryUrl('smart-glass.jpg'),
  papel_ahumado: getCloudinaryUrl('papel-ahumado.jpg'),
  puertas_acero: getCloudinaryUrl('puertas-acero.jpg'),
  muros_cortina: getCloudinaryUrl('muros-cortina.jpg'),
  cerramientos: getCloudinaryUrl('cerramientos.jpg'),
  puertas_automatizadas: getCloudinaryUrl('puertas-automatizadas.jpg'),
  mantenimiento: getCloudinaryUrl('mantenimiento.jpg'),
  limpieza: getCloudinaryUrl('limpieza.jpg'),
  // Add more products as needed
};

/**
 * Get optimized image URL with specific dimensions
 * @param {string} imageName - Name of the image
 * @param {number} width - Width in pixels
 * @param {number} height - Height in pixels
 * @returns {string} Optimized Cloudinary URL
 */
export const getOptimizedImage = (imageName, width, height) => {
  return getCloudinaryUrl(imageName, {
    width,
    height,
    crop: 'fill',
    gravity: 'auto'
  });
}; 