import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Tone = "hub" | "michelle" | "sabine" | "isabelle";

const tones: Record<Tone, Record<Variant, string>> = {
  hub: {
    solid: "bg-ink text-paper hover:bg-ink/90 shadow-lg shadow-ink/10",
    outline: "border border-ink/25 text-ink hover:border-ink/60",
    ghost: "text-ink hover:bg-ink/5",
  },
  michelle: {
    solid:
      "bg-[color:var(--color-m-accent-deep)] text-white hover:opacity-90 shadow-lg shadow-[color:var(--color-m-accent-deep)]/25",
    outline:
      "border border-[color:var(--color-m-accent-deep)]/40 text-[color:var(--color-m-ink)] hover:border-[color:var(--color-m-accent-deep)]",
    ghost: "text-[color:var(--color-m-accent-deep)] hover:bg-black/5",
  },
  sabine: {
    solid:
      "bg-[color:var(--color-s-accent)] text-[color:var(--color-s-bg)] hover:bg-[color:var(--color-s-accent-soft)] shadow-lg shadow-[color:var(--color-s-accent)]/20",
    outline:
      "border border-[color:var(--color-s-accent)]/50 text-[color:var(--color-s-accent-soft)] hover:border-[color:var(--color-s-accent)]",
    ghost: "text-[color:var(--color-s-accent-soft)] hover:bg-white/5",
  },
  isabelle: {
    solid:
      "bg-[color:var(--color-i-ink)] text-[color:var(--color-i-bg)] hover:bg-white",
    outline:
      "border border-[color:var(--color-i-steel)]/50 text-[color:var(--color-i-ink)] hover:border-[color:var(--color-i-ink)]",
    ghost:
      "text-[color:var(--color-i-steel)] hover:text-[color:var(--color-i-ink)]",
  },
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  tone = "hub",
  external,
  className = "",
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300 ${tones[tone][variant]} ${className}`;
  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={classes}
      >
        {children}
        {external ? <span aria-hidden>↗</span> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
