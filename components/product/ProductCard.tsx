"use client";

import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import { StarRating } from '@/components/ui/StarRating';
import { formatPrice } from '@/lib/utils/formatPrice';

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  rating = 0,
  reviewCount,
  imageUrl,
}) => {
  return (
    <div className="group flex flex-col w-full max-w-[280px] mx-auto">
      {/* Image container */}
      <div className="relative bg-[#F5F5F5] rounded-md aspect-square flex items-center justify-center p-8 mb-4 overflow-hidden cursor-pointer">

        

        {/* Product Image */}
        <Link href={`/products/${id}`} className="w-full h-full flex items-center justify-center relative z-0 pb-10">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Add to Cart Button (React Query Component) */}
        <AddToCartButton product={{ id, title, price, imageUrl }} />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1.5">
        <Link href={`/products/${id}`} className="text-base font-bold text-gray-900 hover:text-[#DB4444] transition-colors line-clamp-1">
          {title}
        </Link>
        
        <div className="flex items-center gap-3">
          <span className="text-[#DB4444] font-medium">{formatPrice(price)}</span>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <StarRating rating={rating} reviewCount={reviewCount} />
        </div>
      </div>
    </div>
  );
};
