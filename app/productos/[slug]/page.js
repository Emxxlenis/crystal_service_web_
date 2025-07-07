"use client";

import { useParams } from 'next/navigation';
import { useLanguage } from '../../../src/context/LangContext';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import ProductDetail from '../../../src/components/ProductDetail';

export default function ProductPage() {
  const params = useParams();
  const { language } = useLanguage();
  
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <ProductDetail productSlug={params.slug} />
      </main>
      <Footer />
    </div>
  );
} 