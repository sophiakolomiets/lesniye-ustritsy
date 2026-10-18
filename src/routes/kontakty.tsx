import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ContactBlock } from "@/components/site/ContactBlock";
import { contacts } from "@/data/contacts";

export const Route = createFileRoute("/kontakty")({
  head: () => ({
    meta: [
      { title: "Контакты — Лесные устрицы" },
      {
        name: "description",
        content: "Контакты бренда «Лесные устрицы». Телефон, Instagram, email и адрес.",
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
        intro="Задайте вопрос о продукции или оставьте заявку на заказ."
      />
      <Section>
        <div className="grid max-w-3xl gap-8 sm:grid-cols-2">
          {contacts.map((c) => (
            <ContactBlock key={c.label} label={c.label}>
              {c.href ? (
                <a href={c.href} className="break-words hover:text-primary" {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {c.value}
                </a>
              ) : (
                c.value
              )}
            </ContactBlock>
          ))}
        </div>
      </Section>
    </>
  );
}
