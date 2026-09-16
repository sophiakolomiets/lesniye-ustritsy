import type { ReactNode } from "react";
import { FirIcon } from "./FirIcon";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="relative isolate">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-forest-deep/65" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-primary-foreground sm:px-8 md:py-36">
          {eyebrow ? <p className="eyebrow text-sage">{eyebrow}</p> : null}
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
          {intro ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-secondary px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <FirIcon className="h-8 w-6 text-sage" />
        {eyebrow ? <p className="eyebrow mt-5">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
