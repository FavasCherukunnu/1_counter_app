import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
});

// Get Categories with pagination
export const fetchCategories = (page, perPage) => API.get(`/categories?page=${page}&perPage=${perPage}`);

// Create Product
export const addProduct = (productData) => API.post('/product/add', productData, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
    }
});
// List All Products
export const fetchProducts = (page, perPage) => API.get(`/products?page=${page}&perPage=${perPage}`);

// Update Product
export const updateProduct = (id, updatedProduct) => API.put(`/product/${id}`, updatedProduct);

// Delete Product
export const deleteProduct = (id) => API.delete(`/product/${id}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
    }
});

export const fetchProductById = (id) => API.get(`/product/${id}`);
// Get Product by ID
export const login = (email, password) => API.post('/login', { email, password })
  .then(response => {
    localStorage.setItem('accesstoken', response.data.token);
    return response;
  });

export const getMe = () => API.get('/me', {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
    }
});
