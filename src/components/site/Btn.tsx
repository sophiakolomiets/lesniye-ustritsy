import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "invert";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-forest-deep",
  outline: "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-primary underline underline-offset-8 decoration-sage hover:decoration-primary",
  invert: "border border-sage/50 text-sage hover:bg-sage hover:text-forest-deep",
};

type LinkProps = ComponentProps<typeof Link>;

export function BtnLink({
  variant = "solid",
  className = "",
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & LinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function BtnAnchor({
  variant = "solid",
  className = "",
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"a">) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
