import React from 'react';
import { useApp } from '../context/AppContext';

export default function MobileCloseButton() {
  const { mobileNavOpen, closeMobileNav } = useApp();

  return (
    <div
      className="closelabel"
      style={{ left: mobileNavOpen ? '280px' : '-60px' }}
      onClick={closeMobileNav}
    >
      <i className="fas fa-times-circle"></i>
    </div>
  );
}
