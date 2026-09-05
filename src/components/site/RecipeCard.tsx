import { ImagePlaceholder } from "./ImagePlaceholder";

export function RecipeCard({ title }: { title: string }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card">
      <ImagePlaceholder alt={title} ratio="landscape" label="Фото рецепта" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl leading-tight">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          Материал в подготовке. Текст рецепта будет добавлен позже.
        </p>
        <span className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary underline decoration-sage underline-offset-8">
          Подробнее
        </span>
      </div>
    </article>
  );
}
