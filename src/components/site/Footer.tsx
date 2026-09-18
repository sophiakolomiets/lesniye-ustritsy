import { Link } from "@tanstack/react-router";
import { FirIcon } from "./FirIcon";
import { navItems } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-forest-deep px-5 py-16 text-primary-foreground sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <FirIcon className="h-7 w-5 text-sage" />
            <span className="font-display text-2xl">Лесные устрицы</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage">
            Дикорастущие грибы и лесные продукты северного края. Личный бренд Андрея
            Егорова.
          </p>
        </div>

        <div>
          <p className="eyebrow text-sage">Разделы</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-primary-foreground/85 hover:text-sage">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sage">Контакты</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li><a href="tel:+79219972000" className="hover:text-sage">+7 921 997-20-00</a></li>
            <li><a href="mailto:9972000@gmail.com" className="hover:text-sage">9972000@gmail.com</a></li>
            <li>Instagram — @_griboedoff</li>
          </ul>
          <p className="mt-6 text-xs text-sage">
            Версия 0.1 — визуальный прототип. Фотографии и данные каталога будут уточняться.
          </p>
        </div>
      </div>
    </footer>
  );
}
