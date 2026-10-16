import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function PhotoGallery() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Photo Gallery', url: '/photo-gallery' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>
          <span>Photo Gallery</span>
        </h1>
      </div>
    </article>
  );
}
