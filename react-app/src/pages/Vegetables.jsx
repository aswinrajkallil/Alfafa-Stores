import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CategorySidebar from '../components/CategorySidebar';
import ProductCard from '../components/ProductCard';
import { vegetableSidebarList, vegetableProducts } from '../data/products';

export default function Vegetables() {
  const [sortOption, setSortOption] = useState('0');

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Vegetables', url: '/products/vegetables' },
  ];

  const sortedProducts = [...vegetableProducts].sort((a, b) => {
    if (sortOption === '2') {
      return a.basePrice - b.basePrice;
    }
    if (sortOption === '3') {
      return b.basePrice - a.basePrice;
    }
    if (sortOption === '1') {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
    return 0;
  });

  return (
    <article className="post">
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} isPath={true} />

        <h1 className="vegetables mar0">Vegetables</h1>
        <div className="cl"></div>

        <CategorySidebar
          items={vegetableSidebarList}
          category="vegetables"
          hasBanner={true}
          className="pdt58"
        />

        <div className="rightcolumn">
          <div className="grub">
            <div className="sort">
              <select
                name="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="0">Sorting</option>
                <option value="2">Sort by price</option>
                <option value="3">Sort by price DESC</option>
                <option value="1">Sort by date</option>
              </select>
            </div>
          </div>

          <div className="par flex">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="par ar"></div>
        </div>

        <div className="cl">
          <br />
        </div>
      </div>
    </article>
  );
}
