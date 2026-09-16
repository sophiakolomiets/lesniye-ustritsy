import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { PageHero } from "@/components/site/PageHero";
import { RecipeCard } from "@/components/site/RecipeCard";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Рецепты — Лесные устрицы" },
      {
        name: "description",
        content:
          "Гастрономические материалы бренда: блюда с белыми грибами, груздями и грибными соусами.",
      },
      { property: "og:title", content: "Рецепты — Лесные устрицы" },
      {
        property: "og:description",
        content: "Подборка материалов о приготовлении лесных грибов и ягод.",
      },
    ],
  }),
  component: RecipesPage,
});

const recipes = [
  "Блюда с белыми грибами",
  "Рецепты с груздями",
  "Соус из белых грибов",
];

function RecipesPage() {
  return (
    <>
      <PageHero
        eyebrow="Кухня"
        title="Рецепты"
        intro="Раздел в подготовке: тексты и фотографии будут добавлены позже."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {recipes.map((t) => (
            <RecipeCard key={t} title={t} />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-md text-3xl leading-tight sm:text-4xl">
            Новые материалы будут появляться постепенно
          </h2>
          <BtnLink to="/products">Смотреть продукцию</BtnLink>
        </div>
      </Section>
    </>
  );
}
