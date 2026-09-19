import Link from "next/link";
import { site } from "@/lib/members";

type FooterProps = {
  theme?: "hub" | "michelle" | "sabine" | "isabelle";
};

export function Footer({ theme = "hub" }: FooterProps) {
  const dark = theme === "sabine" || theme === "isabelle";
  return (
    <footer
      className={`border-t ${
        dark
          ? "border-white/10 bg-black/20 text-white/60"
          : "border-black/5 bg-transparent text-muted"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-10 md:flex-row md:items-center md:px-8">
        <div>
          <Link
            href="/"
            className={`font-display text-lg tracking-[0.2em] uppercase ${
              dark ? "text-white/90" : "text-ink"
            }`}
          >
            {site.name}
          </Link>
          <p className="mt-2 text-sm">{site.location}</p>
        </div>
        <p className="text-xs tracking-wide">
          © {new Date().getFullYear()} Ajouri · Drei Expertinnen, eine Familie
        </p>
      </div>
    </footer>
  );
}
