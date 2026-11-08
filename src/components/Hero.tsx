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
  /**
   * "overlay" = full-bleed photo behind the copy (needs a large photo).
   * "split" = copy left, portrait frame right — keeps smaller images sharp.
   */
  layout?: "overlay" | "split";
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
  layout = "overlay",
}: Props) {
  const isPage = size === "page";

  if (layout === "split") {
    return (
      <section className="bg-surface">
        <div className="container-x grid gap-10 pt-12 pb-14 md:grid-cols-12 md:items-center md:gap-14 md:pt-16 md:pb-20">
          <div className="md:col-span-6">
            <div className="anim-rise">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="anim-rise anim-rise-1 display-2 mt-5 text-ink">{title}</h1>
            <p className={`lead anim-rise anim-rise-2 mt-5 !max-w-lg ${leadClassName}`}>{lead}</p>
            <div className="anim-rise anim-rise-3 mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
              {actions}
            </div>
            {meta && (
              <div className="anim-rise anim-rise-4 mt-8 border-t border-line pt-5 text-[0.85rem] text-ink/90">
                {meta}
              </div>
            )}
          </div>
          <div className="anim-settle relative aspect-[4/3] overflow-hidden md:col-span-5 md:col-start-8 md:aspect-[4/5] md:max-h-[34rem]">
            <Img
              src={image}
              alt={alt}
              position={position}
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden">
      {/* Phone: photo stacked above the copy, so text never covers a face.
          Desktop: full-bleed photo behind the copy. */}
      <div className="relative aspect-[4/5] w-full md:absolute md:inset-0 md:-z-10 md:aspect-auto">
        <Img
          src={image}
          alt={alt}
          position={position}
          priority
          className="anim-settle absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent md:hidden"
        />
      </div>
      {/* Desktop: light wash + directional scrims keep the copy readable */}
      <div aria-hidden className="absolute inset-0 -z-10 hidden bg-bg/15 md:block" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-bg/90 via-bg/35 to-transparent md:block"
      />
      <div
        aria-hidden
        className={`absolute inset-x-0 bottom-0 -z-10 hidden bg-gradient-to-t from-bg via-bg/60 to-transparent md:block ${
          isPage ? "h-[75%]" : "h-[55%]"
        }`}
      />

      <div
        className={`container-x flex items-end ${
          isPage
            ? "pt-4 pb-10 md:min-h-[40svh] md:pt-28 md:pb-12"
            : "pt-4 pb-12 md:min-h-[calc(100svh-5.25rem)] md:pt-44 md:pb-20"
        }`}
      >
        <div className={`relative rounded-sm ${isPage ? "max-w-xl" : "max-w-3xl"}`}>
          {/* Soft panel behind copy (desktop, over the photo) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-8 -inset-y-5 -z-10 hidden rounded-sm bg-gradient-to-r from-bg/80 via-bg/45 to-transparent md:block"
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
