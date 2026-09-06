import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16">
      {/* Text Content Area */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 md:pr-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Our Story
        </h2>
        
        <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">
          <p>
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping 
            marketplace with an active presence in Bangladesh. Supported 
            by wide range of tailored marketing, data and service solutions, 
            Exclusive has 10,500 sellers and 300 brands and serves 3 
            millions customers across the region.
          </p>
          
          <p>
            Exclusive has more than 1 Million products to offer, growing at a 
            very fast pace. Exclusive offers a diverse assortment in categories 
            ranging from consumer goods to electronics and fashion.
          </p>
        </div>
      </div>

      {/* Image Area */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden">
        {/* Using a placeholder image that matches the shopping/fashion vibe */}
        <Image 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
          alt="Two women shopping with bags"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default OurStory;
