import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function QualityPolicy() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Quality Policy', url: '/quality-policy' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>
          <span>Quality Policy</span>
        </h1>
      </div>
    </article>
  );
}
