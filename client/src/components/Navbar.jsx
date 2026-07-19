import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {

    const { cartCount } = useCart();

    return (

        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">

            <div className="container">

                <Link
                    to="/"
                    className="navbar-brand fw-bold fs-3 brand"
                >

                    ShopNest

                </Link>

                <div className="d-flex align-items-center gap-4">

                    <div className="dropdown">

                        <Link
                            to="#"
                            className="nav-link login dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >

                            <i className="bi bi-person-circle fs-5"></i>

                            <span>Account</span>

                        </Link>

                        <ul className="dropdown-menu">

                            <li>

                                <Link
                                    to="/login"
                                    className="dropdown-item"
                                >

                                    <i className="bi bi-box-arrow-in-right me-2"></i>

                                    Login

                                </Link>

                            </li>

                            <li>

                                <Link
                                    to="/register"
                                    className="dropdown-item"
                                >

                                    <i className="bi bi-person-plus me-2"></i>

                                    Register

                                </Link>

                            </li>

                        </ul>

                    </div>

                    <Link
                        to="/cart"
                        className="nav-link cart position-relative"
                    >

                        <i className="bi bi-cart3 fs-4"></i>

                        <span className="ms-2">

                            Cart

                        </span>

                        <span className="cart-count">

                            {cartCount}

                        </span>

                    </Link>

                </div>

            </div>

        </nav>

    );

};

export default Navbar;