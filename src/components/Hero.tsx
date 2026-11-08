import { Img } from "./Img";
import { Eyebrow } from "./SectionIntro";

type Props = {
  image: string;
  alt: string;
  position?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions: React.ReactNode;
  meta?: React.ReactNode;
  size?: "full" | "page";
  /** Tighter poetic lead — Sabine ritual style */
  leadClassName?: string;
};

/**
 * Unified overlay hero — full-bleed image + theme gradients + copy bottom-left.
 * Overlays are heavy so display type stays readable on pale/busy images
 * and before the photo settles (light and dark themes).
 */
export function Hero({
  image,
  alt,
  position,
  eyebrow,
  title,
  lead,
  actions,
  meta,
  size = "full",
  leadClassName = "",
}: Props) {
  const isPage = size === "page";

  return (
    <section className="relative isolate overflow-hidden">
      <Img
        src={image}
        alt={alt}
        position={position}
        priority
        className="anim-settle absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Light wash + directional scrims: photo stays visible, copy stays readable */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-bg/15" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-bg/90 via-bg/35 to-transparent md:block"
      />
      <div
        aria-hidden
        className={`absolute inset-x-0 bottom-0 -z-10 bg-gradient-to-t from-bg via-bg/60 to-transparent ${
          isPage ? "h-[75%]" : "h-[65%] md:h-[55%]"
        }`}
      />

      <div
        className={`container-x flex items-end ${
          isPage
            ? "min-h-[30svh] pt-20 pb-8 md:min-h-[40svh] md:pt-28 md:pb-12"
            : "min-h-[min(100svh-5.25rem,34rem)] pt-24 pb-10 md:min-h-[calc(100svh-5.25rem)] md:pt-44 md:pb-20"
        }`}
      >
        <div className={`relative rounded-sm ${isPage ? "max-w-xl" : "max-w-3xl"}`}>
          {/* Soft panel behind copy */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-5 -inset-y-4 -z-10 rounded-sm bg-gradient-to-r from-bg/80 via-bg/45 to-transparent md:-inset-x-8 md:-inset-y-5"
          />
          <div className="anim-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className={`anim-rise anim-rise-1 mt-5 text-ink ${isPage ? "display-2" : "display-1"}`}
            style={{
              textShadow:
                "0 1px 2px color-mix(in oklab, var(--t-bg) 80%, transparent), 0 10px 32px color-mix(in oklab, var(--t-bg) 55%, transparent)",
            }}
          >
            {title}
          </h1>
          <p
            className={`lead anim-rise anim-rise-2 !text-ink/92 ${isPage ? "mt-4" : "mt-7"} ${leadClassName}`}
            style={{
              textShadow:
                "0 1px 14px color-mix(in oklab, var(--t-bg) 65%, transparent)",
            }}
          >
            {lead}
          </p>
          <div
            className={`anim-rise anim-rise-3 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center [&>a]:w-full sm:[&>a]:w-auto ${isPage ? "mt-6" : "mt-8 md:mt-10"}`}
          >
            {actions}
          </div>
          {meta && (
            <div className="anim-rise anim-rise-4 mt-8 border-t border-line pt-5 text-[0.85rem] text-ink/90">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
