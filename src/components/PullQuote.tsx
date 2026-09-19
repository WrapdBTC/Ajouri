type Props = {
  children: React.ReactNode;
  cite?: string;
  className?: string;
  /** Large centered statement vs. editorial side quote */
  variant?: "statement" | "aside";
};

/** Quote as typographic object — not a bordered box. */
export function PullQuote({ children, cite, className = "", variant = "aside" }: Props) {
  if (variant === "statement") {
    return (
      <blockquote className={`reveal text-center ${className}`}>
        <p className="pull-quote mx-auto max-w-[28ch] px-1 text-ink">{children}</p>
        {cite && (
          <cite className="eyebrow mt-7 block not-italic text-muted">{cite}</cite>
        )}
      </blockquote>
    );
  }

  return (
    <blockquote className={`reveal ${className}`}>
      <p className="pull-quote text-ink">{children}</p>
      {cite && (
        <cite className="eyebrow mt-6 block not-italic text-muted">{cite}</cite>
      )}
    </blockquote>
  );
}
