"use client";

import { useEffect, useId, useState } from "react";
import type { Link } from "@/lib/site";

export function MobileMenu({ anchors, cta }: { anchors: Link[]; cta?: Link }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="eyebrow -mr-2 flex h-11 items-center gap-3 px-2 text-ink"
      >
        <span>{open ? "Schließen" : "Menü"}</span>
        <span aria-hidden className="relative block h-2.5 w-5">
          <span
            className={`absolute left-0 h-px w-5 bg-current transition-transform duration-500 ${open ? "top-1/2 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 h-px w-5 bg-current transition-transform duration-500 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`}
          />
        </span>
      </button>

      <div
        id={id}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-header shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)]"
      >
        <nav aria-label="Seitennavigation mobil" className="container-x flex flex-col py-4">
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              onClick={close}
              className="font-display border-b border-line py-4 text-[1.6rem] leading-none text-ink last:border-0"
            >
              {a.label}
            </a>
          ))}
          {cta && (
            <a
              href={cta.href}
              onClick={close}
              className="mt-4 mb-2 inline-flex h-12 items-center justify-center rounded-[2px] bg-btn text-[0.7rem] font-medium uppercase tracking-[0.22em] text-btn-ink"
            >
              {cta.label}
            </a>
          )}
        </nav>
      </div>
    </div>
  );
}
