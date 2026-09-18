import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { BtnLink } from "@/components/site/Btn";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Товар не найден — Лесные устрицы" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Лесные устрицы` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — Лесные устрицы` },
        { property: "og:description", content: product.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <Section>
      <h1 className="text-4xl">Товар не найден</h1>
      <p className="mt-4 text-muted-foreground">Возможно, позиция была переименована.</p>
      <div className="mt-8">
        <BtnLink to="/produkciya">Весь каталог</BtnLink>
      </div>
    </Section>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <ImagePlaceholder alt={product.name} ratio="square" label="Фото продукта" />
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">{product.name}</h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          {product.note ? (
            <p className="mt-4 inline-flex border border-accent/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-accent">
              {product.note}
            </p>
          ) : null}
          <dl className="mt-8 grid max-w-xs gap-2 border-t border-border pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Цена</dt>
              <dd className="font-medium">{product.price}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Наличие</dt>
              <dd className="font-medium">{product.availability}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-muted-foreground">
            Временные данные прототипа. Будут заменены реальными значениями.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BtnLink to="/kak-kupit">Как купить</BtnLink>
            <BtnLink to="/produkciya" variant="outline">
              Весь каталог
            </BtnLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
