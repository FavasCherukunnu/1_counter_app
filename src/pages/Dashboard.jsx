import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './Dashboard.css'; // We'll style the dashboard here
import Products from './Products';
import Categories from './Categories';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="sidebar ">
                <div className="sidebar-section">
                    <h3 className="sidebar-heading">Product</h3>
                    <ul className="sidebar-links">
                        <li>
                            <NavLink
                                to="products/create"
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : ''
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="products/list"
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : ''
                                }
                            >
                                List Product
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h3 className="sidebar-heading">Categories</h3>
                    <ul className="sidebar-links">
                        <li>
                            <NavLink
                                to="categories"
                                className={({ isActive }) =>
                                    isActive ? 'active-link' : ''
                                }
                            >
                                List Categories
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="dashboard-content">
                {/* This is where the routes will be rendered */}
                <Routes>
                    <Route path="/products/*" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
