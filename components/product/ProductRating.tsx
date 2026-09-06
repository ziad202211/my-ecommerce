import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviewsCount: number;
  stockStatus?: string;
  stockCount?: number;
}

export default function ProductRating({ rating, reviewsCount, stockStatus = 'In Stock', stockCount }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= Math.round(rating || 5) ? "fill-[#FFAD33] text-[#FFAD33]" : "fill-gray-200 text-gray-200"}
          />
        ))}
      </div>
      <span className="text-gray-400 text-sm">
        ({reviewsCount} Reviews)
      </span>
      <span className="text-gray-400">|</span>
      <span className="text-green-400 text-sm font-medium">
        {stockStatus} {stockCount !== undefined && `(${stockCount})`}
      </span>
    </div>
  );
}
