import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CategoryList from "../features/categoryList/components/CategoryList";

import "./NavBar.scss";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold text-white" to="/">
                    wahn<span className="text-light">SHOP</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">TRANG CHỦ</Link>
                        </li>

                        {/* Sử dụng CategoryList */}
                        <li
                            className="nav-item dropdown"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <span className="nav-link text-white dropdown-toggle">SẢN PHẨM</span>
                            <CategoryList showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/lien-he">LIÊN HỆ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/thong-tin">VỀ CHÚNG TÔI</Link>
                        </li>
                    </ul>

                    {/* Tìm kiếm & Icons */}
                    <div className="d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Tìm kiếm sản phẩm..."
                        />
                        <a href="/thong-tin-tai-khoan" className="btn btn-outline-light me-2">
                            <i className="bi bi-person"></i>
                        </a>
                        <a href="/" className="btn btn-outline-light position-relative">
                            <i className="bi bi-cart"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                0
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
