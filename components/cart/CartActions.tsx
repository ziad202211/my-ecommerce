import Link from 'next/link';

export default function CartActions() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-4">
      <Link href="/products" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto border border-gray-400 rounded px-10 py-3.5 font-medium text-black hover:bg-gray-50 transition-colors">
          Return To Shop
        </button>
      </Link>
      
    </div>
  );
}
