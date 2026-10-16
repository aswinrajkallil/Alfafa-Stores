import React from 'react';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';
import {
  vegetableSidebarList,
  fruitSidebarList,
  productsData,
} from '../data/products';

export default function Products() {
  const carrot = productsData['10-carrot'];
  const orange = productsData['14-orange'];
  const apples = productsData['11-apples'];

  return (
    <article className="post">
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
  );
}
