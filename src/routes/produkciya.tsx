import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ProductCategory } from "@/components/site/ProductCategory";
import { BtnLink } from "@/components/site/Btn";
import { products, productCategories, PRICE_NOTICE } from "@/data/products";
import featuredAsset from "@/assets/photos/featured-brand.jpeg.asset.json";
const featured = featuredAsset.url;

export const Route = createFileRoute("/produkciya")({
  head: () => ({
    meta: [
      { title: "Продукция — Лесные устрицы" },
      {
        name: "description",
        content:
          "Каталог продукции: сушёные, солёные, маринованные и замороженные грибы, грибные продукты и лесные ягоды.",
      },
      { property: "og:title", content: "Продукция — Лесные устрицы" },
      {
        property: "og:description",
        content: "Сушёные, солёные, маринованные грибы и лесные ягоды северного леса.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Каталог"
        title="Продукция"
        intro="Грибы, ягоды и продукты из них — по каталогу 2026 года. Наличие уточняйте при заказе."
        image={featured}
        imageAlt="Белые маринованные — визитная карточка бренда"
      />
      <Section>
        <div className="space-y-16">
          {productCategories.map((category) => {
            const items = products.filter((p) => p.category === category);
            if (items.length === 0) return null;
            return <ProductCategory key={category} title={category} products={items} />;
          })}
        </div>
        <p className="mt-12 max-w-2xl border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
          {PRICE_NOTICE}
        </p>
        <div className="mt-16 flex flex-wrap gap-4">
          <BtnLink to="/kak-kupit">Как купить</BtnLink>
          <BtnLink to="/kontakty" variant="outline">
            Связаться
          </BtnLink>
        </div>
      </Section>
    </>
  );
}
