import { Product } from '@/types/product';
import Link from 'next/link';

interface SearchDropdownProps {
  results: Product[];
  debouncedTerm: string;
  isSearching: boolean;
  onClose: () => void;
}

export function SearchDropdown({ results, debouncedTerm, isSearching, onClose }: SearchDropdownProps) {
  return (
    <div className="absolute top-12 left-0 w-full bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 rounded-md max-h-80 overflow-y-auto z-50">
      {results.length > 0 ? (
        <ul className="flex flex-col">
          {results.map((product) => (
            <li key={product.id}>
              <Link 
                href={`/products/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <img src={product.thumbnail} alt={product.title} className="w-10 h-10 object-contain bg-gray-100 rounded shrink-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-black line-clamp-1">{product.title}</span>
                  <span className="text-xs text-[#DB4444] font-medium">${product.price}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : debouncedTerm.trim() && !isSearching ? (
        <div className="p-4 text-sm text-gray-500 text-center">No results found.</div>
      ) : null}
    </div>
  );
}
