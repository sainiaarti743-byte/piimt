import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Active link highlight karne ke liye

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Helper function active class lagane ke liye
    const isActive = (path) => location.pathname === path ? "active text-primary" : "text-dark";

    return (
        <>
            {/* Main Wrapper */}
            <div className="fixed-top bg-white shadow-sm border-bottom">

                {/* --- TOPBAR (Premium Dark Feel) --- */}
                <div className="bg-dark text-white-50 py-2 d-none d-md-block" style={{ fontSize: "13px" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Contact Info */}
                            <div className="col-md-9 d-flex align-items-center gap-4">
                                <a href="tel:+917300180494" className="text-white-50 text-decoration-none hover-white transition">
                                    <i className="bi bi-telephone text-primary me-2"></i>+91 7300180494
                                </a>
                                <span>
                                    <i className="bi bi-geo-alt text-primary me-2"></i>Shiv Nagar, NH52 Gordhanpura, Palsana Sikar Raj. 332402
                                </span>
                                <span>
                                    <i className="bi bi-clock text-primary me-2"></i>Mon - Sat: 8:00 AM - 7:00 PM
                                </span>
                            </div>
                            {/* Social & Auth Profiles */}
                            <div className="col-md-3 d-flex justify-content-end align-items-center gap-3">
                                <div className="d-flex gap-2 border-end pe-3 border-secondary">
                                    <a href="#" className="text-white-50 hover-white transition"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="text-white-50 hover-white transition"><i className="bi bi-instagram"></i></a>
                                </div>
                                <div className="auth-links">
                                    <Link to="/login" className="text-white-50 text-decoration-none hover-white transition me-2" onClick={closeMenu}>
                                        <i className="bi bi-person-circle me-1"></i>Login
                                    </Link>
                                    <span className="text-secondary">/</span>
                                    <Link to="/register" className="text-white-50 text-decoration-none hover-white transition ms-2" onClick={closeMenu}>
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MAIN NAVBAR --- */}
                <nav className="navbar navbar-expand-lg navbar-light py-3">
                    <div className="container">

                        {/* Brand Logo */}
                        <Link className="navbar-brand d-flex align-items-center p-0" to="/" onClick={closeMenu}>
                            <img src="/assets/image/logo.jpg" alt="Logo" style={{ height: "50px", objectFit: "contain" }} />
                        </Link>

                        {/* Mobile Action Buttons (Search & Toggle) */}
                        <div className="d-flex align-items-center gap-2 d-lg-none">
                            <Link to="/login" className="btn btn-sm btn-outline-secondary px-2 py-1 me-1">
                                <i className="bi bi-person fs-5"></i>
                            </Link>
                            <button
                                className="navbar-toggler border-0 p-2 shadow-none"
                                type="button"
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen}
                            >
                                <span className={isMenuOpen ? "bi bi-x-lg fs-4" : "navbar-toggler-icon"}></span>
                            </button>
                        </div>

                        {/* Menus List */}
                        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`} id="navbarNav">
                            <ul className="navbar-nav align-items-lg-center gap-1 gap-lg-3 mt-3 mt-lg-0 fw-medium">

                                <li className="nav-item">
                                    <Link className={`nav-link px-2 ${isActive("/")}`} to="/" onClick={closeMenu}>Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link px-2 ${isActive("/about")}`} to="/about" onClick={closeMenu}>About Us</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link px-2 ${isActive("/training")}`} to="/training" onClick={closeMenu}>Training</Link>
                                </li>

                                {/* Courses Dropdown */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-2 text-dark" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Courses
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg p-3 rounded-3" aria-labelledby="coursesDropdown" style={{ minWidth: "260px" }}>
                                        <li><Link className="dropdown-item rounded-2 py-2 fw-semibold text-primary" to="/allcourses" onClick={closeMenu}>🚀 All Courses</Link></li>
                                        <li><hr className="dropdown-divider" /></li>


                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/web-development" onClick={closeMenu}>Web Design & Development</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/digital-marketing" onClick={closeMenu}>Digital Marketing & SEO</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/hardware-network" onClick={closeMenu}>Hardware & Networking</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/graphic-desiging" onClick={closeMenu}>Graphic Designing</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/internship-it" onClick={closeMenu}>IT Internship Pro.</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/mobile-app-development" onClick={closeMenu}>Mobile App Development</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/php-backend-development" onClick={closeMenu}>PHP & Backend Web Development</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/asp-net-development" onClick={closeMenu}>ASP.NET Development</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/aws-cloud-computing" onClick={closeMenu}>AWS Cloud Computing</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/artificial-intelligence" onClick={closeMenu}>Artificial Intelligence</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/accounting-erp" onClick={closeMenu}>Accounting, ERP & Tally GST</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2 small" to="/data-science-ai" onClick={closeMenu}>Data Science & Analytics</Link></li>


                                    </ul>
                                </li>

                                {/* Franchise Dropdown */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-2 text-dark" href="#" id="franchiseDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Franchise
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg p-2 rounded-3" aria-labelledby="franchiseDropdown">
                                        <li><Link className="dropdown-item rounded-2 py-2" to="/franchise" onClick={closeMenu}>Opportunity</Link></li>
                                        <li><Link className="dropdown-item rounded-2 py-2" to="/franchisedetail" onClick={closeMenu}>Franchise Details</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className={`nav-link px-2 ${isActive("/contact")}`} to="/contact" onClick={closeMenu}>Contact Us</Link>
                                </li>

                                {/* --- Clean Desktop Search Dropdown --- */}
                                <li className="nav-item dropdown d-none d-lg-block">
                                    <div className="p-2 text-secondary" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: "pointer" }}>
                                        <i className="bi bi-search fs-5 hover-primary transition"></i>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-end p-3 shadow-lg border-0 rounded-3" style={{ width: "300px" }}>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light border-0"><i className="bi bi-search text-muted"></i></span>
                                            <input type="text" className="form-construct form-control bg-light border-0" placeholder="Search courses..." />
                                        </div>
                                    </div>
                                </li>

                                {/* CTA Action Button */}
                                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                                    <Link to="/admission" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-sm w-100 text-nowrap" onClick={closeMenu}>
                                        Admission Open
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Smart Spacer (Adjusted height for the new premium design) */}
            <div style={{ paddingTop: "125px" }} className="d-none d-md-block"></div>
            <div style={{ paddingTop: "80px" }} className="d-block d-md-none"></div>
        </>
    );
};

export default Header;