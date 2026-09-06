import React from 'react';
import { Product } from '@/types/product';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
export default function ProductGrid({ product }: { product: Product }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
       <Breadcrumb 
                    items={[
                      { label: 'Home', href: '/' },
                      { label: product.category, href: `/products/category/${product.category}` },
                      { label: product.title }
                    ]} 
                    className="mb-20"
                  />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Side: Modular Image Gallery */}
        <ProductGallery 
          images={product.images} 
          thumbnail={product.thumbnail} 
          title={product.title} 
        />

        {/* Right Side: Modular Product Details */}
        <ProductDetails product={product} />
        
      </div>
    </div>
  );
}
