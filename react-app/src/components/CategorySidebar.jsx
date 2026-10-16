import React from 'react';
import { Link } from 'react-router-dom';

export default function CategorySidebar({
  items = [],
  category = 'vegetables',
  hasBanner = false,
  className = '',
}) {
  const targetCategoryUrl = `/products/${category}`;
  const otherCategory = category === 'vegetables' ? 'fruits' : 'vegetables';
  const otherCategoryLabel = category === 'vegetables' ? 'See Fruits also' : 'See Vegetables also';
  const bannerClass = category === 'vegetables' ? 'fruit' : 'vegan';

  return (
    <div className={`leftcolumn ${className}`}>
      <ul>
        {items.map((name) => (
          <li key={name}>
            <Link to={targetCategoryUrl}>
              {name} <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </li>
        ))}
      </ul>
      {hasBanner && (
        <div className="banner">
          <Link to={`/products/${otherCategory}`} className={bannerClass}>
            {otherCategoryLabel}{' '}
            <span>
              <i className="fas fa-chevron-circle-right"></i>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
