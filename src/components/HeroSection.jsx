import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-surface-container-low rounded-[2rem] mx-6 mt-8 p-8 lg:p-16 border border-surface-variant/20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl">
        <h1 className="mb-6 leading-tight">
          Your Campus, <br />
          <span className="text-primary italic">Your Marketplace</span>
        </h1>
        <p className="text-lg lg:text-xl text-on-surface-variant mb-10 leading-relaxed max-w-lg">
          Buy, sell, and trade textbooks, electronics, and dorm essentials with fellow students securely and easily within your university community.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary py-4 px-8 text-base">
            Start Browsing
          </button>
          <button className="btn-secondary py-4 px-8 text-base">
            List an Item
          </button>
        </div>

        <div className="mt-12 flex items-center gap-8 border-t border-surface-variant/30 pt-8">
          <div>
            <div className="text-2xl font-bold text-on-surface">5,000+</div>
            <div className="text-sm text-secondary">Active Listings</div>
          </div>
          <div className="w-px h-10 bg-surface-variant/50"></div>
          <div>
            <div className="text-2xl font-bold text-on-surface">12k+</div>
            <div className="text-sm text-secondary">Trusted Students</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
