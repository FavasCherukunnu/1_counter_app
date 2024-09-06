// src/components/ImageCard.js
import React from 'react';
import './ImageCard.css'; // For styling

function ImageCard({ src, caption }) {
  return (
    <div className="image-card">
      <img src={src} alt={caption} />
      <p>{caption}</p>
    </div>
  );
}

export default ImageCard;
