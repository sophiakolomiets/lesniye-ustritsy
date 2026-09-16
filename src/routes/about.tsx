import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "@/components/site/Btn";
import { FirDivider } from "@/components/site/FirIcon";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import portrait from "@/assets/portrait-andrey.jpg";
import forestsWide from "@/assets/forests-wide.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О бренде — Лесные устрицы" },
      {
        name: "description",
        content:
          "«Лесные устрицы» — личный бренд Андрея Ильича Егорова: грибы, ягоды и продукты северного леса.",
      },
      { property: "og:title", content: "О бренде — Лесные устрицы" },
      {
        property: "og:description",
        content: "История бренда, Веппский лес и человек, стоящий за «Лесными устрицами».",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="О бренде" title="Там, где начинается настоящий вкус" />

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>История «Лесных устриц» начинается с человека, который знает лес.</p>
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
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Личный бренд, выросший из опыта
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>«Лесные устрицы» — это личный бренд Андрея Ильича Егорова.</p>
              <p>
                За ним стоит человек, который много лет знает северный лес, понимает его
                богатство и умеет работать с тем, что даёт природа.
              </p>
              <p>
                Для Андрея Ильича главное — качество. Не количество продукции и не
                масштаб производства, а возможность внимательно относиться к сырью,
                отбирать лучшее и сохранять удовольствие от настоящего лесного продукта.
              </p>
              <p>В основе бренда — грибы, ягоды и другие продукты северного края.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Место</p>
            <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">Веппский лес</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
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
            <div className="mt-8">
              <BtnLink to="/forests" variant="outline">
                О наших лесах
              </BtnLink>
            </div>
          </div>
          <ImagePlaceholder src={forestsWide} alt="Веппский лес" ratio="landscape" />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Имя</p>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
            Почему «Лесные устрицы»?
          </h2>
          <FirDivider className="mt-8" />
          <div className="mt-8 space-y-4 text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>Устрицы — один из самых известных природных деликатесов моря.</p>
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

      <Section tone="sand">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ImagePlaceholder
            src={portrait}
            alt="Андрей Ильич Егоров"
            ratio="portrait"
            label="Портрет"
          />
          <div>
            <SectionHeading
              eyebrow="Человек, стоящий за брендом"
              title="Андрей Ильич Егоров"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>За брендом стоит не безликое производство.</p>
              <p>За ним стоит человек.</p>
              <p>
                Андрей Ильич Егоров — основатель бренда и человек, много лет работающий
                с северным лесом и его дарами.
              </p>
              <p>
                Его опыт начинается задолго до появления готового продукта — с понимания
                природы, поиска, отбора и работы с сырьём.
              </p>
              <p>Именно это личное отношение стало основой бренда.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <BtnLink to="/products">Смотреть продукцию</BtnLink>
              <BtnLink to="/contacts" variant="outline">
                Связаться
              </BtnLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
