"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    tag: "Sonus Elite ANC",
    heading: (
      <>
        Premium Wireless <br /> Headphones
      </>
    ),
    link: "/products/category/audio",
    image: "/images/headphone_promo.jpg",
    logo: null
  },
  {
    tag: "iPhone 14 Series",
    heading: (
      <>
        Up to 10% <br /> off Voucher
      </>
    ),
    link: "/products/category/smartphones",
    image: "/images/iphone_promo.jpg",
    logo: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.14.07 2.19.46 2.94 1.25-2.23 1.34-1.89 4.3.43 5.3-.61 1.76-1.57 3.99-1.95 6.42zm-5.07-13.8c-.14-1.74 1.27-3.29 3.02-3.48.27 1.83-1.47 3.32-3.02 3.48z" />
      </svg>
    )
  },
  {
    tag: "Aurora Luxury",
    heading: (
      <>
        Next Gen <br /> Smartwatch
      </>
    ),
    link: "/products/category/wearables",
    image: "/images/smartwatch_promo.jpg",
    logo: null
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const slide = slides[currentSlide];

  return (
    <div className="flex-1 mt-10 md:pl-10">
      <div className="bg-black text-white rounded-md w-full h-[344px] flex relative overflow-hidden group">
        {/* Text Content */}
        <div className="flex flex-col justify-center pl-16 z-10 w-1/2">
          <div className="flex items-center gap-4 mb-5 h-10">
            {slide.logo}
            <span className="text-sm font-light">{slide.tag}</span>
          </div>

          <h2 className="text-4xl leading-tight font-semibold mb-6">
            {slide.heading}
          </h2>

          <Link
            href={slide.link}
            className="flex items-center gap-2 text-base border-b border-white pb-1 w-fit hover:opacity-80 transition-opacity"
          >
            Shop Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Image Display */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[50%]">
          <div className="relative w-full h-full">
            {/* Gradient overlay to smoothly blend with the black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <Image
              src={slide.image}
              alt={slide.tag}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-right"
              priority
            />
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index
                  ? "border-2 border-white bg-red-500"
                  : "bg-gray-500 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
