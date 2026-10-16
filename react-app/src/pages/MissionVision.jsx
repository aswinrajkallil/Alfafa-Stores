import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function MissionVision() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Mission and Vision', url: '/mission-vision' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>
          <span>Mission and Vision</span>
        </h1>
      </div>
    </article>
  );
}
