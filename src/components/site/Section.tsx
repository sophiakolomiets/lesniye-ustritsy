import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "sand" | "forest";
}) {
  const toneClass =
    tone === "forest"
      ? "bg-forest-deep text-primary-foreground"
      : tone === "sand"
        ? "bg-secondary text-foreground"
        : "bg-background text-foreground";
  return (
    <section id={id} className={`${toneClass} px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <header
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${invert ? "text-sage" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">{title}</h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed ${invert ? "text-sage" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}
