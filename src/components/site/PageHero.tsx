import type { ReactNode } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-secondary px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-5xl leading-[1.02] sm:text-6xl md:text-7xl">{title}</h1>
          {intro ? <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {image ? (
          <ImagePlaceholder src={image} alt={imageAlt ?? "Тематическое изображение"} ratio="landscape" />
        ) : (
          <ImagePlaceholder alt={imageAlt ?? "Изображение будет добавлено"} ratio="landscape" />
        )}
      </div>
    </section>
  );
}