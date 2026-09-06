import Link from "next/link";
import { getCategories } from "@/lib/api/categories";

export default async function CategoryMenu() {
  const categories = await getCategories();
  return (
    <div className="w-64 pt-10 pb-0 pr-6 border-r border-gray-200 hidden md:block">
      <ul className="flex flex-col gap-4">
        {categories.slice(0, 10).map((category, index) => (
          <li key={index}>
            <Link
              href={`/products/category/${category.slug}`}
              className="flex items-center justify-between text-sm font-medium hover:text-gray-600 transition-colors"
            >
              <span>{category.name}</span>
            </Link>
          </li>
        ))}
        {categories.length > 10 && (
          <li className="mt-2">
            <Link
              href="/products/category"
              className="block w-full text-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              See all
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
