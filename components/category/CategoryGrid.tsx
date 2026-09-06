import { getCategories } from "@/lib/api/categories";
import CategoryCarousel from "./CategoryCarousel";

export default async function CategoryGrid(){
const categories = await getCategories();
return(
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-2 h-6  bg-[#DB4444] rounded-sm"></div>
        <span className="text-[#DB4444] font-bold text-xl md:text-xl">Categories</span>
      </div>

      <CategoryCarousel categories={categories} />
    </section>
)
}