import { FirIcon } from "./FirIcon";
import { BtnAnchor } from "./Btn";
import { PRICE_NOTICE } from "@/data/products";

/** «Оставить заявку» target. Replace with the Telegram bot URL once available. */
export const ORDER_URL = "tel:+79219972000";

export function BuyOptions() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="flex flex-col border border-border bg-card p-7">
        <FirIcon className="h-6 w-4 text-sage" />
        <h3 className="mt-4 text-2xl">Индивидуальный заказ</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          Свяжитесь с нами, чтобы задать вопросы о продукции и оставить заявку на заказ.
        </p>
        <div className="mt-6">
          <BtnAnchor href={ORDER_URL}>Оставить заявку</BtnAnchor>
        </div>
      </div>
      <div className="flex flex-col border border-border bg-card p-7">
        <FirIcon className="h-6 w-4 text-sage" />
        <h3 className="mt-4 text-2xl">Санкт-Петербург и Москва</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Свяжитесь с нами, чтобы уточнить условия покупки и доставки.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{PRICE_NOTICE}</p>
      </div>
      <div className="flex flex-col border border-border bg-card p-7">
        <FirIcon className="h-6 w-4 text-sage" />
        <h3 className="mt-4 text-2xl">Магазины</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Продукцию «Лесных устриц» можно найти в магазине «Супер Бабилон».
        </p>
      </div>
    </div>
  );
}
