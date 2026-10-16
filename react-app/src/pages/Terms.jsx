import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Terms() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Terms and conditions', url: '/terms' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>Terms and conditions</h1>
      </div>
    </article>
  );
}
