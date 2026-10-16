import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function ProductCard({ product }) {
  const { addToCart } = useApp();
  const [selectedWeight, setSelectedWeight] = useState(
    product.weights && product.weights.length > 0
      ? product.weights[0].value
      : product.basePrice.toFixed(1)
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleMinus = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleWeightChange = (e) => {
    setSelectedWeight(e.target.value);
  };

  const handleAddToCart = () => {
    const price = parseFloat(selectedWeight) || product.basePrice;
    addToCart(price, quantity);
    setAdded(true);
  };

  const productUrl = product.url.replace(/\.html$/, '');

  return (
    <div className="product">
      <Link to={productUrl} className="picture">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="pd">
        <Link to={productUrl}>{product.name}</Link>
      </div>
      <div className="pd price">
        <span id={`setprice${product.id}`}>AED {parseFloat(selectedWeight).toFixed(1)}</span>
        <br />
        * Price Inclusive VAT
      </div>
      <div className="pd" id={`modas${product.id}`}>
        {added ? (
          <a href="#" className="btn" onClick={(e) => e.preventDefault()}>
            Go to shopping cart <i className="fas fa-angle-right"></i>
          </a>
        ) : (
          <>
            <div className="selection">
              <select
                name="vaga"
                id={`weight${product.id}`}
                value={selectedWeight}
                onChange={handleWeightChange}
              >
                {product.weights.map((w) => (
                  <option key={w.label} value={w.value} label={w.label}>
                    {w.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="kvo">
              <span className="minus" onClick={handleMinus}>
                <i className="fas fa-sort-down"></i>
              </span>
              <span className="amount" id={`amount${product.id}`}>
                {quantity}
              </span>
              <span className="plus" onClick={handlePlus}>
                <i className="fas fa-sort-up"></i>
              </span>
            </div>
            <div className="addtocart" onClick={handleAddToCart}>
              Add <i className="fas fa-cart-plus"></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
