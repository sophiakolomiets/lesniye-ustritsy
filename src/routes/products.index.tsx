import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { Section } from "@/components/site/Section";
import { productCategories, products } from "@/data/products";
import featuredImage from "@/assets/featured-marinated.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Продукция — Лесные устрицы" },
      {
        name: "description",
        content:
          "Каталог бренда: сушёные, солёные, маринованные и замороженные грибы, готовые продукты, лесные ягоды.",
      },
      { property: "og:title", content: "Продукция — Лесные устрицы" },
      {
        property: "og:description",
        content: "Грибы, ягоды и продукты северного леса. Цены и наличие уточняются.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const signature = products.find((p) => p.slug === "belye-marinovannye")!;
  const second = products.find((p) => p.slug === "belye-sushenye")!;

  return (
    <>
      <PageHero
        eyebrow="Коллекция"
        title="Продукция"
        intro="Дикорастущие грибы и продукты северного леса. Цена и наличие указаны временно и будут обновлены."
      />

      {/* Featured pair */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <article className="border border-primary/50 bg-card">
            <ImagePlaceholder
              src={featuredImage}
              alt={signature.name}
              ratio="wide"
              label="Фото продукта"
            />
            <div className="p-8">
              <p className="eyebrow">Визитная карточка</p>
              <h2 className="mt-3 text-4xl leading-tight">{signature.name}</h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Белый гриб — классика северного леса. В «Лесных устрицах» ему отведено
                особое место.
              </p>
              <dl className="mt-6 grid max-w-xs gap-1 border-t border-border pt-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Цена</dt>
                  <dd className="font-medium">{signature.price}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Наличие</dt>
                  <dd className="font-medium">{signature.availability}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <BtnLink to="/products/$slug" params={{ slug: signature.slug }}>
                  Подробнее
                </BtnLink>
              </div>
            </div>
          </article>
          <ProductCard product={second} />
        </div>
      </Section>

      {/* Categories */}
      {productCategories.map((category, i) => {
        const items = products.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <Section key={category} tone={i % 2 === 0 ? "sand" : "cream"}>
            <header className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="text-3xl leading-tight sm:text-4xl">{category}</h2>
              <span className="eyebrow">{items.length} позиций</span>
            </header>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            {category === "Ягоды" || category === "Продукты из ягод" ? (
              <p className="mt-8 text-sm text-muted-foreground">
                Ассортимент может меняться в зависимости от сезона и наличия.
              </p>
            ) : null}
          </Section>
        );
      })}

      <Section tone="forest">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-md text-3xl leading-tight sm:text-4xl">
            Подобрать продукт и уточнить наличие
          </h2>
          <div className="flex flex-wrap gap-4">
            <BtnLink to="/how-to-buy" variant="invert">
              Как купить
            </BtnLink>
            <BtnLink to="/contacts" variant="invert">
              Связаться
            </BtnLink>
          </div>
        </div>
      </Section>
    </>
  );
}
