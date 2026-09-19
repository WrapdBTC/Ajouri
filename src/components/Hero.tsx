import { Img } from "./Img";
import { Eyebrow } from "./SectionIntro";

type Props = {
  image: string;
  alt: string;
  /** object-position for the 16:9 source; tuned per image for portrait crops. */
  position?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions: React.ReactNode;
  meta?: React.ReactNode;
  /**
   * "full" — house home heroes (viewport-tall).
   * "page" — subpage heroes (half-height, same DNA).
   */
  size?: "full" | "page";
};

/**
 * Unified overlay hero for all three houses.
 * Full-bleed image + theme-token gradients + copy bottom-left.
 * Works on light (champagne cream) and dark (indigo / black) themes.
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
      {/* Bottom wash — theme bg so cream/indigo/black all read correctly */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-gradient-to-t from-bg ${isPage ? "via-bg/55 to-bg/10" : "via-bg/50 to-bg/0"}`}
      />
      {/* Soft side wash for legibility on wide screens */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 hidden bg-gradient-to-r from-bg/60 via-bg/15 to-bg/0 md:block ${isPage ? "from-bg/50" : ""}`}
      />

      <div
        className={`container-x flex items-end ${
          isPage
            ? "min-h-[42svh] pt-28 pb-12 md:min-h-[48svh] md:pt-36 md:pb-16"
            : "min-h-[calc(100svh-6.75rem)] pt-48 pb-16 md:pb-20"
        }`}
      >
        <div className={isPage ? "max-w-xl" : "max-w-2xl"}>
          <div className="anim-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className={`anim-rise anim-rise-1 mt-6 ${
              isPage ? "display-2" : "display-1"
            }`}
          >
            {title}
          </h1>
          <p className={`lead anim-rise anim-rise-2 mt-7 max-w-xl text-ink/85! ${isPage ? "mt-5!" : ""}`}>
            {lead}
          </p>
          <div className={`anim-rise anim-rise-3 flex flex-wrap items-center gap-3 ${isPage ? "mt-8" : "mt-10"}`}>
            {actions}
          </div>
          {meta && (
            <div className="anim-rise anim-rise-4 mt-9 border-t border-line pt-6 text-[0.85rem] text-ink/80">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
