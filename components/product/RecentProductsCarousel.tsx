"use client";

import React, { useRef } from 'react';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function RecentProductsCarousel({ products }: { products: any[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Get the width of one card plus gap to scroll exactly one item
      const scrollAmount = scrollContainerRef.current.firstElementChild?.clientWidth || 340;
      const gap = 32; // 2rem (gap-8)
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -(scrollAmount + gap) : (scrollAmount + gap),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow (hidden on mobile) */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-[-2%] top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-full z-10 bg-white shadow-xl rounded-full p-3 transition-all hidden md:flex items-center justify-center border border-gray-100 text-gray-600 hover:text-black hover:bg-gray-50 hover:scale-100"
        aria-label="Scroll left"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        {products.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[70vw] sm:min-w-[280px] snap-center shrink-0"
          >
            <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              reviewCount={item.reviews ? item.reviews.length : item.stock || 88}
              imageUrl={item.thumbnail}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow (hidden on mobile) */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-full z-10 bg-white shadow-xl rounded-full p-3 transition-all hidden md:flex items-center justify-center border border-gray-100 text-gray-600 hover:text-black hover:bg-gray-50 hover:scale-100"
        aria-label="Scroll right"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
