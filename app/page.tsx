import RecentProducts from "@/components/product/RecentProducts";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/category/CategoryGrid";

export default function Home() {
  return (
   <>
   
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <RecentProducts />
      <CategoryGrid />
    </main>
   </>
  );
}
