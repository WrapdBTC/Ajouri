import { asset } from "@/lib/asset";

/** Michelle's line mark (face · flower · gut) — swaps line colour with light/dark mode. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/assets/michelle/logo-mark-light.png")}
        alt="Bildmarke Michelle Ajouri: Gesicht, Blüte und Darm in einer Linie"
        className="logo-light absolute inset-0 h-full w-full object-contain"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/assets/michelle/logo-mark-dark.png")}
        alt=""
        aria-hidden
        className="logo-dark absolute inset-0 h-full w-full object-contain"
      />
    </span>
  );
}
