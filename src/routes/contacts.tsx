import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { ContactBlock, contactFields } from "@/components/site/ContactBlock";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Лесные устрицы" },
      {
        name: "description",
        content:
          "Контакты бренда «Лесные устрицы». Телефон, Instagram и адрес будут добавлены позже.",
      },
      { property: "og:title", content: "Контакты — Лесные устрицы" },
      {
        property: "og:description",
        content: "Свяжитесь с брендом напрямую — контактные данные в подготовке.",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Связь"
        title="Контакты"
        intro="Контактные данные будут добавлены перед публикацией сайта."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactFields.map((t) => (
              <ContactBlock key={t} label={t} />
            ))}
          </div>
          <ImagePlaceholder alt="Фото бренда" ratio="landscape" label="Фото" />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <BtnLink to="/products">Смотреть продукцию</BtnLink>
          <BtnLink to="/how-to-buy" variant="outline">
            Как купить
          </BtnLink>
        </div>
      </Section>
    </>
  );
}
