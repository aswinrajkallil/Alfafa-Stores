import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Catalogues() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Catalogues', url: '/catalogues' },
  ];

  return (
    <article>
      <div className="title clear">
        <Breadcrumb items={breadcrumbs} />
        <h1>
          <span>Catalogues</span>
        </h1>
      </div>
    </article>
  );
}
