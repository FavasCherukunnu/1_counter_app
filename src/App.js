import React, { useState, useEffect } from "react";
import axios from "axios";
import { FavoritesProvider } from "./FavoritesContext";
import Gallery from "./Gallery";
import FavoritesModal from "./FavoritesModal";
import Navbar from "./Navbar";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("https://rest-backend-prosevo-1.onrender.com/images")
      .then(response => {
        setImages(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setError("Failed to load images.");
        setIsLoading(false);
      });
  }, []);

  return (
    <FavoritesProvider>
      <Navbar openFavorites={() => setIsModalOpen(true)} />
      {isLoading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <Gallery images={images} />
      )}
      {isModalOpen && 
        <FavoritesModal closeModal={() => setIsModalOpen(false)} />
      }
    </FavoritesProvider>
  );
}

export default App;
