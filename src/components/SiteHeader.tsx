import NextLink from "next/link";
import { family, headers, type ThemeKey } from "@/lib/site";
import { asset } from "@/lib/asset";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Two tiers, identical on every page, coloured by the page theme:
 * a thin family ribbon and a magazine-thin world bar.
 */
export function SiteHeader({ current }: { current: ThemeKey }) {
  const cfg = headers[current];

  return (
    <>
      <div className="bg-deep text-deep-ink">
        <div className="container-x flex h-9 items-center justify-between gap-3 text-[0.6rem] uppercase tracking-[0.18em] sm:gap-4 sm:tracking-[0.22em] md:tracking-[0.28em]">
          {current === "hub" ? (
            <span className="opacity-0 select-none" aria-hidden>
              ·
            </span>
          ) : (
            <NextLink
              href="/"
              className="inline-flex h-9 items-center opacity-55 transition-opacity duration-300 hover:opacity-100"
            >
              ← Ajouri
            </NextLink>
          )}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            <nav aria-label="Familie Ajouri" className="flex items-center gap-4 md:gap-7">
              {family.map((m) => {
                const active = m.slug === current;
                return (
                  <NextLink
                    key={m.slug}
                    href={m.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex h-9 items-center ${
                      active
                        ? "underline decoration-accent decoration-1 underline-offset-[5px]"
                        : "opacity-50 transition-opacity duration-300 hover:opacity-100"
                    }`}
                  >
                    {m.first}
                  </NextLink>
                );
              })}
            </nav>
            <span aria-hidden className="hidden h-3 w-px bg-current/25 sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-header/88 backdrop-blur-md backdrop-saturate-150">
        <div className="container-x relative flex h-[3.75rem] items-center justify-between gap-6 md:h-[4rem]">
          <NextLink
            href={current === "hub" ? "/" : `/${current}/`}
            className="flex items-center gap-3 leading-none"
          >
            {cfg.logo && (
              <span aria-hidden className="relative block h-11 w-[1.6rem] shrink-0 md:h-12 md:w-[1.75rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(cfg.logo.light)} alt="" className="logo-light absolute inset-0 h-full w-full object-contain" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(cfg.logo.dark)} alt="" className="logo-dark absolute inset-0 h-full w-full object-contain" />
              </span>
            )}
            <span className="flex flex-col">
            {current === "hub" ? (
              <span className="font-display text-[1.15rem] tracking-[0.28em] uppercase text-ink md:text-[1.25rem]">
                {cfg.title}
              </span>
            ) : (
              <span className="font-display text-[1.4rem] tracking-[-0.01em] text-ink md:text-[1.5rem]">
                {cfg.title}
              </span>
            )}
            <span className="eyebrow mt-1 text-[0.55rem] text-muted">{cfg.subtitle}</span>
            </span>
          </NextLink>

          <NavLinks anchors={cfg.anchors} cta={cfg.cta} />
          <MobileMenu anchors={cfg.anchors} cta={cfg.cta} />
        </div>
      </header>
    </>
  );
}
