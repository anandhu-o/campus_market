import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Calculus Early Transcendentals",
      description: "Barely used, 8th edition. No highlighting inside. Perfect for Engineering Calculus courses.",
      price: "1,200",
      condition: "Like New",
      image: "/products/calculus.png"
    },
    {
      id: 2,
      title: "MacBook Pro 13\" M1",
      description: "2020 model, 8GB RAM, 256GB SSD. Minor scratch on bottom, otherwise perfect condition.",
      price: "55,000",
      condition: "Used - Good",
      image: "/products/macbook.png"
    },
    {
      id: 3,
      title: "Sony WH-1000XM4",
      description: "Industry leading noise cancelling headphones. 30-hour battery life. Comes with case.",
      price: "14,500",
      condition: "Excellent",
      image: "/products/headphones.png"
    },
    {
      id: 4,
      title: "Dorm Mini Fridge",
      description: "Compact 4L fridge. Great for keeping drinks and snacks cold in your dorm room.",
      price: "3,000",
      condition: "Used - Fair",
      image: "/products/fridge.png"
    },
    {
      id: 5,
      title: "Scientific Calculator TI-84",
      description: "Essential for math and science majors. In perfect working condition with batteries.",
      price: "4,500",
      condition: "Good",
      image: "/products/calculator.png"
    },
    {
      id: 6,
      title: "Electric Kettle 1.5L",
      description: "Quick boiling kettle. Safety auto-off feature. Used only for one semester.",
      price: "800",
      condition: "Excellent",
      image: "/products/kettle.png"
    },
    {
      id: 7,
      title: "Ergonomic Desk Chair",
      description: "Breathable mesh back with lumbar support. Adjustable height and armrests.",
      price: "2,500",
      condition: "Used - Good",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "Organic Chemistry Model Kit",
      description: "Full set of atoms and bonds. Essential for visualizing complex molecules.",
      price: "1,500",
      condition: "Like New",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="px-6 py-12 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="mb-2">Recently Added</h2>
          <p className="text-secondary">Fresh listings from your campus community</p>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold hover:underline">
          View All Listings
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-16">
        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-surface-variant text-secondary hover:bg-surface-variant transition-all hover:scale-105 active:scale-95 bg-white shadow-sm">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">1</button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-surface-variant text-on-surface hover:bg-surface-variant transition-all hover:scale-105 active:scale-95 bg-white shadow-sm font-bold">2</button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-surface-variant text-on-surface hover:bg-surface-variant transition-all hover:scale-105 active:scale-95 bg-white shadow-sm font-bold">3</button>
        <span className="text-secondary mx-2">...</span>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-surface-variant text-on-surface hover:bg-surface-variant transition-all hover:scale-105 active:scale-95 bg-white shadow-sm font-bold">8</button>
        <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-surface-variant text-secondary hover:bg-surface-variant transition-all hover:scale-105 active:scale-95 bg-white shadow-sm">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
