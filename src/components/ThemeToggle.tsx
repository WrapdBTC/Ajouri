"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

function readMode(): Mode {
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-mode");
  if (attr === "light" || attr === "dark") return attr;
  return "light";
}

function applyMode(mode: Mode) {
  document.documentElement.setAttribute("data-mode", mode);
  try {
    localStorage.setItem("ajouri-mode", mode);
  } catch {
    /* ignore quota / private mode */
  }
}

/**
 * Elegant Hell / Dunkel control. Works with per-world data-theme via
 * html[data-mode] overrides in globals.css.
 */
export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMode(readMode());
    setReady(true);
  }, []);

  const next: Mode = mode === "light" ? "dark" : "light";
  const label = mode === "light" ? "Dunkelmodus" : "Hellmodus";
  const short = mode === "light" ? "Dunkel" : "Hell";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={!ready}
      onClick={() => {
        applyMode(next);
        setMode(next);
      }}
      className="eyebrow inline-flex h-8 items-center gap-2 rounded-[2px] px-2 text-[0.55rem] tracking-[0.2em] text-deep-ink/70 transition-opacity duration-300 hover:text-deep-ink hover:opacity-100 disabled:opacity-40"
    >
      <span aria-hidden className="relative block h-3.5 w-3.5">
        {mode === "light" ? (
          /* moon */
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.5">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />
          </svg>
        ) : (
          /* sun */
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.05 5.05l1.55 1.55M17.4 17.4l1.55 1.55M5.05 18.95l1.55-1.55M17.4 6.6l1.55-1.55" />
          </svg>
        )}
      </span>
      <span className="hidden sm:inline">{short}</span>
    </button>
  );
}
