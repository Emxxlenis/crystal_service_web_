'use client';

import React from 'react';
import { getCloudinaryDirectUrl } from '../utils/cloudinaryConfig';
import Image from 'next/image';

const allImages = [
  'barandas_acero1',
  'barandas_acero2',
  'barandas_acero3',
  'barandas_vidrio1',
  'barandas_vidrio2',
  'barandas_vidrioyacero1',
  'barandas_vidrioyacero2',
  'diseño_aluminio1',
  'diseño_aluminio2',
  'division_oficinas1',
  'division_oficinas2',
  'division_oficinas3',
  'especiales_espejos1',
  'especiales_espejos2',
  'malla_mosquitera1',
  'malla_mosquitera2',
  'puerta_aluminio1',
  'puerta_aluminio2',
  'puerta_automatizada1',
  'puerta_automatizada2',
  'puerta_automatizada3',
  'puerta_corrediza1',
  'puerta_corrediza2',
  'puerta_ducha_abatible1',
  'puerta_ducha_abatible2',
  'puerta_ducha_amedida1',
  'puerta_ducha_amedida2',
  'puerta_ducha_aqua1',
  'puerta_ducha_cy1',
  'puerta_ducha_cy2',
  'puerta_ducha_eolo1',
  'puerta_ducha_eolo2',
  'puerta_francesa1',
  'puerta_francesa2',
  'puerta_francesa3',
  'puerta_plegable1',
  'sistema_louve2',
  'sistema_louver1',
  'ventana_aluminio1',
  'ventana_aluminio2',
  'ventana_europa1',
];

/**
 * CloudinaryAllImagesTest component displays all Cloudinary images for diagnostics.
 * @component
 * @returns {JSX.Element}
 */
const CloudinaryAllImagesTest = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>Diagnóstico visual de todas las imágenes Cloudinary</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {allImages.map((img, idx) => {
          const url = getCloudinaryDirectUrl(img);
          return (
            <div key={img} style={{ width: 220, border: '1px solid #aaa', padding: 8, background: '#222', color: '#fff' }}>
              <div style={{ fontSize: 13, marginBottom: 6 }}>{img}.png</div>
              <Image 
                src={url} 
                alt={img} 
                width={200} 
                height={140} 
                style={{ objectFit: 'cover', background: '#111' }}
              />
              <div style={{ fontSize: 10, wordBreak: 'break-all', marginTop: 6 }}>{url}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CloudinaryAllImagesTest; 