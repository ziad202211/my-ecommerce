"use client";

import { useCartStore } from '@/lib/store/useCartStore';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function CartTotal() {
  const { getTotalPrice } = useCartStore();
 

  return (
    <div className="border-[1.5px] border-black rounded p-8 w-full lg:w-[450px]">
       <h2 className="text-[20px] font-medium mb-6 text-black">Cart Total</h2>
       
       <div className="flex justify-between pb-4 border-b border-gray-300 mb-4 text-black">
         <span>Subtotal:</span>
         <span>{formatPrice(getTotalPrice())}</span>
       </div>
       
       <div className="flex justify-between pb-4 border-b border-gray-300 mb-4 text-black">
         <span>Shipping:</span>
         <span>Free</span>
       </div>
       
       <div className="flex justify-between mb-6 text-black">
         <span>Total:</span>
         <span>{formatPrice(getTotalPrice())}</span>
       </div>
       
       <div className="flex justify-center mt-2">
         <button className="bg-[#DB4444] text-white rounded px-10 py-3.5 font-medium hover:bg-[#c23a3a] transition-colors w-full sm:w-auto min-w-[220px]">
           Proceed to checkout
         </button>
       </div>
    </div>
  );
}
