import React, { useEffect, useState } from 'react';
import { fetchProducts, deleteProduct } from '../api/api';
import { Table, Button, Pagination, Spinner, Alert } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null); // Track which product is being deleted
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || '1', 10);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const itemsPerPage = 10;



  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const { data } = await fetchProducts(currentPage, itemsPerPage);
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentPage]);

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
      setAlertType('danger');
      setDeleting(null);
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setSearchParams({ page }); // Update the URL with the new page number
  };

  const handleView = (id) => {
    navigate(`/products/${id}`); // Navigate to product details page with the product id
  };

  return (
    <div className="product-list-container">
      {/* Alert Message */}
      {alertMessage && (
        <Alert variant={alertType} onClose={() => setAlertMessage('')} dismissible>
          {alertMessage}
        </Alert>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading products...</p>
        </div>
      ) : (
        <>
          {/* Product Table */}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td>
                    <img src={product.thumbnail_image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td>{product.title}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleView(product._id)}>View</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(product._id)} disabled={deleting === product._id}>
                      {deleting === product._id ? 'Deleting...' : 'Delete'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i}
                active={i + 1 == currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
            <Pagination.Last
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </>
      )}
    </div>
  );
};

export default ProductList;
