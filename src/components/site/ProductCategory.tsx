import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductCategory({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="border-t border-border pt-10">
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
  );
}