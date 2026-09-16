import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { FirDivider } from "@/components/site/FirIcon";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import forestsWide from "@/assets/forests-wide.jpg";
import heroForest from "@/assets/hero-forest.jpg";

export const Route = createFileRoute("/forests")({
  head: () => ({
    meta: [
      { title: "О наших лесах — Лесные устрицы" },
      {
        name: "description",
        content:
          "Веппский лес и северо-восток Ленинградской области — место, откуда начинается путь продукта.",
      },
      { property: "og:title", content: "О наших лесах — Лесные устрицы" },
      {
        property: "og:description",
        content: "Северная природа, Вепсский край и связь места с продуктом.",
      },
    ],
  }),
  component: ForestsPage,
});

function ForestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Территория"
        title="О наших лесах"
        intro="Северо-восток Ленинградской области: тишина, простор и природа, которая задаёт ритм всей работе."
        image={heroForest}
      />

      <Section>
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>Веппский лес — особенное место.</p>
          <p>
            Здесь природа кажется масштабнее человека, расстояния — больше, а лес уходит
            далеко за горизонт.
          </p>
          <p>
            Это край, связанный с Вепсской культурой и многовековой историей
            взаимодействия человека с природой.
          </p>
          <p>Для «Лесных устриц» это не просто точка на карте.</p>
          <p>Это место, откуда начинается путь продукта.</p>
        </div>
        <FirDivider className="mt-16" />
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2">
          <ImagePlaceholder src={forestsWide} alt="Северная тайга" ratio="landscape" />
          <ImagePlaceholder alt="Лес осенью" ratio="landscape" label="Фотография леса" />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Сезонность",
              d: "Каждый сбор зависит от погоды и времени года — ассортимент меняется вместе с лесом.",
            },
            {
              t: "Знание мест",
              d: "Маршруты и участки выбираются по многолетнему личному опыту.",
            },
            {
              t: "Связь с продуктом",
              d: "Путь от природы до готовой банки остаётся коротким и обозримым.",
            },
          ].map((c) => (
            <div key={c.t} className="border-t border-border pt-5">
              <h2 className="text-2xl">{c.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ImagePlaceholder key={i} alt="Лес" ratio="square" label="Фото" />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <BtnLink to="/products">Смотреть продукцию</BtnLink>
          <BtnLink to="/about" variant="outline">
            О бренде
          </BtnLink>
        </div>
      </Section>
    </>
  );
}
