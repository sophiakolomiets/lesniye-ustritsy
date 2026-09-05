export function FirIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2 L17 11 H14.5 L19 19 H15.5 L21 27 H3 L8.5 19 H5 L9.5 11 H7 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M12 27 V31" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FirDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-border sm:w-24" />
      <FirIcon className="h-5 w-4 text-sage" />
      <span className="h-px w-16 bg-border sm:w-24" />
    </div>
  );
}
