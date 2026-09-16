import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ProductCard } from "@/components/site/ProductCard";
import { Section } from "@/components/site/Section";
import { products } from "@/data/products";
import featuredImage from "@/assets/featured-marinated.jpg";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Продукт не найден — Лесные устрицы" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Лесные устрицы` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} — Лесные устрицы` },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductDetail,
  errorComponent: ProductError,
  notFoundComponent: ProductNotFound,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <Section>
        <nav className="eyebrow">
          <Link to="/products" className="hover:text-primary">
            Продукция
          </Link>
          <span className="px-2">/</span>
          <span className="text-primary">{product.category}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <ImagePlaceholder
            src={product.slug === "belye-marinovannye" ? featuredImage : undefined}
            alt={product.name}
            ratio="square"
            label="Фото продукта"
          />
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 text-4xl leading-[1.05] sm:text-5xl">{product.name}</h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            {product.note ? (
              <p className="mt-4 inline-flex border border-accent/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                {product.note}
              </p>
            ) : null}

            <dl className="mt-8 grid max-w-sm gap-2 border-t border-border pt-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Цена</dt>
                <dd className="font-medium">{product.price}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Наличие</dt>
                <dd className="font-medium">{product.availability}</dd>
              </div>
            </dl>

            <div className="mt-8 border border-dashed border-border bg-card p-6">
              <p className="eyebrow">Описание в подготовке</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Подробная информация о продукте — состав, вес, способ хранения и
                рекомендации по приготовлению — будет добавлена позже.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <BtnLink to="/how-to-buy">Как купить</BtnLink>
              <BtnLink to="/contacts" variant="outline">
                Связаться
              </BtnLink>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="sand">
          <h2 className="text-3xl leading-tight sm:text-4xl">Смотрите также</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}

function ProductNotFound() {
  return (
    <Section>
      <h1 className="text-4xl">Продукт не найден</h1>
      <p className="mt-4 text-muted-foreground">
        Возможно, позиция ещё не добавлена в каталог.
      </p>
      <div className="mt-8">
        <BtnLink to="/products">Вся коллекция</BtnLink>
      </div>
    </Section>
  );
}

function ProductError() {
  return (
    <Section>
      <h1 className="text-4xl">Страница не загрузилась</h1>
      <p className="mt-4 text-muted-foreground">Попробуйте вернуться в каталог.</p>
      <div className="mt-8">
        <BtnLink to="/products">Вся коллекция</BtnLink>
      </div>
    </Section>
  );
}
