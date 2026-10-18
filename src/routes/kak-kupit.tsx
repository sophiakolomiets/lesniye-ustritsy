import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { BuyOptions } from "@/components/site/BuyOptions";
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
        content: "Индивидуальный заказ, покупка в Санкт-Петербурге и Москве, магазин «Супер Бабилон».",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowToBuyPage,
});

function HowToBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Покупка"
        title="Как купить?"
        intro="Мы работаем с покупателями напрямую — так проще подобрать продукт, уточнить наличие и обсудить заказ."
      />
      <Section>
        <SectionHeading eyebrow="Варианты" title="Способы покупки" />
        <div className="mt-12">
          <BuyOptions />
        </div>
        <div className="mt-12">
          <BtnLink to="/kontakty">Связаться</BtnLink>
        </div>
      </Section>
    </>
  );
}
