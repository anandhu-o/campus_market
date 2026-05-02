import React from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Smooth scroll anchor or overlay if needed */}
      
      <Navbar />
      
      <main className="flex-grow">
        <FilterBar />
        <HeroSection />
        <ProductGrid />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
