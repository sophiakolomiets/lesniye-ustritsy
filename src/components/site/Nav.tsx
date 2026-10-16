import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FirIcon } from "./FirIcon";

export const navItems = [
  { to: "/", label: "Главная" },
  { to: "/o-brende", label: "О бренде" },
  { to: "/produkciya", label: "Продукция" },
  { to: "/lesa", label: "О наших лесах" },
  { to: "/kak-kupit", label: "Как купить" },
  { to: "/kontakty", label: "Контакты" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <FirIcon className="h-7 w-5 shrink-0 text-primary" />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none tracking-tight sm:text-2xl">
              Лесные устрицы
            </span>
            <span className="mt-1 hidden text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Дикорастущие грибы северного леса
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-sm border border-border p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl text-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
