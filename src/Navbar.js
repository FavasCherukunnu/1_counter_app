import React, { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

const Navbar = ({ openFavorites }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Gallery App</span>
        <button className="btn btn-outline-danger" onClick={openFavorites}>
          ❤️ Favorites <span className="badge bg-danger">{favorites.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
