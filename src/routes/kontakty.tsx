import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/kontakty")({
  head: () => ({
    meta: [
      { title: "Контакты — Лесные устрицы" },
      {
        name: "description",
        content: "Контакты бренда «Лесные устрицы». Данные будут добавлены перед публикацией.",
      },
      { property: "og:title", content: "Контакты — Лесные устрицы" },
      {
        property: "og:description",
        content: "Как связаться с брендом «Лесные устрицы».",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Связаться с нами"
        intro="Контактные данные будут добавлены перед публикацией сайта."
      />
      <Section>
        <div className="grid max-w-3xl gap-8 sm:grid-cols-2">
          {["Телефон", "Instagram", "Адрес", "Другие контакты"].map((label) => (
            <ContactBlock key={label} label={label}>
              Уточняется
            </ContactBlock>
          ))}
        </div>
      </Section>
    </>
  );
}
