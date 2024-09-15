import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null); // Track which product is being deleted
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const { data } = await fetchProducts(1, 10);
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (!confirmed) return;

    setDeleting(id);
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
      setAlertMessage('Product deleted successfully!');
      setAlertType('success');
      setDeleting(null);
    } catch (err) {
      console.error(err);
      setAlertMessage('Error deleting product');
      setAlertType('error');
      setDeleting(null);
    }
  };

  return (
    <div>
      {alertMessage && (
        <div className={`alert alert-${alertType}`}>
          {alertMessage}
        </div>
      )}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div className="product-card" key={product._id}>
              <img src={product.thumbnail_image} alt={product.name} />
              <h3>{product.title}</h3>
              <button onClick={() => handleDelete(product._id)} disabled={deleting === product._id}>
                {deleting === product._id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
