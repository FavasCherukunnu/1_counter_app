// src/components/Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import './Gallery.css'

const imageData = [
  { id: 1, src: 'https://via.placeholder.com/150', caption: 'Image 1' },
  { id: 2, src: 'https://via.placeholder.com/150', caption: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/150', caption: 'Image 3' },
  { id: 4, src: 'https://via.placeholder.com/150', caption: 'Image 4' },
  { id: 5, src: 'https://via.placeholder.com/150', caption: 'Image 2' },
  { id: 6, src: 'https://via.placeholder.com/150', caption: 'Image 3' },
  { id: 7, src: 'https://via.placeholder.com/150', caption: 'Image 4' },
  { id: 8, src: 'https://via.placeholder.com/150', caption: 'Image 2' },
  { id: 9, src: 'https://via.placeholder.com/150', caption: 'Image 3' },
  { id: 10, src: 'https://via.placeholder.com/150', caption: 'Image 4' }
];

function Gallery() {
  return (
    <div className="gallery">
      {imageData.map(image => (
        <ImageCard key={image.id} src={image.src} caption={image.caption} />
      ))}
    </div>
  );
}

export default Gallery;
