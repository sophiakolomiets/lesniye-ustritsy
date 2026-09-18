import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ProductCategory } from "@/components/site/ProductCategory";
import { BtnLink } from "@/components/site/Btn";
import { products, productCategories } from "@/data/products";
import featured from "@/assets/featured-marinated.jpg";

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
        intro="Ассортимент прототипа. Цены, наличие и фотографии будут добавлены позже."
        image={featured}
        imageAlt="Маринованные белые грибы"
      />
      <Section>
        <div className="space-y-16">
          {productCategories.map((category) => {
            const items = products.filter((p) => p.category === category);
            if (items.length === 0) return null;
            return <ProductCategory key={category} title={category} products={items} />;
          })}
        </div>
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
