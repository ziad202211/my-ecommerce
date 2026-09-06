import { getData } from "./client";
import { ProductResponse } from "@/types/product";
export interface Category {
  slug: string;
  name: string;
  url: string;
}

export async function getCategories() {
  try {
    return await getData<Category[]>("/products/categories");
  } catch (err) {
    throw new Error(`Failed to fetch categories: ${(err as Error).message}`);
  }
}

export async function getProductsByCategory(category: string) {
  if (!category.trim()) throw new Error("Category is required");

  try {
    return await getData<ProductResponse>(`/products/category/${encodeURIComponent(category)}`);
  } catch (err) {
    throw new Error(`Failed to fetch products for "${category}": ${(err as Error).message}`);
  }
}