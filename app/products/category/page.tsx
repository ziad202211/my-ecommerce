import { getCategories } from "@/lib/api/categories";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArrowRight } from "lucide-react";

export default async function ProductCategory() {
    const data: any[] = await getCategories() as any[];
    
    return(
        <div className="container mx-auto px-4 py-16 max-w-7xl">
            {/* Breadcrumb */}
            <Breadcrumb 
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Categories' }
                ]} 
                className="mb-12"
            />
            
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-6 bg-[#DB4444] rounded-[4px]"></div>
                <h1 className="text-xl font-bold text-black tracking-wide">Browse Categories</h1>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((category: any) => (
                    <Link 
                        key={category.slug} 
                        href={`/products/category/${category.slug}`}
                        className="group flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-[#DB4444] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 bg-white"
                    >
                        <span className="font-semibold text-gray-800 group-hover:text-[#DB4444] transition-colors duration-300 capitalize text-lg">
                            {category.name}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#DB4444]/10 transition-colors duration-300">
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#DB4444] group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}