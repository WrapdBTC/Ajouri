import NextLink from "next/link";
import { family, headers, type ThemeKey } from "@/lib/site";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";

/**
 * Two tiers, identical on every page, coloured by the page theme:
 * a thin family ribbon (Ajouri ↔ the three names) and the world's own bar.
 */
export function SiteHeader({ current }: { current: ThemeKey }) {
  const cfg = headers[current];

  return (
    <>
      <div className="bg-deep text-deep-ink">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[0.625rem] uppercase tracking-[0.2em] md:tracking-[0.26em]">
          <NextLink
            href="/"
            className={`transition-opacity duration-300 hover:opacity-100 ${current === "hub" ? "opacity-100" : "opacity-60"}`}
          >
            {current === "hub" ? "Ajouri · Familie" : "← Ajouri"}
          </NextLink>
          <nav aria-label="Familie Ajouri" className="flex items-center gap-4 md:gap-7">
            {family.map((m) => {
              const active = m.slug === current;
              return (
                <NextLink
                  key={m.slug}
                  href={m.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "underline decoration-accent decoration-1 underline-offset-[5px]"
                      : "opacity-55 transition-opacity duration-300 hover:opacity-100"
                  }
                >
                  {m.first}
                </NextLink>
              );
            })}
          </nav>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-header/90 backdrop-blur-md backdrop-saturate-150">
        <div className="container-x relative flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#top" className="flex flex-col leading-none">
            {current === "hub" ? (
              <span className="wordmark text-[1.35rem] text-ink">{cfg.title}</span>
            ) : (
              <span className="font-display text-[1.55rem] tracking-[-0.01em] text-ink">{cfg.title}</span>
            )}
            <span className="eyebrow mt-1.5 text-[0.575rem] text-muted">{cfg.subtitle}</span>
          </a>

          <nav aria-label="Seitennavigation" className="hidden items-center gap-8 lg:flex">
            {cfg.anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="text-[0.8rem] tracking-[0.02em] text-ink/75 transition-colors duration-300 hover:text-ink"
              >
                {a.label}
              </a>
            ))}
            {cfg.cta && (
              <Button href={cfg.cta.href} size="sm" className="ml-2">
                {cfg.cta.label}
              </Button>
            )}
          </nav>

          <MobileMenu anchors={cfg.anchors} cta={cfg.cta} />
        </div>
      </header>
    </>
  );
}
