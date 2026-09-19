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
 * Overlays are intentionally heavy so display type stays readable on pale/busy images
 * and before the photo settles.
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
      {/* Base wash so ink reads before image settles */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-bg/45" />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-gradient-to-t from-bg ${
          isPage ? "via-bg/80 to-bg/35" : "via-bg/75 to-bg/25"
        }`}
      />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 hidden bg-gradient-to-r from-bg/90 via-bg/40 to-bg/5 md:block ${
          isPage ? "from-bg/85" : ""
        }`}
      />

      <div
        className={`container-x flex items-end ${
          isPage
            ? "min-h-[36svh] pt-24 pb-10 md:min-h-[42svh] md:pt-28 md:pb-12"
            : "min-h-[calc(100svh-5.25rem)] pt-40 pb-16 md:pt-44 md:pb-20"
        }`}
      >
        <div
          className={`relative rounded-sm ${isPage ? "max-w-xl" : "max-w-3xl"}`}
        >
          {/* Soft scrim behind copy for pale heroes */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-sm bg-gradient-to-r from-bg/70 via-bg/35 to-transparent md:-inset-x-6 md:-inset-y-4"
          />
          <div className="anim-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className={`anim-rise anim-rise-1 mt-5 text-ink ${isPage ? "display-2" : "display-1"}`}
            style={{
              textShadow:
                "0 1px 2px color-mix(in oklab, var(--t-bg) 70%, transparent), 0 8px 28px color-mix(in oklab, var(--t-bg) 45%, transparent)",
            }}
          >
            {title}
          </h1>
          <p
            className={`lead anim-rise anim-rise-2 !text-ink/90 ${isPage ? "mt-4" : "mt-7"} ${leadClassName}`}
            style={{
              textShadow:
                "0 1px 12px color-mix(in oklab, var(--t-bg) 55%, transparent)",
            }}
          >
            {lead}
          </p>
          <div
            className={`anim-rise anim-rise-3 flex flex-wrap items-center gap-3 ${isPage ? "mt-7" : "mt-10"}`}
          >
            {actions}
          </div>
          {meta && (
            <div className="anim-rise anim-rise-4 mt-8 border-t border-line pt-5 text-[0.85rem] text-ink/85">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
