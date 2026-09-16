import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { FirIcon } from "@/components/site/FirIcon";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/how-to-buy")({
  head: () => ({
    meta: [
      { title: "Как купить — Лесные устрицы" },
      {
        name: "description",
        content:
          "Информация о покупке продукции «Лесных устриц». Условия будут добавлены позже.",
      },
      { property: "og:title", content: "Как купить — Лесные устрицы" },
      {
        property: "og:description",
        content: "Москва, Санкт-Петербург, магазины и личный заказ — раздел в подготовке.",
      },
    ],
  }),
  component: HowToBuyPage,
});

const blocks = [
  { t: "Москва", d: "Информация о покупке в Москве будет добавлена." },
  { t: "Санкт-Петербург", d: "Информация о покупке в Санкт-Петербурге будет добавлена." },
  { t: "Магазины", d: "Список точек продаж появится после согласования." },
  { t: "Личный заказ", d: "Порядок личного заказа будет описан позже." },
];

function HowToBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Покупка"
        title="Как купить?"
        intro="Бренд работает с частными покупателями напрямую. Точные условия покупки будут добавлены на сайт позже."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.t} className="border border-border bg-card p-8">
              <FirIcon className="h-6 w-4 text-sage" />
              <h2 className="mt-4 text-2xl">{b.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Ассортимент может меняться в зависимости от сезона и наличия. Уточнить
          актуальные позиции можно через личный контакт.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <BtnLink to="/contacts">Связаться</BtnLink>
          <BtnLink to="/products" variant="outline">
            Смотреть продукцию
          </BtnLink>
        </div>
      </Section>
    </>
  );
}
