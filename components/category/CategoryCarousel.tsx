"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryIcon } from "./CategoryIcon";

interface CategoryCarouselProps {
  categories: any[];
}

export default function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Distance to scroll
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-end mb-8 md:mb-12">
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Category List */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-8 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {categories.map((category, index) => (
          <Link 
            href={`/products/category/${category.slug}`} 
            key={index} 
            className="flex-shrink-0 flex flex-col items-center justify-center w-[130px] h-[130px] md:w-[170px] md:h-[145px] border border-gray-300 rounded hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-all duration-300 group"
          >
            <div className="text-gray-900 group-hover:text-white mb-3 md:mb-4">
               {getCategoryIcon(category.slug)}
            </div>
            <span className="text-sm md:text-base font-medium text-gray-900 group-hover:text-white text-center px-2">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
