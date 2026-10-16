import React from 'react';
import ProductDetailView from '../components/ProductDetailView';
import { productsData } from '../data/products';

export default function ProductCarrot() {
  const product = productsData['10-carrot'];
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Carrot', url: '/products/vegetables' },
    { label: 'Carrot' },
  ];

  return <ProductDetailView product={product} breadcrumbs={breadcrumbs} />;
}
