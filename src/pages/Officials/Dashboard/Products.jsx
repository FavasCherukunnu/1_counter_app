import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateProduct from '../../../components/CreateProduct';
import ProductList from '../../../components/ProductList';

const Products = () => {
  return (
    <div>
      
      <Routes>
        <Route path=":productId" element={<CreateProduct key={'edit'} mode='edit' />} />
        <Route path="create" element={<CreateProduct key={'add'} mode='create' />} />
        <Route path="list" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Products;