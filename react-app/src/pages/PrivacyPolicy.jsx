import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function PrivacyPolicy() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Privacy policy', url: '/privacy-policy' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>Privacy policy</h1>
      </div>
    </article>
  );
}
