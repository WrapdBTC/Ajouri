import NextLink from "next/link";
import { family, headers, type ThemeKey } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

/**
 * Two tiers, identical on every page, coloured by the page theme:
 * a thin family ribbon and a magazine-thin world bar.
 */
export function SiteHeader({ current }: { current: ThemeKey }) {
  const cfg = headers[current];

  return (
    <>
      <div className="bg-deep text-deep-ink">
        <div className="container-x flex h-8 items-center justify-between gap-4 text-[0.6rem] uppercase tracking-[0.22em] md:tracking-[0.28em]">
          <NextLink
            href="/"
            className={`transition-opacity duration-300 hover:opacity-100 ${current === "hub" ? "opacity-100" : "opacity-55"}`}
          >
            {current === "hub" ? "Ajouri · Maison" : "← Ajouri"}
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
                      : "opacity-50 transition-opacity duration-300 hover:opacity-100"
                  }
                >
                  {m.first}
                </NextLink>
              );
            })}
          </nav>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-header/88 backdrop-blur-md backdrop-saturate-150">
        <div className="container-x relative flex h-[3.75rem] items-center justify-between gap-6 md:h-[4rem]">
          <NextLink href={current === "hub" ? "/" : `/${current}/`} className="flex flex-col leading-none">
            {current === "hub" ? (
              <span className="wordmark text-[1.2rem] text-ink md:text-[1.3rem]">{cfg.title}</span>
            ) : (
              <span className="font-display text-[1.4rem] tracking-[-0.01em] text-ink md:text-[1.5rem]">
                {cfg.title}
              </span>
            )}
            <span className="eyebrow mt-1 text-[0.55rem] text-muted">{cfg.subtitle}</span>
          </NextLink>

          <NavLinks anchors={cfg.anchors} cta={cfg.cta} />
          <MobileMenu anchors={cfg.anchors} cta={cfg.cta} />
        </div>
      </header>
    </>
  );
}
