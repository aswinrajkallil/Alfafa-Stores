import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Modal from './Modal';
import MobileCloseButton from './MobileCloseButton';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <MobileCloseButton />
      <Modal />
    </>
  );
}
