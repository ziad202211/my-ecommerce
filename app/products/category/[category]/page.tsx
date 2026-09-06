import { getProductsByCategory } from "@/lib/api/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
export default async function ProductCategory({params}: {params: Promise<{category: string}>}) {
    const { category } = await params;
    const data = await getProductsByCategory(category)
    return(
        <>
        <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Breadcrumb 
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Categories', href: '/products/category' },
                  { label: category }
                ]} 
                className="mb-10"
              />
        <h1 className="text-4xl font-bold capitalize mb-16 flex justify-center m-10">{category}</h1>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
           {data.products.map((product: any) => (
                <li key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  reviewCount={product.reviews ? product.reviews.length : product.stock || 88}
                  imageUrl={product.thumbnail}
                />
                </li>
            ))}
        </ul>
        </div>
        </>
    )
}