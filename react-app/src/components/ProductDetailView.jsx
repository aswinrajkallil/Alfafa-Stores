import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import ProductDetailSidebar from './ProductDetailSidebar';
import { useApp } from '../context/AppContext';

export default function ProductDetailView({ product, breadcrumbs }) {
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

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} isPath={true} />

        <h1 className="vegetables">{product.name}</h1>

        <div className="tovarblock">
          <div className="metka">
            <span className="bestsellers">Best Sellers</span>
            <span className="newarrival">New Arrival</span>
          </div>
          <div className="mainfoto">
            <a
              href={product.fullImage}
              className="zoome"
              rel="grup"
              onClick={(e) => e.preventDefault()}
            >
              <img src={product.fullImage} alt={product.name} />
            </a>
          </div>

          <div className="desc">
            <div className="price par">
              <span id={`setprice${product.id}`}>
                AED {parseFloat(selectedWeight).toFixed(1)}
              </span>{' '}
              / kg
              <br />* Price Inclusive VAT
            </div>

            <div id={`modas${product.id}`}>
              {added ? (
                <div className="par">
                  <a href="#" className="btn" onClick={(e) => e.preventDefault()}>
                    Go to shopping cart <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              ) : (
                <>
                  <div className="par">
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
                  </div>
                  <div className="addtocart par" onClick={handleAddToCart}>
                    Add to cart <i className="fas fa-cart-plus"></i>
                  </div>
                </>
              )}
            </div>

            <div className="par">
              <div
                className="fb-share-button"
                data-href="https://store.alfafa.co"
                data-layout="button_count"
                data-size="small"
                data-mobile-iframe="true"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstore.alfafa.co&src=sdkpreparse"
                  className="fb-xfbml-parse-ignore"
                >
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>

        <ProductDetailSidebar />

        <div className="cl"></div>

        <div className="description">
          <h3>Product description</h3>
          {product.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
