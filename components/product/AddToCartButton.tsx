"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useCartStore } from '@/lib/store/useCartStore';
import { useToastStore } from '@/lib/store/useToastStore';

interface AddToCartButtonProps {
  product: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  // We still use Zustand to maintain the global cart UI instantly!
  const addItem = useCartStore((state) => state.addItem);
  const addToast = useToastStore((state) => state.addToast);

  const mutation = useMutation({
    mutationFn: async () => {
      // Simulating a real POST request to add to cart on the backend
      const response = await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1, // hardcoded user for testing dummyjson
          products: [
            {
              id: product.id,
              quantity: 1,
            }
          ]
        })
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      // The API call succeeded! Now we update our local Zustand store
      // so the user sees the item in their cart immediately.
      
      addItem({ 
        id: product.id, 
        title: product.title, 
        price: product.price, 
        imageUrl: product.imageUrl 
      });
      addToast({ message: `${product.title} added to cart!`, type: 'success' });
    },
    onError: (error) => {
      console.error('Failed to add to cart on server:', error);
      addToast({ message: 'Failed to add to cart. Please try again.', type: 'error' });
    }
  });

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if clicked inside a link
    mutation.mutate();
  };

  return (
    <button 
      onClick={handleAddToCart}
      disabled={mutation.isPending}
      className="absolute bottom-0 left-0 w-full bg-black hover:bg-gray-900 text-white py-2.5 flex items-center justify-center gap-2 transition-colors z-20 font-medium text-sm disabled:bg-gray-600 disabled:cursor-not-allowed"
    >
      {mutation.isPending ? (
        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full shrink-0"></span>
      ) : (
        <ShoppingCart size={18} />
      )}
      {mutation.isPending ? 'Adding...' : 'Add To Cart'}
    </button>
  );
}
