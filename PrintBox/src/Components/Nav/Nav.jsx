import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    // Utility function to calculate and update counts from localStorage
    const updateCounts = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
        setCartCount(totalCartItems);
        setWishlistCount(wishlist.length);
    };

    useEffect(() => {
        updateCounts();

        // Event listeners for manual dispatch
        const handleCartUpdate = () => updateCounts();
        const handleWishlistUpdate = () => updateCounts();

        window.addEventListener('cartUpdated', handleCartUpdate);
        window.addEventListener('wishlistUpdated', handleWishlistUpdate);

        // Watch for storage changes across tabs
        const onStorageChange = (e) => {
            if (e.key === 'cart' || e.key === 'wishlist') {
                updateCounts();
            }
        };
        window.addEventListener('storage', onStorageChange);

        // Cleanup
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate);
            window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
            window.removeEventListener('storage', onStorageChange);
        };
    }, []);

    return (
        <div className="nav w-100 fixed-top bg-white shadow-sm">
            <nav className="navbar navbar-expand-lg py-3 justify-content-between align-items-center w-100 nav-wrapper">
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

                <Link to="/" className="navbar-brand mx-auto order-0 d-lg-none d-flex">
                    <h2 className="m-0 fw-bold" style={{ letterSpacing: '2px' }}>BLUSHIFY</h2>
                </Link>

                <ul className="d-lg-none d-flex align-items-center gap-3">
                    <li className="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i className="bi bi-search fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                            <i className="bi bi-person fs-5 text-dark"></i>
                        </a>
                    </li>
                    <li className="nav-item position-relative">
                        <Link to="/Wishlist">
                            <i className="bi bi-heart fs-5 text-dark"></i>
                            <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                                {wishlistCount}
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item position-relative">
                        <Link to="/Cart">
                            <i className="bi bi-bag fs-5 text-dark"></i>
                            <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                                {cartCount}
                            </span>
                        </Link>
                    </li>
                </ul>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav nav-menu align-items-center gap-4">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/store">Store</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>

                    <Link to="/" className="navbar-brand order-0 d-none d-lg-flex">
                        <h2 className="m-0 fw-bold" style={{ letterSpacing: '2px' }}>BLUSHIFY</h2>
                    </Link>

                    <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4">
                        <li className="nav-item">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
                                <i className="bi bi-search fs-5 text-dark"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                                <i className="bi bi-person fs-5 text-dark"></i>
                            </a>
                        </li>
                        <li className="nav-item position-relative">
                            <Link to="/Wishlist">
                                <i className="bi bi-heart fs-5 text-dark"></i>
                                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                                    {wishlistCount}
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item position-relative">
                            <Link to="/Cart">
                                <i className="bi bi-bag fs-5 text-dark"></i>
                                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                                    {cartCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
