import React from 'react';

const ProductCard = ({ title, price, condition, image, description }) => {
  return (
    <div className="card group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-surface-variant/20">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-semibold text-[10px] uppercase tracking-wider text-primary border border-primary/10 shadow-sm">
          {condition}
        </div>
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-sm text-secondary line-clamp-2 mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="font-price text-2xl font-extrabold text-primary">
            ₹{price}
          </div>
          <button className="text-sm font-bold text-primary group-hover:underline flex items-center gap-1">
            View Details
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
