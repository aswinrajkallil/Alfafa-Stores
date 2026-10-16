import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { mobileNavOpen, toggleMobileNav, closeMobileNav } = useApp();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const isHomeActive = location.pathname === '/' || location.pathname === '/index.html';
  const isAboutActive = location.pathname.startsWith('/about-us');
  const isProductsActive = location.pathname.startsWith('/products');
  const isServicesActive = location.pathname.startsWith('/services');
  const isContactActive = location.pathname.startsWith('/contact');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is functionally neutralized in static site
  };

  return (
    <section className="menu">
      <div className="title clear">
        <div className="bars" onClick={toggleMobileNav}>
          <i className="fas fa-bars"></i>
        </div>
        <nav style={mobileNavOpen ? { width: '280px' } : undefined}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={isHomeActive ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={isAboutActive ? 'active' : ''}
                onClick={closeMobileNav}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={isProductsActive ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Products
              </NavLink>
              <ul>
                <li>
                  <NavLink to="/products/vegetables" onClick={closeMobileNav}>
                    Vegetables
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/fruits" onClick={closeMobileNav}>
                    Fruits
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/services"
                className={isServicesActive ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={isContactActive ? 'active' : ''}
                onClick={closeMobileNav}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <form className="search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            required
            name="q"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
