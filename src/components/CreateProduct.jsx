import React, { useState, useEffect } from 'react';
import { addProduct, fetchCategories } from '../api/api';
import './CreateProduct.css'; // Create a CSS file for styling
import { Alert } from 'react-bootstrap';

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        category_id: '',
        image: null
    });
    const [categories, setCategories] = useState([]); // State to hold fetched categories
    const [imagePreview, setImagePreview] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        // Fetch categories when component mounts
        const loadCategories = async () => {
            setLoading(true)
            try {
                const { data } = await fetchCategories(1, 100); // Fetch categories with pagination, assuming 100 per page
                setCategories(data.categories);
            } catch (err) {
                console.error('Error fetching categories:', err);
            }
            setLoading(false)
        };
        loadCategories();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        } else {
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.title) errors.title = 'Title is required';
        if (!formData.description) errors.description = 'Description is required';
        if (!formData.category_id) errors.category_id = 'Category is required';
        if (!formData.image) errors.image = 'Image is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        setLoading(true);

        const productData = new FormData();
        Object.keys(formData).forEach(key => productData.append(key, formData[key]));

        try {
            const response = await addProduct(productData);
            if (response.data.success) { // Check if the response indicates success
                setAlertMessage(response.data.message || 'Product created successfully!');
                setAlertType('success');
                setFormData({ name: '', title: '', description: '', category_id: '', image: null });
                setImagePreview(null);
            } else {
                // If the server didn't return success, handle it as an error
                setAlertMessage(response.data.message || 'Failed to create product');
                setAlertType('danger');
            }
        } catch (err) {
            setAlertMessage(err?.response?.data?.message || 'Error creating product');
            setAlertType('danger');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setLoading(false);
    };

    const handleReset = () => {
        const confirmed = window.confirm('Are you sure you want to reset the form?');
        if (confirmed) {
            setFormData({ name: '', title: '', description: '', category_id: '', image: null });
            setImagePreview(null);
            setFormErrors({});
        }
    };

    return (
        <>

            <Alert show={alertMessage?true:false} variant={alertType} dismissible onClose={() => setAlertMessage('')} >
                {alertMessage}
            </Alert>
            <div className="create-product-container">
                <form className="create-product-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Product Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            disabled={loading}
                        />
                        {formErrors.name && <p className="error">{formErrors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Product Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            disabled={loading}
                        />
                        {formErrors.title && <p className="error">{formErrors.title}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            placeholder="Product Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            disabled={loading}
                        />
                        {formErrors.description && <p className="error">{formErrors.description}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            id="category"
                            value={formData.category_id}
                            onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                            disabled={loading}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {formErrors.category_id && <p className="error">{formErrors.category_id}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Product Image</label>
                        <input type="file" id="image" onChange={handleImageChange} disabled={loading} />
                        {imagePreview && <img className="image-preview" src={imagePreview} alt="Preview" />}
                        {formErrors.image && <p className="error">{formErrors.image}</p>}
                    </div>


                    <div className="form-actions">
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Creating...' : 'Create Product'}
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleReset} disabled={loading}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

};

export default CreateProduct;
