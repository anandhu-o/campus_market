import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-surface-variant/30 shadow-sm">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-xl font-bold tracking-tight text-on-surface flex items-center gap-3">
          <img src="/logo.png" alt="IIT Madras Logo" className="h-10 w-auto object-contain" />
          <span>CampusMarket</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-primary font-semibold border-b-2 border-primary pb-1 transition-all">Browse</a>
          <a href="#" className="text-secondary hover:text-on-surface transition-colors">Categories</a>
          <a href="#" className="text-secondary hover:text-on-surface transition-colors">My Listings</a>
          <a href="#" className="text-secondary hover:text-on-surface transition-colors">Messages</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-on-surface font-semibold text-sm">Login</a>
          <button className="btn-primary flex items-center gap-2 py-2.5">
            <span className="material-symbols-outlined text-xl">add_circle</span>
            Sell
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
