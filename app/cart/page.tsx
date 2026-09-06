"use client";

import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/lib/store/useCartStore';
import Link from 'next/link';

import CartEmptyState from '@/components/cart/CartEmptyState';
import CartItemsTable from '@/components/cart/CartItemsTable';
import CartActions from '@/components/cart/CartActions';
import CartCoupon from '@/components/cart/CartCoupon';
import CartTotal from '@/components/cart/CartTotal';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#DB4444] rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Loading your cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-20">
      
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-12">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-2">/</span> <span className="text-black font-medium">Cart</span>
      </div>

      {items.length === 0 ? (
        <CartEmptyState />
      ) : (
        <div className="flex flex-col gap-10">
          
          <CartItemsTable />
          <CartActions />

          {/* Bottom Section: Coupon & Cart Total */}
          <div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-10 lg:gap-0">
            <CartCoupon />
            <CartTotal />
          </div>

        </div>
      )}
    </div>
  );
}
