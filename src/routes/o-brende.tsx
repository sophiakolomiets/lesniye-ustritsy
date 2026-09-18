import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { BtnLink } from "@/components/site/Btn";
import { FirIcon } from "@/components/site/FirIcon";
import portrait from "@/assets/portrait-andrey.jpg";

export const Route = createFileRoute("/o-brende")({
  head: () => ({
    meta: [
      { title: "О бренде — Лесные устрицы" },
      {
        name: "description",
        content:
          "Личный бренд Андрея Ильича Егорова: сбор, отбор и переработка дикорастущих грибов северного леса.",
      },
      { property: "og:title", content: "О бренде — Лесные устрицы" },
      {
        property: "og:description",
        content: "История бренда, подход к сбору и переработке лесных продуктов.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Собственный сбор", d: "Большая часть сырья собирается лично, в известных, проверенных местах." },
  { t: "Ручной отбор", d: "Каждая партия проходит отбор: качество важнее объёма." },
  { t: "Небольшие партии", d: "Переработка выполняется малыми партиями, без промышленного потока." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О бренде"
        title="Человек, который знает этот лес"
        intro="За брендом «Лесные устрицы» стоит Андрей Ильич Егоров. Многие годы он собирает и перерабатывает дикорастущие грибы и другие лесные продукты."
        image={portrait}
        imageAlt="Портрет Андрея Егорова"
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Подход" title="Опыт вместо случайности" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Знание леса определяет всё: какие места выбирать, что взять, а что
              оставить, и как обращаться с сырьём дальше. Работа идёт по сезону —
              от весенних сморчков до осенних груздей.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Тексты этого раздела временные и будут дополнены вместе с реальными
              фотографиями и деталями.
            </p>
          </div>
          <ul className="grid gap-8">
            {values.map((v) => (
              <li key={v.t}>
                <FirIcon className="h-6 w-4 text-sage" />
                <h3 className="mt-3 text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <BtnLink to="/produkciya">Смотреть продукцию</BtnLink>
          <BtnLink to="/lesa" variant="outline">
            О наших лесах
          </BtnLink>
        </div>
      </Section>
    </>
  );
}
