import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ items = [], isPath = false }) {
  return (
    <div
      xmlnsV="http://rdf.data-vocabulary.org/#"
      className={`breadcrumb ${isPath ? 'path' : ''}`}
    >
      {items.map((item, index) => {
        if (item.url) {
          return (
            <span key={index} typeof="v:Breadcrumb">
              <Link property="v:title" rel="v:url" to={item.url}>
                {item.label}
              </Link>{' '}
              /{' '}
            </span>
          );
        }
        return (
          <span key={index}>
            {item.label} /{' '}
          </span>
        );
      })}
    </div>
  );
}
