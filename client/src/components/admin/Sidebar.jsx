import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {

    const location = useLocation();

    const [categoryOpen, setCategoryOpen] = useState(
        location.pathname.startsWith("/admin/category")
    );

    const [productOpen, setProductOpen] = useState(
        location.pathname.startsWith("/admin/product")
    );

    return (

        <div className="sidebar">

            <div>

                <div className="sidebar-logo">

                    <i className="bi bi-bag-check-fill logo-icon"></i>

                    <h3>ShopNest</h3>

                    <p>Admin Panel</p>

                </div>

                <ul className="sidebar-menu">

                    <li>

                        <NavLink to="/admin/dashboard">

                            <i className="bi bi-speedometer2"></i>

                            <span>Dashboard</span>

                        </NavLink>

                    </li>

                    {/* Category */}

                    <li>

                        <button
                            className="menu-btn"
                            onClick={() => setCategoryOpen(!categoryOpen)}
                        >

                            <div className="menu-title">

                                <i className="bi bi-grid"></i>

                                <span>Category</span>

                            </div>

                            <i
                                className={`bi bi-chevron-down arrow ${categoryOpen ? "rotate" : ""}`}
                            ></i>

                        </button>

                        <ul className={`submenu ${categoryOpen ? "show" : ""}`}>

                            <li>

                                <NavLink to="/admin/category/add">
                                    Add Category
                                </NavLink>

                            </li>

                            <li>

                                <NavLink to="/admin/category/all">
                                    All Categories
                                </NavLink>

                            </li>

                        </ul>

                    </li>

                    {/* Product */}

                    <li>

                        <button
                            className="menu-btn"
                            onClick={() => setProductOpen(!productOpen)}
                        >

                            <div className="menu-title">

                                <i className="bi bi-box-seam"></i>

                                <span>Product</span>

                            </div>

                            <i
                                className={`bi bi-chevron-down arrow ${productOpen ? "rotate" : ""}`}
                            ></i>

                        </button>

                        <ul className={`submenu ${productOpen ? "show" : ""}`}>

                            <li>

                                <NavLink to="/admin/product/add">
                                    Add Product
                                </NavLink>

                            </li>

                            <li>

                                <NavLink to="/admin/product/all">
                                    All Products
                                </NavLink>

                            </li>

                        </ul>

                    </li>

                    <li>

                        <NavLink to="/admin/orders">

                            <i className="bi bi-cart3"></i>

                            <span>Orders</span>

                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/admin/users">

                            <i className="bi bi-people"></i>

                            <span>Users</span>

                        </NavLink>

                    </li>

                </ul>

            </div>

            <button className="logout-btn">

                <i className="bi bi-box-arrow-right"></i>

                Logout

            </button>

        </div>

    );

};

export default Sidebar;