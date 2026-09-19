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
   * "panel": light image stays untouched, copy sits on a solid card.
   * "overlay": dark image, copy sits directly on a soft bottom gradient.
   */
  mode: "panel" | "overlay";
};

function Copy({
  eyebrow,
  title,
  lead,
  actions,
  meta,
  onImage,
  compact,
}: Omit<Props, "image" | "alt" | "position" | "mode"> & { onImage?: boolean; compact?: boolean }) {
  return (
    <>
      <div className="anim-rise">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h1 className={`display-1 anim-rise anim-rise-1 mt-6 ${compact ? "md:text-[clamp(3rem,5vw,4.6rem)]" : ""}`}>{title}</h1>
      <p className={`lead anim-rise anim-rise-2 mt-7 max-w-xl ${onImage ? "text-ink/85!" : ""}`}>{lead}</p>
      <div className="anim-rise anim-rise-3 mt-10 flex flex-wrap items-center gap-3">{actions}</div>
      {meta && <div className="anim-rise anim-rise-4 mt-9 border-t border-line pt-6 text-[0.85rem] text-ink/80">{meta}</div>}
    </>
  );
}

export function Hero({ image, alt, position, mode, ...copy }: Props) {
  if (mode === "panel") {
    return (
      <section className="relative">
        <div className="relative h-[58svh] min-h-[400px] overflow-hidden md:absolute md:inset-0 md:h-auto">
          <Img src={image} alt={alt} position={position} priority className="anim-settle absolute inset-0 h-full w-full object-cover" />
          {/* Kept light on purpose (≤ 30 %): the room is the message. */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-deep/30 via-deep/0 to-deep/0" />
        </div>
        <div className="container-x relative md:flex md:min-h-[calc(100svh-6.75rem)] md:items-end md:pt-24 md:pb-14">
          <div className="relative -mt-24 bg-elev p-7 shadow-[0_40px_80px_-40px_rgb(43_31_24/0.45)] sm:p-10 md:mt-0 md:max-w-[40rem] md:bg-elev/93 md:p-10 md:backdrop-blur-md lg:p-12">
            <Copy {...copy} compact />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden">
      <Img src={image} alt={alt} position={position} priority className="anim-settle absolute inset-0 -z-10 h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/50 to-bg/0" />
      <div aria-hidden className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-bg/55 via-bg/0 to-bg/0 md:block" />
      <div className="container-x flex min-h-[calc(100svh-6.75rem)] items-end pt-48 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <Copy {...copy} onImage />
        </div>
      </div>
    </section>
  );
}
