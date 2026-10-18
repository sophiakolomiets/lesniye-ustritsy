import type { Product } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ProductCard({ product }: { product: Product }) {
  const image = product.image;
  return (
    <article className="group flex h-full flex-col border border-border bg-card transition-colors hover:border-primary/40">
      {image ? (
        <ImagePlaceholder src={image} alt={product.name} ratio="square" label="Фото продукта" />
      ) : (
        <ImagePlaceholder alt={product.name} ratio="square" label="Фото продукта" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-2 font-display text-2xl leading-tight">{product.name}</h3>
        {product.pack ? <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{product.pack}</p> : null}
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        {product.note ? (
          <p className="mt-3 inline-flex w-fit border border-accent/40 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-accent">
            {product.note}
          </p>
        ) : null}
        <dl className="mt-6 space-y-1 border-t border-border pt-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Цена</dt>
            <dd className="font-medium">{product.price}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Наличие</dt>
            <dd className="font-medium">{product.availability}</dd>
          </div>
        </dl>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-5 w-fit text-xs font-semibold uppercase tracking-[0.16em] text-primary underline decoration-sage underline-offset-8 hover:decoration-primary"
        >
          Подробнее
        </Link>
      </div>
    </article>
  );
}
