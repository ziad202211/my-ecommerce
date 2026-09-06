import { getProducts } from "@/lib/api/products";
import { RecentProductsCarousel } from "./RecentProductsCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function RecentProducts() {
  // Fetch just 10 products for the carousel
  const data = await getProducts(10, 0);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-6 bg-[#DB4444] rounded-[4px]"></div>
            <span className="text-[#DB4444] text-xl font-bold text-base">Today's</span>
          </div>
        </div>

        {/* The interactive carousel */}
        <RecentProductsCarousel products={data.products} />

        {/* Shop All Button */}
        <div className="mt-6 flex justify-center">
          <Link href="/products">
            {/* Leveraging the existing Button component but injecting our custom styles */}
            <Button className="bg-[#DB4444] hover:bg-[#c23a3a] text-white px-14 py-4 text-md rounded-[4px] font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              View All Products
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
