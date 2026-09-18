import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { BtnLink } from "@/components/site/Btn";
import forestsWide from "@/assets/forests-wide.jpg";

export const Route = createFileRoute("/lesa")({
  head: () => ({
    meta: [
      { title: "О наших лесах — Лесные устрицы" },
      {
        name: "description",
        content:
          "Северо-восток Ленинградской области, граница с Вологодской областью: леса, из которых приходят наши продукты.",
      },
      { property: "og:title", content: "О наших лесах — Лесные устрицы" },
      {
        property: "og:description",
        content: "Северные леса вепсского края: территория сбора дикорастущих грибов и ягод.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForestsPage,
});

const facts = [
  { t: "Винницы", d: "Село, вокруг которого строится вся работа." },
  { t: "Ленинградская область", d: "Северо-восток региона, северные леса." },
  { t: "Граница с Вологодской областью", d: "Малолюдные лесные территории." },
  { t: "Вепсская культура", d: "Исторический культурный регион вепсов." },
];

function ForestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Территория"
        title="О наших лесах"
        intro="Тихие северные леса, мох, ельники и болота. Здесь всё зависит от сезона, погоды и знания мест."
        image={forestsWide}
        imageAlt="Северная тайга"
      />
      <Section>
        <SectionHeading eyebrow="География" title="Где мы работаем" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {facts.map((f) => (
            <li key={f.t} className="border-l border-sage pl-5">
              <p className="font-display text-2xl leading-tight">{f.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="sand">
        <SectionHeading eyebrow="Галерея" title="Лес в разные сезоны" intro="Фотографии будут заменены реальными снимками." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ImagePlaceholder key={i} alt="Фотография леса" ratio="landscape" label="Фото" />
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
