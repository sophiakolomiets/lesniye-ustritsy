import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { FirIcon } from "@/components/site/FirIcon";
import { BtnLink } from "@/components/site/Btn";

export const Route = createFileRoute("/kak-kupit")({
  head: () => ({
    meta: [
      { title: "Как купить — Лесные устрицы" },
      {
        name: "description",
        content: "Как приобрести продукцию «Лесных устриц»: прямой контакт с брендом.",
      },
      { property: "og:title", content: "Как купить — Лесные устрицы" },
      {
        property: "og:description",
        content: "Мы работаем с покупателями напрямую. Условия будут уточнены.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowToBuyPage,
});

const channels = ["Москва", "Санкт-Петербург", "Магазины", "Личный заказ"];

function HowToBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Покупка"
        title="Как купить?"
        intro="Мы работаем с частными покупателями напрямую. Сайт ведёт к личному контакту — так проще подобрать продукт и обсудить наличие."
      />
      <Section>
        <SectionHeading
          eyebrow="Каналы"
          title="Способы покупки"
          intro="Условия, цены и информация о доставке будут добавлены позже."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((t) => (
            <div key={t} className="border border-border bg-card p-7">
              <FirIcon className="h-6 w-4 text-sage" />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">Информация будет добавлена.</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <BtnLink to="/kontakty">Связаться</BtnLink>
        </div>
      </Section>
    </>
  );
}
