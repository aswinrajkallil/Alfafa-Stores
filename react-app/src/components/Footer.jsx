import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { openMessageModal } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    openMessageModal('You need to check your Email and confirm subscription');
    setEmail('');
  };

  return (
    <footer className="post">
      <div className="title clear">
        <div className="contacts">
          <p>
            P.O. Box: 6824, Abu Dhabi, UAE<br />
            Phone: +971 2 6344555<br />
            Fax: +971 2 6344577<br />
            Email: <a href="mailto:pisocky.ivan@gmail.com">pisocky.ivan@gmail.com</a>
          </p>

          <p>
            © 2013-2026 Alfafa, Abu Dhabi, UAE.<br />
            All Rights Reserved.
          </p>

          <p>
            <a
              href="https://pixelagcy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="dev"
            >
              Made in Pixel Agency
            </a>
          </p>
        </div>

        <div className="fmenu clear">
          <ul>
            <li><Link to="/mission-vision">Mission and Vision</Link></li>
            <li><Link to="/quality-policy">Quality Policy</Link></li>
            <li><Link to="/catalogues">Catalogues</Link></li>
            <li><Link to="/latest-news">Latest News</Link></li>
            <li><Link to="/photo-gallery">Photo Gallery</Link></li>
          </ul>
          <ul>
            <li><Link to="/privacy-policy">Privacy policy</Link></li>
            <li><Link to="/terms">Terms and conditions</Link></li>
          </ul>
        </div>

        <div className="subscription">
          <p>Newsletter Sign Up</p>
          <form onSubmit={handleSubscribe}>
            <p className="border">
              <input
                type="text"
                placeholder="Your Email address"
                name="subscriber"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button id="subs" type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </p>
          </form>
          <br />
          <p>Follow Us</p>
          <p className="social">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>{' '}
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>{' '}
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>{' '}
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>{' '}
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>{' '}
          </p>
        </div>
      </div>
    </footer>
  );
}
