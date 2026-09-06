"use client";

import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  thumbnail: string;
  title: string;
}

export default function ProductGallery({ images, thumbnail, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Fill up to 4 thumbnails for the gallery UI
  const galleryImages = (images || []).slice(0, 4);
  // If API returns fewer than 4 images, duplicate the thumbnail just for UI styling purposes
  while (galleryImages.length < 4) {
    galleryImages.push(thumbnail);
  }

  return (
    <div className="w-full lg:w-7/12 flex flex-col-reverse md:flex-row gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-40 shrink-0">
        {galleryImages.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => setActiveIndex(idx)}
            className={`w-24 h-24 sm:w-full sm:h-32 bg-[#F5F5F5] rounded flex items-center justify-center p-4 cursor-pointer border-2 transition-colors ${activeIndex === idx ? 'border-gray-400' : 'border-transparent'}`}
          >
            <img src={img} alt={`Thumbnail ${idx}`} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
      
      {/* Main Image */}
      <div className="flex-1 bg-[#F5F5F5] rounded flex items-center justify-center p-10 min-h-[300px] md:min-h-[500px]">
        <img src={galleryImages[activeIndex]} alt={title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
      </div>
    </div>
  );
}