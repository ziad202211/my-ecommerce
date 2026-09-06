import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CartEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm p-10">
      <div className="text-gray-300 mb-6 bg-white p-6 rounded-full shadow-sm">
        <ShoppingBag size={64} strokeWidth={1.5} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
      <p className="text-gray-500 mb-10 text-lg">Looks like you haven't added anything to your cart yet.</p>
      <Link href="/products">
        <Button className="bg-[#DB4444] hover:bg-[#c23a3a] text-white px-8 py-3 rounded-md font-semibold text-md transition-transform hover:-translate-y-1">
          Start Shopping
        </Button>
      </Link>
    </div>
  );
}
