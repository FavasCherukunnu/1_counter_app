import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CreateProduct from '../components/CreateProduct';
import ProductList from '../components/ProductList';

const Products = () => {
  return (
    <div>
      
      <Routes>
        <Route path="create" element={<CreateProduct />} />
        <Route path="list" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Products;
