import ProductGrid from "@/components/product/ProductGrid";
import { getProductById } from "@/lib/api/products";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    // In Next.js 15+, params is a Promise that must be awaited
    const resolvedParams = await params;
    const product = await getProductById(Number(resolvedParams.id));
    
    return(
    <>
    <div className="container mx-auto px-4 py-16 max-w-10xl">
    <ProductGrid product={product} />;
    </div>
    </> 
    )
}