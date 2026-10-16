import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function AboutUs() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about-us' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>
          <span>About Us</span>
        </h1>
      </div>
    </article>
  );
}
