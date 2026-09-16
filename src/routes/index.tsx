import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { FirDivider, FirIcon } from "@/components/site/FirIcon";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ProductCard } from "@/components/site/ProductCard";
import { RecipeCard } from "@/components/site/RecipeCard";
import { ReviewsPlaceholder } from "@/components/site/ReviewsPlaceholder";
import { ContactBlock, contactFields } from "@/components/site/ContactBlock";
import { Section, SectionHeading } from "@/components/site/Section";
import { homeCatalogue, products } from "@/data/products";
import heroForest from "@/assets/hero-forest.jpg";
import portrait from "@/assets/portrait-andrey.jpg";
import featuredImage from "@/assets/featured-marinated.jpg";
import forestsWide from "@/assets/forests-wide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Лесные устрицы — деликатесы северного леса" },
      {
        name: "description",
        content:
          "Дикорастущие грибы и лесные продукты из северо-востока Ленинградской области. Личный бренд Андрея Ильича Егорова.",
      },
      { property: "og:title", content: "Лесные устрицы — деликатесы северного леса" },
      {
        property: "og:description",
        content:
          "Грибы, ягоды и продукты из них: коллекция бренда Андрея Ильича Егорова.",
      },
    ],
  }),
  component: Home,
});

const processSteps = ["Природа", "Сбор", "Отбор", "Переработка", "Готовый продукт"];

function Home() {
  const signature = products.find((p) => p.slug === "belye-marinovannye")!;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <img
          src={heroForest}
          alt="Северный лес в утреннем свете"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/65" />
        <div className="relative mx-auto flex min-h-[86vh] w-full max-w-6xl flex-col justify-end px-5 py-20 sm:px-8">
          <FirIcon className="h-10 w-7 text-sage" />
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] text-primary-foreground sm:text-7xl md:text-8xl">
            «Лесные устрицы»
          </h1>
          <p className="mt-6 font-display text-2xl leading-snug text-sage sm:text-3xl">
            Деликатесы северного леса
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
            Дикорастущие грибы и лесные продукты из северо-востока Ленинградской
            области. Личный бренд Андрея Ильича Егорова.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <BtnLink to="/products">Смотреть продукцию</BtnLink>
            <BtnLink to="/about" variant="invert">
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
              Там, где начинается настоящий вкус
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                История «Лесных устриц» начинается с человека, который знает лес.
              </p>
              <p>
                Андрей Ильич Егоров много лет работает с дикорастущими грибами и другими
                дарами северной природы.
              </p>
              <p>
                Он знает, где искать, что выбрать и как сохранить главное — вкус
                настоящего продукта.
              </p>
              <p>Из этого опыта постепенно вырос бренд.</p>
              <p>
                Сегодня «Лесные устрицы» — это коллекция грибов, ягод и продуктов из них:
                от классических сушёных и солёных грибов до маринадов, соусов и других
                заготовок.
              </p>
            </div>
            <div className="mt-8">
              <BtnLink to="/about" variant="outline">
                История бренда
              </BtnLink>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ImagePlaceholder
              src={portrait}
              alt="Портрет Андрея Ильича Егорова"
              ratio="portrait"
              label="Портрет"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Временное изображение — будет заменено реальной фотографией.
            </p>
          </div>
        </div>
      </Section>

      {/* NORTHERN REGION */}
      <section className="relative isolate">
        <img
          src={forestsWide}
          alt="Северная тайга"
          loading="lazy"
          width={1920}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/65" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-primary-foreground sm:px-8 md:py-36">
          <p className="eyebrow text-sage">Происхождение</p>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">Северный край</h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-primary-foreground/90">
            <p>Веппский лес — особенное место.</p>
            <p>
              Здесь природа кажется масштабнее человека, расстояния — больше, а лес
              уходит далеко за горизонт.
            </p>
            <p>
              Это северо-восток Ленинградской области — край, связанный с Вепсской
              культурой и многовековой историей взаимодействия человека с природой.
            </p>
            <p>Для «Лесных устриц» это не просто точка на карте.</p>
            <p>Это место, откуда начинается путь продукта.</p>
          </div>
          <div className="mt-10">
            <BtnLink to="/forests" variant="invert">
              О наших лесах
            </BtnLink>
          </div>
        </div>
      </section>

      {/* WHY THE NAME */}
      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Имя</p>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
            Почему «Лесные устрицы»?
          </h2>
          <FirDivider className="mt-8" />
          <div className="mt-8 space-y-4 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Устрицы — один из самых известных природных деликатесов моря.
            </p>
            <p>
              Они стали символом редкого удовольствия: простого по форме, но особенного
              по вкусу.
            </p>
            <p>Мы перенесли этот образ с моря в лес.</p>
            <p>Потому что у северной природы тоже есть свои деликатесы.</p>
            <p>
              Грибы, ягоды, морошка, грузди, лисички, сморчки — продукты, которые не
              нужно создавать искусственно. Их уже создала природа.
            </p>
            <p>
              Так появился образ «Лесных устриц» — лесной интерпретации природного
              деликатеса.
            </p>
          </div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <SectionHeading
          eyebrow="Продукция"
          title="Коллекция"
          intro="Дикорастущие грибы и продукты северного леса. Цены и наличие будут указаны позже."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeCatalogue.map((p) => (
            <ProductCard key={p.slug} product={p} featured={p.slug === signature.slug} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Ассортимент может меняться в зависимости от сезона и наличия.
        </p>
        <div className="mt-10">
          <BtnLink to="/products" variant="outline">
            Вся коллекция
          </BtnLink>
        </div>
      </Section>

      {/* FEATURED */}
      <Section tone="forest">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <ImagePlaceholder
            src={featuredImage}
            alt="Белые маринованные"
            ratio="landscape"
            label="Фото продукта"
          />
          <div>
            <p className="eyebrow text-sage">Визитная карточка</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Белые маринованные
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-sage">
              <p>Белый гриб — классика северного леса.</p>
              <p>В «Лесных устрицах» ему отведено особое место.</p>
            </div>
            <dl className="mt-8 grid max-w-xs gap-2 border-t border-sage/30 pt-5 text-sm text-primary-foreground/90">
              <div className="flex justify-between">
                <dt className="text-sage">Цена</dt>
                <dd>{signature.price}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sage">Наличие</dt>
                <dd>{signature.availability}</dd>
              </div>
            </div>
            <div className="mt-9">
              <BtnLink
                to="/products/$slug"
                params={{ slug: signature.slug }}
                variant="invert"
              >
                Подробнее
              </BtnLink>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeading eyebrow="Процесс" title="Путь продукта" align="center" />
        <ol className="mt-14 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step} className="border-t border-border pt-5">
              <span className="font-display text-3xl text-sage">{`0${i + 1}`}</span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* RECIPES */}
      <Section tone="sand">
        <SectionHeading eyebrow="Кухня" title="Рецепты" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {["Блюда с белыми грибами", "Рецепты с груздями", "Соус из белых грибов"].map(
            (t) => (
              <RecipeCard key={t} title={t} />
            ),
          )}
        </div>
        <div className="mt-12">
          <BtnLink to="/recipes" variant="outline">
            Все рецепты
          </BtnLink>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section>
        <SectionHeading eyebrow="Обратная связь" title="Отзывы" />
        <div className="mt-12">
          <ReviewsPlaceholder />
        </div>
      </Section>

      {/* HOW TO BUY */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Покупка"
          title="Как купить?"
          intro="Мы работаем с частными покупателями напрямую. Информация о покупке будет добавлена позже."
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
        <div className="mt-12">
          <BtnLink to="/how-to-buy">Как купить</BtnLink>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section>
        <SectionHeading
          eyebrow="Социальные сети"
          title="Из жизни «Лесных устриц»"
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ImagePlaceholder key={i} alt="Фото бренда" ratio="square" label="Фото" />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <BtnLink to="/contacts" variant="outline">
            Перейти в Instagram
          </BtnLink>
        </div>
      </Section>

      {/* CONTACT */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-sage">Контакты</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">Контакты</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sage">
              Контактные данные будут добавлены перед публикацией сайта.
            </p>
            <div className="mt-8">
              <BtnLink to="/contacts" variant="invert">
                Связаться
              </BtnLink>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {contactFields.map((t) => (
              <ContactBlock key={t} label={t} invert />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
