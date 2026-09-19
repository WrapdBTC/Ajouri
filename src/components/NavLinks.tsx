"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { Link } from "@/lib/site";
import { Button } from "./Button";

function normalize(path: string) {
  if (!path) return "/";
  // Strip basePath if present (GitHub Pages)
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  let p = path;
  if (base && p.startsWith(base)) p = p.slice(base.length) || "/";
  // Ensure trailing slash consistency for comparison
  if (!p.endsWith("/")) p = `${p}/`;
  return p;
}

function isActive(pathname: string, href: string) {
  const path = normalize(pathname);
  // Hash-only anchors: never "active" in the route sense
  if (href.startsWith("#")) return false;
  const target = normalize(href.split("#")[0] || "/");
  // Exact match only — house Start must not stay active on subpages
  return path === target;
}

export function NavLinks({ anchors, cta }: { anchors: Link[]; cta?: Link }) {
  const pathname = usePathname() ?? "/";

  return (
    <nav aria-label="Seitennavigation" className="hidden items-center gap-8 lg:flex">
      {anchors.map((a) => {
        const active = isActive(pathname, a.href);
        const cls = active
          ? "text-[0.8rem] tracking-[0.02em] text-ink underline decoration-accent decoration-1 underline-offset-[6px]"
          : "text-[0.8rem] tracking-[0.02em] text-ink/75 transition-colors duration-300 hover:text-ink";

        if (a.href.startsWith("/")) {
          return (
            <NextLink key={a.href} href={a.href} className={cls} aria-current={active ? "page" : undefined}>
              {a.label}
            </NextLink>
          );
        }
        return (
          <a key={a.href} href={a.href} className={cls}>
            {a.label}
          </a>
        );
      })}
      {cta && (
        <Button href={cta.href} size="sm" className="ml-2">
          {cta.label}
        </Button>
      )}
    </nav>
  );
}
