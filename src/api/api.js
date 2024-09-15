import axios from 'axios';

const API = axios.create({
  baseURL: 'https://react-ecomm-demo-backend-prosevo.onrender.com/api',
});

// Get Categories with pagination
export const fetchCategories = (page, perPage) => API.get(`/categories?page=${page}&perPage=${perPage}`);

// Create Product
export const addProduct = (productData) => API.post('/product/add', productData);

// List All Products
export const fetchProducts = (page, perPage) => API.get(`/products?page=${page}&perPage=${perPage}`);

// Update Product
export const updateProduct = (id, updatedProduct) => API.put(`/product/${id}`, updatedProduct);

// Delete Product
export const deleteProduct = (id) => API.delete(`/product/${id}`);
