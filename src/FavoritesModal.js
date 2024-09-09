import React, { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

const FavoritesModal = ({ closeModal }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Favorite Images</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                {favorites.length > 0 ? favorites.map((image, index) => (
                  <div key={index} className="col-md-4 position-relative mb-4">
                    <img 
                      src={`https://rest-backend-prosevo-1.onrender.com${image.imageUrlCompressed}`} 
                      alt={`Favorite ${index + 1}`} 
                      className="img-fluid" 
                      style={{ height: "200px", objectFit: "cover", width: "100%" }}
                    />
                    <button 
                      onClick={() => toggleFavorite(image)} 
                      className="position-absolute top-0 end-0 btn btn-danger"
                      style={{ margin: "10px" }}
                    >
                      ❤️
                    </button>
                  </div>
                )) : <p>No favorites yet!</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
