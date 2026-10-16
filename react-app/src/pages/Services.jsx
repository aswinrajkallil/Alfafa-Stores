import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Services() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>
          <span>Services</span>
        </h1>
      </div>
    </article>
  );
}
