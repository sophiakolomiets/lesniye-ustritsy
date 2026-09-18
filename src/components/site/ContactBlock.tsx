export function ContactBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-5">
      <p className="eyebrow">{label}</p>
      <div className="mt-3 text-lg text-foreground">{children}</div>
    </div>
  );
}