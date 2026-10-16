import React from 'react';
import ProductDetailView from '../components/ProductDetailView';
import { productsData } from '../data/products';

export default function ProductOrange() {
  const product = productsData['14-orange'];
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Oranges', url: '/products/fruits' },
    { label: 'Orange' },
  ];

  return <ProductDetailView product={product} breadcrumbs={breadcrumbs} />;
}
