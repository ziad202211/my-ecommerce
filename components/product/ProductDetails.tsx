"use client";

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { Heart, Truck, RefreshCcw, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/useCartStore';
import { useToastStore } from '@/lib/store/useToastStore';
import ProductRating from './ProductRating';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');
  
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.thumbnail,
    }, quantity);
    addToast({ message: `Added ${quantity} ${product.title} to cart!`, type: 'success' });
  };



  return (
    <div className="w-full lg:w-5/12 flex flex-col pt-2">
      <h1 className="text-2xl font-bold text-black mb-3">{product.title}</h1>
      
      {/* Reviews & Stock */}
      <ProductRating 
        rating={product.rating} 
        reviewsCount={product.reviews?.length || 150} 
        stockStatus={product.availabilityStatus} 
        stockCount={product.stock}
      />
      
      {/* Price */}
      <div className="text-2xl font-normal text-black mb-6">
        {formatPrice(product.price)}
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed pb-6 border-b border-gray-300">
        {product.description}
      </p>

     

      

      {/* Actions */}
      <div className="mt-8 flex items-center gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-400 rounded h-11 w-[160px]">
          <button 
            onClick={handleDecrement}
            className="w-10 h-full flex items-center justify-center border-r border-gray-400 hover:bg-gray-100 transition-colors rounded-l"
          >
            <Minus size={18} />
          </button>
          <div className="flex-1 h-full flex items-center justify-center font-medium text-lg border-x border-transparent">
            {quantity}
          </div>
          <button 
            onClick={handleIncrement}
            className="w-10 h-full flex items-center justify-center bg-[#DB4444] text-white hover:bg-[#c23a3a] transition-colors rounded-r border-l border-[#DB4444]"
          >
            <Plus size={18} />
          </button>
        </div>
        
        {/* Buy Now / Add to Cart */}
        <Button 
          onClick={handleAddToCart}
          className="bg-[#DB4444] hover:bg-[#c23a3a] text-white px-8 h-11 rounded font-medium shadow-none hover:shadow-none"
        >
          Buy Now
        </Button>
        
       
      </div>

      {/* Delivery & Return Info */}
      <div className="mt-10 border border-gray-400 rounded flex flex-col">
        <div className="p-4 flex gap-4 items-center border-b border-gray-400">
          <Truck size={28} className="text-black shrink-0" />
          <div className="flex flex-col">
            <span className="font-medium text-black">Free Delivery</span>
            <span className="text-xs font-medium text-gray-800 mt-1 cursor-pointer underline underline-offset-2">
              Enter your postal code for Delivery Availability
            </span>
          </div>
        </div>
        <div className="p-4 flex gap-4 items-center">
          <RefreshCcw size={28} className="text-black shrink-0" />
          <div className="flex flex-col">
            <span className="font-medium text-black">Return Delivery</span>
            <span className="text-xs font-medium text-gray-800 mt-1">
              Free 30 Days Delivery Returns. <span className="cursor-pointer underline underline-offset-2">Details</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}