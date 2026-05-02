import React from 'react';

const FilterBar = () => {
  return (
    <div className="bg-surface border-b border-surface-variant/20 py-6 px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="relative w-full sm:w-1/2 lg:w-2/5">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            type="text" 
            placeholder="Search for textbooks, electronics, dorm gear..." 
            className="w-full pl-12 pr-4 py-3.5 bg-surface-container-lowest border border-surface-variant/50 rounded-2xl font-body text-on-surface focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-secondary/50 shadow-sm"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-initial">
            <select className="appearance-none bg-surface-container-lowest border border-surface-variant/50 text-on-surface text-sm rounded-xl px-5 py-3.5 pr-10 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all w-full cursor-pointer shadow-sm">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popularity</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">expand_more</span>
          </div>
          
          <button className="flex items-center justify-center p-3.5 bg-surface-container-lowest border border-surface-variant/50 rounded-xl text-on-surface hover:bg-surface-variant transition-colors shadow-sm group">
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-300">tune</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
