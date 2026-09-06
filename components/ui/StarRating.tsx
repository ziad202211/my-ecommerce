import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={16} className="text-[#FFAD33] fill-[#FFAD33]" />
        ))}
        {hasHalfStar && <StarHalf key="half" size={16} className="text-[#FFAD33] fill-[#FFAD33]" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-gray-300 fill-gray-300" />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-gray-500 text-sm font-semibold">({reviewCount})</span>
      )}
    </div>
  );
};
