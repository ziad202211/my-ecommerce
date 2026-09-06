import React from 'react';
import { 
  Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2, 
  ShoppingBag, Shirt, Heart, Home
} from "lucide-react";

export const getCategoryIcon = (slug: string, size = 32, strokeWidth = 1.5) => {
  switch (slug.toLowerCase()) {
    case 'smartphones':
    case 'phones':
      return <Smartphone strokeWidth={strokeWidth} size={size} />;
    case 'laptops':
    case 'computers':
      return <Monitor strokeWidth={strokeWidth} size={size} />;
    case 'mens-watches':
    case 'womens-watches':
    case 'smartwatch':
      return <Watch strokeWidth={strokeWidth} size={size} />;
    case 'camera':
      return <Camera strokeWidth={strokeWidth} size={size} />;
    case 'headphones':
      return <Headphones strokeWidth={strokeWidth} size={size} />;
    case 'gaming':
      return <Gamepad2 strokeWidth={strokeWidth} size={size} />;
    case 'womens-dresses':
    case 'tops':
    case 'mens-shirts':
      return <Shirt strokeWidth={strokeWidth} size={size} />;
    case 'beauty':
    case 'skincare':
      return <Heart strokeWidth={strokeWidth} size={size} />;
    case 'home-decoration':
    case 'furniture':
      return <Home strokeWidth={strokeWidth} size={size} />;
    default:
      return <ShoppingBag strokeWidth={strokeWidth} size={size} />;
  }
};
