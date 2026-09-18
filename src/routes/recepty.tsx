import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { RecipeCard } from "@/components/site/RecipeCard";
import { BtnLink } from "@/components/site/Btn";

export const Route = createFileRoute("/recepty")({
  head: () => ({
    meta: [
      { title: "Рецепты и полезности — Лесные устрицы" },
      {
        name: "description",
        content: "Рецепты и материалы о приготовлении дикорастущих грибов и лесных ягод.",
      },
      { property: "og:title", content: "Рецепты и полезности — Лесные устрицы" },
      {
        property: "og:description",
        content: "Идеи блюд с белыми грибами, груздями и лесными ягодами.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecipesPage,
});

const recipes = [
  "Блюда с белыми грибами",
  "Рецепты с груздями",
  "Соус из белых грибов",
  "Как замачивать сушёные грибы",
  "Морошка: как подавать",
  "Брусничный соус к мясу",
];

function RecipesPage() {
  return (
    <>
      <PageHero
        eyebrow="Кухня"
        title="Рецепты и полезности"
        intro="Раздел в подготовке. Тексты и фотографии рецептов будут добавлены позже."
      />
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((t) => (
            <RecipeCard key={t} title={t} />
          ))}
        </div>
        <div className="mt-12">
          <BtnLink to="/produkciya" variant="outline">
            Продукция
          </BtnLink>
        </div>
      </Section>
    </>
  );
}
