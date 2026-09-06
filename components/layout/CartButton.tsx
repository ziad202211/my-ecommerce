"use client";

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import Link from 'next/link';

export const CartButton = () => {
  // We use a mounted state to prevent hydration errors since localStorage is only available on the client
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/cart" className="relative p-1 text-black hover:text-gray-600 transition-colors flex items-center justify-center">
      <ShoppingCart className="h-6 w-6" />
      {/* Badge showing total items */}
      {mounted && totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  );
};
