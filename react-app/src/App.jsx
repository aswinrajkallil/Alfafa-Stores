import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Vegetables from './pages/Vegetables';
import Fruits from './pages/Fruits';
import ProductCarrot from './pages/ProductCarrot';
import ProductOrange from './pages/ProductOrange';
import ProductApples from './pages/ProductApples';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MissionVision from './pages/MissionVision';
import QualityPolicy from './pages/QualityPolicy';
import Catalogues from './pages/Catalogues';
import LatestNews from './pages/LatestNews';
import PhotoGallery from './pages/PhotoGallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/index.html" element={<AboutUs />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/index.html" element={<Products />} />

        <Route path="/products/vegetables" element={<Vegetables />} />
        <Route path="/products/vegetables.html" element={<Vegetables />} />

        <Route path="/products/fruits" element={<Fruits />} />
        <Route path="/products/fruits.html" element={<Fruits />} />

        <Route path="/products/carrot/10-carrot" element={<ProductCarrot />} />
        <Route path="/products/carrot/10-carrot.html" element={<ProductCarrot />} />

        <Route path="/products/oranges/14-orange" element={<ProductOrange />} />
        <Route path="/products/oranges/14-orange.html" element={<ProductOrange />} />

        <Route path="/products/apples/11-apples" element={<ProductApples />} />
        <Route path="/products/apples/11-apples.html" element={<ProductApples />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/index.html" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/index.html" element={<Contact />} />

        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/mission-vision/index.html" element={<MissionVision />} />

        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/quality-policy/index.html" element={<QualityPolicy />} />

        <Route path="/catalogues" element={<Catalogues />} />
        <Route path="/catalogues/index.html" element={<Catalogues />} />

        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/latest-news/index.html" element={<LatestNews />} />

        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/photo-gallery/index.html" element={<PhotoGallery />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy/index.html" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/index.html" element={<Terms />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
