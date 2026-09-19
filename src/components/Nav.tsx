import Link from "next/link";
import { members } from "@/lib/members";

type NavProps = {
  theme?: "hub" | "michelle" | "sabine" | "isabelle";
};

const themes = {
  hub: {
    wrap: "bg-paper/80 text-ink border-black/5",
    brand: "text-ink",
    link: "text-muted hover:text-ink",
  },
  michelle: {
    wrap: "bg-[color:var(--color-m-bg)]/85 text-[color:var(--color-m-ink)] border-[color:var(--color-m-accent)]/20",
    brand: "text-[color:var(--color-m-ink)]",
    link: "text-[color:var(--color-m-accent-deep)]/80 hover:text-[color:var(--color-m-ink)]",
  },
  sabine: {
    wrap: "bg-[color:var(--color-s-bg)]/90 text-[color:var(--color-s-ink)] border-white/10",
    brand: "text-[color:var(--color-s-accent-soft)]",
    link: "text-[color:var(--color-s-ink)]/70 hover:text-[color:var(--color-s-accent-soft)]",
  },
  isabelle: {
    wrap: "bg-[color:var(--color-i-bg)]/90 text-[color:var(--color-i-ink)] border-white/10",
    brand: "text-[color:var(--color-i-ink)]",
    link: "text-[color:var(--color-i-steel)] hover:text-[color:var(--color-i-ink)]",
  },
};

export function Nav({ theme = "hub" }: NavProps) {
  const t = themes[theme];
  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${t.wrap}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className={`font-display text-xl tracking-[0.18em] uppercase md:text-2xl ${t.brand}`}
        >
          Ajouri
        </Link>
        <ul className="flex items-center gap-4 text-xs tracking-wide uppercase md:gap-7 md:text-[0.7rem]">
          {members.map((m) => (
            <li key={m.slug}>
              <Link href={m.href} className={`transition-colors ${t.link}`}>
                {m.name.split(" ")[0]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
