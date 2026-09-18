import { createFileRoute, Link } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { FirDivider, FirIcon } from "@/components/site/FirIcon";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ProductCard } from "@/components/site/ProductCard";
import { RecipeCard } from "@/components/site/RecipeCard";
import { ReviewsPlaceholder } from "@/components/site/ReviewsPlaceholder";
import { Section, SectionHeading } from "@/components/site/Section";
import { products } from "@/data/products";
import heroForest from "@/assets/hero-forest.jpg";
import portrait from "@/assets/portrait-andrey.jpg";
import featured from "@/assets/featured-marinated.jpg";
import forestsWide from "@/assets/forests-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Лесные устрицы — дикорастущие грибы и лесные продукты" },
      {
        name: "description",
        content:
          "Дикорастущие грибы и лесные продукты северного леса. Семейный бренд Андрея Ильича Егорова, Винницы, Ленинградская область.",
      },
      { property: "og:title", content: "Лесные устрицы — дикорастущие грибы северного леса" },
      {
        property: "og:description",
        content:
          "Дикорастущие грибы и лесные продукты северного леса. Собственный сбор, отбор и переработка.",
      },
    ],
  }),
  component: Home,
});

const journey = ["Лес", "Сбор", "Отбор", "Переработка", "Готовый продукт"];

const originFacts = [
  { title: "Винницы", text: "Село, вокруг которого строится вся работа бренда." },
  { title: "Ленинградская область", text: "Северо-восток региона, северные леса." },
  { title: "Граница с Вологодской областью", text: "Малолюдные лесные территории." },
  { title: "Вепсская культура", text: "Исторический культурный регион вепсов." },
  { title: "Веппский лес", text: "Природная территория, давшая имя ассорти." },
];

function Home() {
  const catalogue = products.slice(0, 8);
  const signature = products.find((p) => p.slug === "belye-marinovannye")!;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <img
          src={heroForest}
          alt="Северный лес в утреннем тумане"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/65" />
        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-end px-5 py-20 sm:px-8 md:min-h-[92vh]">
          <FirIcon className="h-10 w-7 text-sage" />
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] text-primary-foreground sm:text-7xl md:text-8xl">
            «Лесные устрицы»
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-sage sm:text-3xl">
            Дикорастущие грибы и лесные продукты северного леса
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            Село Винницы, северо-восток Ленинградской области. Личный бренд Андрея
            Ильича Егорова: собственный сбор, тщательный отбор и переработка лесных
            даров.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BtnLink to="/produkciya">Смотреть продукцию</BtnLink>
            <BtnLink to="/o-brende" variant="invert">
              О бренде
            </BtnLink>
          </div>
        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="eyebrow">О бренде</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
              Человек, который знает этот лес
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              За брендом стоит Андрей Ильич Егоров. Многие годы он собирает и
              перерабатывает дикорастущие грибы и другие лесные продукты в северной
              части Ленинградской области.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Знание леса, личный опыт и внимание к качеству определяют всё: какие
              места выбирать, что взять, а что оставить, и как обращаться с сырьём
              дальше.
            </p>
            <div className="mt-8">
              <BtnLink to="/o-brende" variant="outline">
                Подробнее
              </BtnLink>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ImagePlaceholder
              src={portrait}
              alt="Портрет Андрея Егорова"
              ratio="portrait"
              label="Портрет"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Временное изображение. Будет заменено реальной фотографией.
            </p>
          </div>
        </div>
      </Section>

      {/* ORIGIN */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Происхождение"
          title="Откуда всё начинается"
          intro="Северные леса на границе Ленинградской и Вологодской областей, вепсский культурный регион."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <ImagePlaceholder
            src={forestsWide}
            alt="Северный лес рядом с Винницами"
            ratio="landscape"
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {originFacts.map((f) => (
              <li key={f.title} className="border-l border-sage pl-5">
                <p className="font-display text-2xl leading-tight">{f.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <ol className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {journey.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="font-display text-3xl text-sage">{`0${i + 1}`}</span>
                <span className="pt-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <SectionHeading
          eyebrow="Каталог"
          title="Наша продукция"
          intro="Сушёные, солёные, маринованные и замороженные грибы, готовые грибные продукты, лесные ягоды. Цены и наличие будут указаны позже."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {catalogue.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-12">
          <BtnLink to="/produkciya" variant="outline">
            Весь каталог
          </BtnLink>
        </div>
      </Section>

      {/* FEATURED */}
      <Section tone="forest">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <ImagePlaceholder
            src={featured}
            alt="Белые маринованные грибы"
            ratio="landscape"
            label="Фото продукта"
          />
          <div>
            <p className="eyebrow text-sage">Визитная карточка бренда</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Белые маринованные
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sage">
              {signature.description} Главный продукт «Лесных устриц» — с него чаще
              всего начинается знакомство с брендом.
            </p>
            <dl className="mt-8 grid max-w-xs gap-2 border-t border-sage/30 pt-5 text-sm text-primary-foreground/90">
              <div className="flex justify-between">
                <dt className="text-sage">Цена</dt>
                <dd>{signature.price}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sage">Наличие</dt>
                <dd>{signature.availability}</dd>
              </div>
            </dl>
            <div className="mt-9 flex flex-wrap gap-4">
              <BtnLink to="/kak-kupit" variant="invert">
                Как купить
              </BtnLink>
              <Link
                to="/produkciya"
                className="self-center text-xs font-semibold uppercase tracking-[0.16em] text-sage underline underline-offset-8"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* QUALITY */}
      <Section>
        <SectionHeading
          eyebrow="Качество"
          title="Почему это другой продукт"
          align="center"
        />
        <FirDivider className="mt-8" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Собственный сбор",
              d: "Подавляющее большинство сырья собирается самостоятельно — примерно 70–100% в зависимости от продукта.",
            },
            {
              t: "Северный регион",
              d: "Леса северо-востока Ленинградской области, на границе с Вологодской.",
            },
            {
              t: "Отбор и переработка",
              d: "Сырьё проходит ручной отбор, переработка выполняется небольшими партиями.",
            },
          ].map((c) => (
            <div key={c.t}>
              <FirIcon className="h-7 w-5 text-sage" />
              <h3 className="mt-4 text-2xl">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-xl text-center font-display text-2xl leading-snug">
          Качество — главная ценность бренда.
        </p>
      </Section>

      {/* OUR FORESTS */}
      <section className="relative isolate">
        <img
          src={forestsWide}
          alt="Северная тайга"
          loading="lazy"
          width={1920}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/60" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-28 text-primary-foreground sm:px-8 md:py-40">
          <p className="eyebrow text-sage">Территория</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
            О наших лесах
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90">
            Тихие северные леса, мох, ельники и болота. Здесь всё зависит от сезона,
            погоды и знания мест — и именно поэтому у каждого урожая свой характер.
          </p>
          <div className="mt-10">
            <BtnLink to="/lesa" variant="invert">
              Подробнее
            </BtnLink>
          </div>
        </div>
      </section>

      {/* RECIPES */}
      <Section tone="sand">
        <SectionHeading eyebrow="Кухня" title="Рецепты и полезности" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {["Блюда с белыми грибами", "Рецепты с груздями", "Соус из белых грибов"].map(
            (t) => (
              <RecipeCard key={t} title={t} />
            ),
          )}
        </div>
        <div className="mt-12">
          <BtnLink to="/recepty" variant="outline">
            Все материалы
          </BtnLink>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section>
        <SectionHeading eyebrow="Отзывы" title="Что говорят наши клиенты" align="center" />
        <div className="mt-12">
          <ReviewsPlaceholder />
        </div>
      </Section>

      {/* HOW TO BUY */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Покупка"
          title="Как купить?"
          intro="Мы работаем с частными покупателями напрямую. Сайт ведёт к личному контакту — так проще подобрать продукт и обсудить наличие."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Москва", "Санкт-Петербург", "Магазины", "Личный заказ"].map((t) => (
            <div key={t} className="border border-border bg-card p-7">
              <FirIcon className="h-6 w-4 text-sage" />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Информация будет добавлена.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <BtnLink to="/kak-kupit">Как купить</BtnLink>
          <BtnLink to="/kontakty" variant="outline">
            Связаться
          </BtnLink>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section>
        <SectionHeading
          eyebrow="Социальные сети"
          title="Из жизни Лесных устриц"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ImagePlaceholder key={i} alt="Фото из жизни бренда" ratio="square" label="Фото" />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <BtnLink to="/kontakty" variant="outline">
            Перейти в Instagram
          </BtnLink>
        </div>
      </Section>

      {/* CONTACTS */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-sage">Контакты</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">Связаться с нами</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sage">
              Контактные данные будут добавлены перед публикацией сайта.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {["Телефон", "Instagram", "Адрес", "Другие контакты"].map((t) => (
              <div key={t} className="border-t border-sage/30 pt-4">
                <dt className="eyebrow text-sage">{t}</dt>
                <dd className="mt-2 text-primary-foreground/85">Уточняется</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
