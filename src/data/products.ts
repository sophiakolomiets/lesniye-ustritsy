export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /** Temporary placeholder values for the prototype. */
  price: string;
  availability: string;
  note?: string;
  highlight?: boolean;
};

export const productCategories = [
  "Сушёные грибы",
  "Замороженные",
  "Маринованные",
  "Солёные",
  "Другие продукты",
  "Ягоды",
  "Продукты из ягод",
] as const;

const P = { price: "0 ₽", availability: "Нет в наличии" };

export const products: Product[] = [
  {
    slug: "belye-marinovannye",
    name: "Белые маринованные",
    category: "Маринованные",
    description: "Визитная карточка бренда. Отборные белые грибы в маринаде.",
    highlight: true,
    ...P,
  },
  {
    slug: "belye-sushenye",
    name: "Белые сушёные",
    category: "Сушёные грибы",
    description: "Сушёные белые грибы северного леса.",
    highlight: true,
    ...P,
  },
  {
    slug: "krasnye-sushenye",
    name: "Красные сушёные",
    category: "Сушёные грибы",
    description: "Сушёные красные грибы.",
    ...P,
  },
  {
    slug: "lisichki-sushenye",
    name: "Лисички сушёные",
    category: "Сушёные грибы",
    description: "Сушёные лисички.",
    ...P,
  },
  {
    slug: "sushenaya-smes",
    name: "Сушёная смесь",
    category: "Сушёные грибы",
    description: "Смесь сушёных лесных грибов.",
    ...P,
  },
  {
    slug: "smorchki-sushenye",
    name: "Сморчки",
    category: "Сушёные грибы",
    description: "Весенние сморчки.",
    ...P,
  },
  {
    slug: "belye-zamorozhennye",
    name: "Белые грибы замороженные",
    category: "Замороженные",
    description: "Белые грибы после сбора и отбора, замороженные.",
    ...P,
  },
  {
    slug: "podosinoviki-marinovannye",
    name: "Подосиновики маринованные",
    category: "Маринованные",
    description: "Подосиновики в маринаде.",
    ...P,
  },
  {
    slug: "solenye-mlechniki",
    name: "Солёные млечники (серянки)",
    category: "Солёные",
    description: "Солёные млечники традиционного посола.",
    ...P,
  },
  {
    slug: "belye-gruzdi",
    name: "Белые грузди",
    category: "Солёные",
    description: "Солёные белые грузди.",
    ...P,
  },
  {
    slug: "chernye-gruzdi",
    name: "Чёрные грузди",
    category: "Солёные",
    description: "Солёные чёрные грузди.",
    ...P,
  },
  {
    slug: "volnushki",
    name: "Волнушки",
    category: "Солёные",
    description: "Солёные волнушки.",
    ...P,
  },
  {
    slug: "veppskoe-assorti",
    name: "Веппское ассорти",
    category: "Солёные",
    description: "Ассорти солёных лесных грибов.",
    ...P,
  },
  {
    slug: "arhangelskie-gruzdi",
    name: "Архангельские грузди холодного посола",
    category: "Солёные",
    description: "Грузди холодного посола.",
    ...P,
  },
  {
    slug: "sous-belye-slivki-syr",
    name: "Соус из белых грибов в сливках с сыром",
    category: "Другие продукты",
    description: "Готовый соус из белых грибов.",
    ...P,
  },
  {
    slug: "smorchki-konservirovannye",
    name: "Сморчки приготовленные, консервированные",
    category: "Другие продукты",
    description: "Приготовленные сморчки в консервации.",
    ...P,
  },
  {
    slug: "lisichki-konservirovannye",
    name: "Лисички приготовленные, консервированные",
    category: "Другие продукты",
    description: "Приготовленные лисички в консервации.",
    ...P,
  },
  {
    slug: "moroshka",
    name: "Морошка",
    category: "Ягоды",
    description: "Северная лесная ягода.",
    note: "Сезонно / под заказ",
    ...P,
  },
  {
    slug: "chernika",
    name: "Черника",
    category: "Ягоды",
    description: "Лесная черника.",
    note: "Сезонно / под заказ",
    ...P,
  },
  {
    slug: "brusnika",
    name: "Брусника",
    category: "Ягоды",
    description: "Лесная брусника.",
    note: "Сезонно / под заказ",
    ...P,
  },
  {
    slug: "klyukva",
    name: "Клюква",
    category: "Ягоды",
    description: "Болотная клюква.",
    note: "Сезонно / под заказ",
    ...P,
  },
  {
    slug: "golubika",
    name: "Голубика",
    category: "Ягоды",
    description: "Лесная голубика.",
    note: "Сезонно / под заказ",
    ...P,
  },
  {
    slug: "varenye",
    name: "Варенье",
    category: "Продукты из ягод",
    description: "Варенье из лесных ягод.",
    note: "Перспективная позиция",
    ...P,
  },
  {
    slug: "brusnichnyy-sous",
    name: "Брусничный соус",
    category: "Продукты из ягод",
    description: "Соус из лесной брусники.",
    note: "Перспективная позиция",
    ...P,
  },
];
