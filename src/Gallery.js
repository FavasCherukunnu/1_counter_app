import React, { useContext, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import ImageModal from "./ImageModal";

const Gallery = ({ images }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 position-relative mb-4">
            <img 
              src={`https://rest-backend-prosevo-1.onrender.com${image.imageUrl}`} 
              alt={`Image ${index + 1}`} 
              className="img-fluid" 
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
              onClick={() => setSelectedImage(`https://rest-backend-prosevo-1.onrender.com${image.imageUrl}`)}
            />
            <button 
              onClick={() => toggleFavorite(image)} 
              className={`position-absolute top-0 end-0 btn ${favorites.includes(image) ? "btn-danger" : "btn-light"}`}
              style={{ margin: "10px" }}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>

      {selectedImage && 
        <ImageModal 
          imageUrl={selectedImage} 
          closeModal={() => setSelectedImage(null)} 
        />}
    </div>
  );
};

export default Gallery;
