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
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 bg-gradient-to-t from-bg ${isPage ? "via-bg/60 to-bg/15" : "via-bg/55 to-bg/5"}`}
      />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 hidden bg-gradient-to-r from-bg/70 via-bg/20 to-bg/0 md:block ${isPage ? "from-bg/55" : ""}`}
      />

      <div
        className={`container-x flex items-end ${
          isPage
            ? "min-h-[42svh] pt-28 pb-12 md:min-h-[50svh] md:pt-32 md:pb-16"
            : "min-h-[calc(100svh-5.25rem)] pt-40 pb-16 md:pt-44 md:pb-20"
        }`}
      >
        <div className={isPage ? "max-w-xl" : "max-w-3xl"}>
          <div className="anim-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className={`anim-rise anim-rise-1 mt-6 ${isPage ? "display-2" : "display-1"}`}
          >
            {title}
          </h1>
          <p
            className={`lead anim-rise anim-rise-2 text-ink/85! ${isPage ? "mt-5" : "mt-7"} ${leadClassName}`}
          >
            {lead}
          </p>
          <div
            className={`anim-rise anim-rise-3 flex flex-wrap items-center gap-3 ${isPage ? "mt-8" : "mt-10"}`}
          >
            {actions}
          </div>
          {meta && (
            <div className="anim-rise anim-rise-4 mt-10 border-t border-line pt-6 text-[0.85rem] text-ink/80">
              {meta}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
