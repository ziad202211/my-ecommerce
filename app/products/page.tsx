import { getProducts } from "@/lib/api/products";
import { PaginationButton } from "@/components/ui/PaginationBtn";
import { ProductCard } from "@/components/product/ProductCard";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const parsedPage = parseInt(resolvedSearchParams.page as string);
  const page = isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;

  const limit = 12;
  const skip = (page - 1) * limit;
  
  const data = await getProducts(limit, skip);
  // Assuming the API returns a total count, or we check if we received a full page
  const hasNextPage = data.total ? data.total > skip + limit : data.products.length === limit;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {data.products.map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            reviewCount={item.reviews ? item.reviews.length : item.stock || 88}
            imageUrl={item.thumbnail}
          />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <PaginationButton currentPage={page} hasNextPage={hasNextPage} />
      </div>
    </div>
  );
}
