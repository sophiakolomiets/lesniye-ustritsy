import { FirIcon } from "./FirIcon";

export function ReviewsPlaceholder() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex min-h-52 flex-col items-center justify-center gap-4 border border-dashed border-border bg-card px-8 py-12 text-center"
        >
          <FirIcon className="h-7 w-5 text-sage" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Отзывы клиентов будут добавлены после отбора материалов.
          </p>
        </div>
      ))}
    </div>
  );
}
