import { FirIcon } from "./FirIcon";

type Props = {
  /** Optional real image src. When absent, a branded placeholder is shown. */
  src?: string;
  alt: string;
  label?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "tall";
  className?: string;
  priority?: boolean;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
};

export function ImagePlaceholder({
  src,
  alt,
  label = "Фото будет добавлено",
  ratio = "landscape",
  className = "",
  priority = false,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-secondary ${ratioClass[ratio]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <FirIcon className="h-8 w-6 text-sage" />
          <span className="eyebrow text-muted-foreground">{label}</span>
        </div>
      )}
    </div>
  );
}
