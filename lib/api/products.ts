import { getData } from "./client";
import { ProductResponse, Product } from "@/types/product";

export async function getProducts(limit = 10, skip = 0) {
  if (limit < 1 || skip < 0) throw new Error("Invalid pagination params");

  const params = new URLSearchParams({ limit: String(limit), skip: String(skip) });

  try {
    return await getData<ProductResponse>(`/products?${params}`);
  } catch (err) {
    throw new Error(`Failed to fetch products: ${(err as Error).message}`);
  }
}

export async function getProductById(id: number) {
  if (!Number.isInteger(id) || id <= 0) throw new Error("Invalid product id");

  try {
    return await getData<Product>(`/products/${id}`);
  } catch (err) {
    throw new Error(`Failed to fetch product ${id}: ${(err as Error).message}`);
  }
}

export async function searchProducts(query:string){
  if(!query.trim())throw new Error("  Please provide a valid search query.")
  const params = new URLSearchParams({ q: query.trim() });

  try {
    return await getData<ProductResponse>(`/products/search?${params}`);
  } catch (err) {
    throw new Error(`Failed to search products: ${(err as Error).message}`);
  }
}