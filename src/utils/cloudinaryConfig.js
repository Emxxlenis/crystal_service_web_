// Cloudinary configuration and utilities for product images.
// Provides helpers to generate image URLs and map product keys to Cloudinary public IDs.

// Configuración de imágenes de Cloudinary para productos
export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// Helper to generate a Cloudinary URL with optional transformations
export const getCloudinaryUrl = (publicId, transformations = '') => {
  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
  return transformations 
    ? `${baseUrl}/${transformations}/v1/${publicId}`
    : `${baseUrl}/v1/${publicId}`;
};

// Helper to get a direct PNG image URL from Cloudinary
export const getCloudinaryDirectUrl = (publicId) =>
  `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/v1751920744/${publicId}.png`;

// PRODUCT_IMAGES maps product keys to their Cloudinary public IDs (can be multiple images per product)
export const PRODUCT_IMAGES = {
  puertas_automaticas: [
    'puerta_automatizada1_wl6tlz',
    'puerta_automatizada2_kwpxri',
    'puerta_automatizada3_gqmsyk'
  ],
  mallas_mosquiteras_plisadas: [
    'malla_mosquitera1_bfuike',
    'malla_mosquitera2_ctvix7'
  ],
  disenos_aluminio: [
    'diseño_aluminio1_wykank',
    'diseño_aluminio2_rhzxr9'
  ],
  puerta_corrediza_europa: [
    'puerta_corrediza1_mi7egn',
    'puerta_corrediza2_bwjeme'
  ],
  divisiones_oficinas: [
    'division_oficinas1_dvdqrf',
    'division_oficinas2_z2xlf9',
    'division_oficinas3_uzmcj5'
  ],
  ventanas_europa_corredizas: [
    'ventana_europa1_dvspod'
  ],
  puerta_abatible: [
    'puerta_ducha_abatible1_w9cnuw',
    'puerta_ducha_abatible2_ozcyov'
  ],
  sistema_louver: [
    'sistema_louver1_uwgk2c',
    'sistema_louve2_ocfde0'
  ],
  puerta_tipo_francesa: [
    'puerta_francesa1_oqlmxw',
    'puerta_francesa2_tffcjw',
    'puerta_francesa3_xg98rd'
  ],
  puertas_plegables: [
    'puerta_plegable1_heaqvq'
  ],
  baranda_acero_vidrio: [
    'barandas_vidrioyacero1_h08xfy',
    'barandas_vidrioyacero2_bfnq9v'
  ],
  barandas_vidrio_templado: [
    'barandas_vidrio1_igwlzx',
    'barandas_vidrio2_o4cufm'
  ],
  barandas_acero_inoxidable: [
    'barandas_acero1_g7nrxs',
    'barandas_acero2_kkf7iq',
    'barandas_acero3_fgdtes'
  ],
  puertas_aluminio: [
    'puerta_aluminio1_jxwje9',
    'puerta_aluminio2_qyz9cp'
  ],
  ventanas_aluminio: [
    'ventana_aluminio1_hnbhzi',
    'ventana_aluminio2_sxa4rx'
  ],
  espejos: [
    'especiales_espejos1_nfdyjp',
    'especiales_espejos2_eczeed'
  ],
  modelo_cy: [
    'puerta_ducha_cy1_s71jbk',
    'puerta_ducha_cy2_fpxs0y'
  ],
  modelo_aqua_black: [
    'puerta_ducha_aqua1_jgvyhu'
  ],
  sistema_eolo: [
    'puerta_ducha_eolo1_ybh5zn',
    'puerta_ducha_eolo2_g5qwy5'
  ],
  puertas_ducha_medida: [
    'puerta_ducha_amedida1_upsuu1',
    'puerta_ducha_amedida2_ryrbyq'
  ],
  puerta_vidrio_templado: [
    'puerta_vidrio_templado1_nci4wl',
    'puerta_vidrio_templado2_wvsauz'
  ]
};

// Returns all image public IDs for a given product key
export const getProductImages = (productKey) => {
  return PRODUCT_IMAGES[productKey] || [];
};

// Returns the first image public ID for a given product key (for previews)
export const getProductMainImage = (productKey) => {
  const images = getProductImages(productKey);
  return images[0] || '';
}; 