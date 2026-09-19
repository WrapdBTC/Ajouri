import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Tone = "hub" | "michelle" | "sabine" | "isabelle";

const tones: Record<Tone, Record<Variant, string>> = {
  hub: {
    solid: "bg-ink text-paper hover:bg-ink/90",
    outline: "border border-ink/25 text-ink hover:border-ink/60",
    ghost: "text-ink hover:bg-ink/5",
  },
  michelle: {
    solid:
      "bg-[color:var(--color-m-ink)] text-[color:var(--color-m-surface)] hover:opacity-90",
    outline:
      "border border-[color:var(--color-m-accent-deep)]/40 text-[color:var(--color-m-ink)] hover:border-[color:var(--color-m-accent-deep)]",
    ghost: "text-[color:var(--color-m-accent-deep)] hover:bg-black/5",
  },
  sabine: {
    solid:
      "bg-[color:var(--color-s-accent)] text-[color:var(--color-s-bg)] hover:bg-[color:var(--color-s-accent-soft)]",
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
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-[0.14em] uppercase transition-all duration-300 ${tones[tone][variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <span aria-hidden>↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
