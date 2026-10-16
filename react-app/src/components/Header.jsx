import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { cart, openLoginModal } = useApp();

  return (
    <header>
      <div className="title clear">
        <div className="logotype">
          <Link to="/">
            <img alt="Alfafa" src="/assets/logo.png" />
          </Link>
        </div>
        <div className="devis">
          <span>Fresh !</span> From the Farm to your Home
        </div>

        <div className="rightblock clear">
          <div className="lang">
            <span>EN</span>
            <a href="#" onClick={(e) => e.preventDefault()}>AR</a>
          </div>
          <div className="phones">
            <span>+971 2 6344555</span>
            <span>+971 2 6344577</span>
          </div>

          <div className="par">
            <a href="#" id="cccc" onClick={(e) => { e.preventDefault(); openLoginModal(); }}>
              <i className="fas fa-lock"></i> Join
            </a>
            <span className="login" onClick={openLoginModal}>
              <i className="far fa-smile"></i> Login
            </span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-shopping-cart"></i> AED <span id="hlopal">{cart.total.toFixed(2)} - {cart.items}</span> item(s)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
