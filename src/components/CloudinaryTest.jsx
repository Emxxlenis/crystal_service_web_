'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';

const CloudinaryTest = () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  return (
    <div style={{ padding: '20px', border: '1px solid red', margin: '20px' }}>
      <h3>Prueba de Cloudinary</h3>
      <p>Cloud Name: {cloudName || 'NO CONFIGURADO'}</p>
      
      {/* Prueba con una imagen que sabemos que existe */}
      <div style={{ margin: '20px 0' }}>
        <h4>Prueba con imagen conocida:</h4>
        <CldImage 
          src="puerta_automatizada3" 
          alt="Prueba Cloudinary"
          width={300}
          height={200}
          style={{ border: '2px solid blue' }}
        />
      </div>
      
      {/* Prueba con URL directa */}
      <div style={{ margin: '20px 0' }}>
        <h4>URL directa de Cloudinary:</h4>
        <img 
          src={`https://res.cloudinary.com/${cloudName}/image/upload/v1751920744/puerta_automatizada3_gqmsyk.png`}
          alt="URL directa"
          width={300}
          height={200}
          style={{ border: '2px solid green' }}
        />
      </div>
      
      {/* Lista de variables de entorno */}
      <div style={{ margin: '20px 0' }}>
        <h4>Variables de entorno:</h4>
        <pre>
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
        </pre>
      </div>
    </div>
  );
};

export default CloudinaryTest; 