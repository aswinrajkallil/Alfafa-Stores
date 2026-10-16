import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Cart state: total price in AED and total items count
  const [cart, setCart] = useState({ total: 0, items: 0 });

  // Modal state: controls popup visibility and content
  // type can be 'login', 'recovery', or 'message'
  const [modal, setModal] = useState({ isOpen: false, type: 'login', message: '' });

  // Mobile drawer state
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const addToCart = (price, quantity = 1) => {
    const numPrice = parseFloat(price) || 0;
    const numQty = parseInt(quantity, 10) || 1;
    setCart((prev) => ({
      total: prev.total + numPrice * numQty,
      items: prev.items + numQty,
    }));
  };

  const openLoginModal = () => {
    setModal({ isOpen: true, type: 'login', message: '' });
  };

  const openRecoveryModal = () => {
    setModal({ isOpen: true, type: 'recovery', message: '' });
  };

  const openMessageModal = (message) => {
    setModal({ isOpen: true, type: 'message', message });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: 'login', message: '' });
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        modal,
        openLoginModal,
        openRecoveryModal,
        openMessageModal,
        closeModal,
        mobileNavOpen,
        toggleMobileNav,
        closeMobileNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
