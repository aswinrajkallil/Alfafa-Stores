import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';
import {
  vegetableSidebarList,
  fruitSidebarList,
  productsData,
} from '../data/products';

export default function Home() {
  const carrot = productsData['10-carrot'];
  const orange = productsData['14-orange'];
  const apples = productsData['11-apples'];

  return (
    <>
      <section className="post slider hidden visible animated fadeInDown">
        <div className="sitename">
          <p>ALFAFA is a company specializing in agriculture</p>
          <p>
            <Link to="/about-us" className="bigbtn">
              Learn more
            </Link>
          </p>
        </div>

        <div className="your-class kit slick-initialized slick-slider slick-dotted">
          <div className="slick-list draggable" style={{ height: '779px' }}>
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: '100%',
                transform: 'translate3d(0px, 0px, 0px)',
              }}
            >
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                style={{ width: '100%' }}
                tabIndex={0}
                role="tabpanel"
                id="slick-slide00"
              >
                <img src="/assets/2341292.jpg" alt="" />
              </div>
            </div>
          </div>
          <ul className="slick-dots" role="tablist">
            <li className="slick-active" role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control00"
                aria-controls="slick-slide00"
                aria-label="1 of 1"
                tabIndex={0}
                aria-selected="true"
              >
                1
              </button>
            </li>
          </ul>
        </div>
      </section>

      <article className="post hidden visible animated fadeInDown">
        <div className="title clear">
          <h1 className="vegetables">Vegetables</h1>
          <CategorySidebar
            items={vegetableSidebarList}
            category="vegetables"
            hasBanner={false}
          />
          <div className="rightcolumn">
            <div className="par">
              <span className="newarrival">New Arrival</span>
            </div>
            <div className="par flex gop">
              <ProductCard product={carrot} />
            </div>

            <div className="par">
              <span className="bestsellers">Best Sellers</span>
            </div>
            <div className="par flex gop">
              <ProductCard product={carrot} />
            </div>
          </div>

          <div className="cl">
            <br />
          </div>

          <h1 className="fruits">Fruits</h1>
          <CategorySidebar
            items={fruitSidebarList}
            category="fruits"
            hasBanner={false}
          />
          <div className="rightcolumn">
            <div className="par">
              <span className="newarrival">New Arrival</span>
            </div>
            <div className="par flex gop">
              <ProductCard product={orange} />
              <ProductCard product={apples} />
            </div>

            <div className="par">
              <span className="bestsellers">Best Sellers</span>
            </div>
            <div className="par flex gop">
              <ProductCard product={orange} />
              <ProductCard product={apples} />
            </div>
          </div>

          <div className="cl">
            <br />
          </div>
        </div>
      </article>
    </>
  );
}
