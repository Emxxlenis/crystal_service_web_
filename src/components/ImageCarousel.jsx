'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getCloudinaryDirectUrl } from '../utils/cloudinaryConfig';
import '../App.css';

const AUTO_SLIDE_INTERVAL = 3000; // 3 segundos

const ImageCarousel = ({ images, productName, hideControls = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    // Auto-slide
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [images]);

  // Reiniciar temporizador si el usuario navega manualmente
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTO_SLIDE_INTERVAL);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  if (!images || images.length === 0) {
    return null;
  }

  // Usar siempre el mismo layout para una o varias imágenes
  return (
    <div className="image-carousel-container">
      <div className="carousel-main">
        {images.length > 1 && !hideControls && (
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        <div className="carousel-image-container">
          <img
            src={getCloudinaryDirectUrl(images[currentIndex])}
            alt={images.length > 1 ? `${productName} - Image ${currentIndex + 1}` : productName}
            className="product-detail-image"
            width={600}
            height={400}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        {images.length > 1 && !hideControls && (
          <button
            className="carousel-btn carousel-btn-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel; 