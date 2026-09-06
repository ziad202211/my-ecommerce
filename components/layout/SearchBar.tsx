"use client";

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { searchProducts } from '@/lib/api/products';
import { Product } from '@/types/product';
import { SearchDropdown } from './SearchDropdown';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm] = useDebounce(searchTerm, 500);
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchResults() {
      if (debouncedTerm.trim()) {
        setIsSearching(true);
        setShowDropdown(true);
        try {
          const data = await searchProducts(debouncedTerm);
          setResults(data.products || []);
        } catch (error) {
          console.error(error);
          setResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    }

    fetchResults();
  }, [debouncedTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:flex items-center relative" ref={dropdownRef}>
      <input 
        type="text" 
        placeholder="What are you looking for?" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => { if(results.length > 0) setShowDropdown(true) }}
        className="bg-[#F5F5F5] text-sm rounded-md py-2 pl-5 pr-12 focus:outline-none focus:ring-1 focus:ring-gray-300 w-64 h-10"
      />
      
      {isSearching ? (
        <div className="absolute right-4 w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin pointer-events-none" />
      ) : (
        <Search className="absolute right-4 text-black w-5 h-5 pointer-events-none" />
      )}

      {/* Dropdown Results */}
      {showDropdown && (
        <SearchDropdown 
          results={results}
          debouncedTerm={debouncedTerm}
          isSearching={isSearching}
          onClose={() => {
            setShowDropdown(false);
            setSearchTerm('');
          }}
        />
      )}
    </div>
  );
}
