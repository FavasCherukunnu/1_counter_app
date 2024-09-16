import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './Dashboard.css'; // We'll style the dashboard here
import Products from './Products';
import Categories from './Categories';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Dashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="dashboard-container">
            <nav className="sidebar " 
                style={{ left: isSidebarOpen ? '0' : '-200px' }}
            >
                <div style={{ flexGrow: 1 }}>
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
                </div>
                <div className='sidebar-toggle-button'>
                    {
                        isSidebarOpen ? <FaChevronLeft onClick={toggleSidebar} /> : <FaChevronRight onClick={toggleSidebar} />
                    }
                </div>
            </nav>

            <div className="dashboard-content">
                {/* This is where the routes will be rendered */}
                <Routes>
                    <Route index element={<Navigate to={'/products/list'} />} />
                    <Route path="/products/*" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
