/**
 * Cloudinary configuration and utility functions for product images.
 * Provides helpers to generate image URLs and map product keys to Cloudinary public IDs.
 */
// Configuración de imágenes de Cloudinary para productos
export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// Helper to generate a Cloudinary URL with optional transformations
export const getCloudinaryUrl = (publicId, transformations = '') => {
  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
  return transformations 
    ? `${baseUrl}/${transformations}/v1/${publicId}`
    : `${baseUrl}/v1/${publicId}`;
};

/**
 * Returns the direct Cloudinary URL for a given public ID.
 * @param {string} publicId - Cloudinary public ID
 * @returns {string} Direct image URL
 */
// Helper to get a direct PNG image URL from Cloudinary
export const getCloudinaryDirectUrl = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1751920744/${publicId}.png`;

// PRODUCT_IMAGES maps product keys to their Cloudinary public IDs (can be multiple images per product)
export const PRODUCT_IMAGES = {
  // Puertas de Ducha
  puertas_ducha_medida: [
    'puerta_ducha_amedida1_upsuu1',
    'puerta_ducha_amedida2_ryrbyq'
  ],
  sistema_eolo: [
    'puerta_ducha_eolo1_ybh5zn',
    'puerta_ducha_eolo2_g5qwy5'
  ],
  modelo_cy: [
    'puerta_ducha_cy1_s71jbk',
    'puerta_ducha_cy2_fpxs0y'
  ],
  modelo_aqua_black: [
    'puerta_ducha_aqua1_jgvyhu'
  ],
  puerta_abatible: [
    'puerta_ducha_abatible1_w9cnuw',
    'puerta_ducha_abatible2_ozcyov'
  ],
  // Puertas y Ventanas
  puertas_aluminio: [
    'puerta_aluminio',
    'puerta_aluminio2_qyz9cp'
  ],
  ventanas_aluminio: [
    'ventana_aluminio1_hnbhzi'
  ],
  puerta_corrediza_europa: [
    'puerta_corrediza',
    'puerta_corrediza2',
    'puerta_corrediza3',
    'puerta_corrediza4',
    'puerta_corrediza5'
  ],
  ventanas_europa_corredizas: [
    'ventana_europa1_dvspod'
  ],
  puerta_vidrio_templado: [
    'puerta_vidrio_templado1_nci4wl',
    'puerta_vidrio_templado2_wvsauz'
  ],
  puertas_automaticas: [
    'puerta_automatizada2_kwpxri',
    'puerta_automatizada3_gqmsyk'
  ],
  puertas_automatizadas: [
    'puerta_automatizada2_kwpxri',
    'puerta_automatizada3_gqmsyk'
  ],
  puertas_plegables: [
    'puerta_plegable',
    'puerta_plegable2',
    'puerta_plegable3'
  ],
  puerta_tipo_francesa: [
    'puerta_francesa2_tffcjw',
    'puerta_francesa3_xg98rd'
  ],
  // Barandas
  barandas_acero_inoxidable: [
    'baranda_acero_inoxidable',
    'barandas_acero2_kkf7iq',
    'barandas_acero3_fgdtes'
  ],
  barandas_vidrio_templado: [
    'barandas_vidrio2_o4cufm'
  ],
  baranda_acero_vidrio: [
    'baranda_y_vidrio',
    'barandas_vidrioyacero2_bfnq9v'
  ],
  // Divisiones y Diseños
  divisiones_oficinas: [
    'division_oficinas',
    'division_oficinas2_z2xlf9',
    'division_oficinas3_uzmcj5'
  ],
  disenos_aluminio: [
    'diseños_aluminio',
    'diseño_aluminio1_wykank',
    'diseño_aluminio2_rhzxr9'
  ],
  // Mallas
  mallas_mosquiteras_plisadas: [
    'malla_mosquitera1_bfuike',
    'malla_mosquitera2_ctvix7'
  ],
  // Especiales
  espejos: [
    'especiales_espejos1_nfdyjp',
    'especiales_espejos2_eczeed'
  ],
  // Pérgolas y sistemas
  pergola: [
    'pergola',
    'pergola2'
  ],
  sistema_louver: [
    'sistema_louver2',
    'sistema_louver3',
    'sistema_louver4'
  ],
  smart_glass: [
    'smart_glass'
  ]
};

/**
 * Returns an array of image public IDs for a given product key.
 * @param {string} productKey
 * @returns {string[]} Array of Cloudinary public IDs
 */
// Returns all image public IDs for a given product key
export const getProductImages = (productKey) => {
  return PRODUCT_IMAGES[productKey] || [];
};

/**
 * Returns the main image public ID for a given product key.
 * @param {string} productKey
 * @returns {string} Cloudinary public ID
 */
// Returns the first image public ID for a given product key (for previews)
export const getProductMainImage = (productKey) => {
  const images = getProductImages(productKey);
  return images[0] || '';
}; 