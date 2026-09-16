export const contactFields = ["Телефон", "Instagram", "Адрес", "Другие контакты"];

export function ContactBlock({
  label,
  value = "Будет добавлено",
  invert = false,
}: {
  label: string;
  value?: string;
  invert?: boolean;
}) {
  return (
    <div className={`border-t pt-4 ${invert ? "border-sage/30" : "border-border"}`}>
      <p className={`eyebrow ${invert ? "text-sage" : ""}`}>{label}</p>
      <p className={`mt-2 ${invert ? "text-primary-foreground/85" : "text-foreground"}`}>
        {value}
      </p>
    </div>
  );
}
