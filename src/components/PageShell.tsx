import type { ThemeKey } from "@/lib/site";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/** Sets the world's palette and wraps it in the shared header/footer. */
export function PageShell({ theme, children }: { theme: ThemeKey; children: React.ReactNode }) {
  return (
    <div id="top" data-theme={theme} className="flex min-h-svh flex-col overflow-x-clip bg-bg text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-btn focus:px-4 focus:py-2 focus:text-btn-ink"
      >
        Zum Inhalt springen
      </a>
      <SiteHeader current={theme} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter current={theme} />
    </div>
  );
}
