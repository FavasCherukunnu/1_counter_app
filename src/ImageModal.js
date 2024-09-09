import React from "react";

const ImageModal = ({ imageUrl, closeModal }) => {
  return (
    <div className="modal show d-block" onClick={closeModal}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <img 
              src={imageUrl} 
              alt="Clicked" 
              className="img-fluid w-100" 
              style={{ maxHeight: "90vh", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
