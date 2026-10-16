import React from 'react';
import ProductDetailView from '../components/ProductDetailView';
import { productsData } from '../data/products';

export default function ProductApples() {
  const product = productsData['11-apples'];
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Apples', url: '/products/fruits' },
    { label: 'Apples' },
  ];

  return <ProductDetailView product={product} breadcrumbs={breadcrumbs} />;
}
