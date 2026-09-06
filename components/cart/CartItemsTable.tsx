"use client";

import { useCartStore } from '@/lib/store/useCartStore';
import Link from 'next/link';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function CartItemsTable() {
  const { items, updateQuantity, removeItem  } = useCartStore();

  return (
    <>
      {/* Desktop Table Header */}
      <div className="hidden md:flex bg-white rounded shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] py-6 px-10 items-center justify-between text-base font-medium text-black mb-6">
         <div className="w-1/4 text-left">Product</div>
         <div className="w-1/4 text-center">Price</div>
         <div className="w-1/4 text-center">Quantity</div>
         <div className="w-1/4 text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] py-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
             
             {/* Product Info */}
             <div className="w-full md:w-1/4 flex items-center gap-5 relative">
               <div className="relative shrink-0">
                 <button 
                   onClick={() => removeItem(item.id)} 
                   className="absolute -top-2 -left-2 bg-[#DB4444] text-white rounded-full w-[18px] h-[18px] flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                   aria-label="Remove item"
                 >
                   <X size={12} strokeWidth={3} />
                 </button>
                 <div className="w-14 h-14 flex items-center justify-center">
                   <img src={item.imageUrl} alt={item.title} className="max-w-full max-h-full object-contain" />
                 </div>
               </div>
               <Link href={`/products/${item.id}`} className="font-medium text-black truncate pr-4 hover:text-[#DB4444] transition-colors">
                 {item.title}
               </Link>
             </div>
             
             {/* Price */}
             <div className="w-full md:w-1/4 text-left md:text-center font-medium text-black">
               <span className="md:hidden text-gray-500 mr-2">Price:</span>
               {formatPrice(item.price)}
             </div>

             {/* Quantity */}
             <div className="w-full md:w-1/4 flex justify-start md:justify-center">
               <span className="md:hidden text-gray-500 mr-4 font-medium flex items-center">Quantity:</span>
               <div className="flex items-center border border-gray-400 rounded px-3 py-1.5 w-[72px] justify-between">
                 <span className="font-medium">{item.quantity.toString().padStart(2, '0')}</span>
                 <div className="flex flex-col gap-[2px] ml-1">
                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-black text-gray-500 flex items-center justify-center h-3">
                     <ChevronUp size={14} strokeWidth={2.5} />
                   </button>
                   <button onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)} className="hover:text-black text-gray-500 flex items-center justify-center h-3">
                     <ChevronDown size={14} strokeWidth={2.5} />
                   </button>
                 </div>
               </div>
             </div>

             {/* Subtotal */}
             <div className="w-full md:w-1/4 text-left md:text-right font-medium text-black">
               <span className="md:hidden text-gray-500 mr-2">Subtotal:</span>
               {formatPrice(item.price * item.quantity)}
             </div>

          </div>
        ))}
      </div>
    </>
  );
}
