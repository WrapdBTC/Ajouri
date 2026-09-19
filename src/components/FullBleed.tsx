import { Img } from "./Img";

type Props = {
  src: string;
  alt: string;
  position?: string;
  /** Aspect hint — full viewport break vs. cinematic band */
  height?: "band" | "tall" | "screen";
  caption?: React.ReactNode;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
};

/** Full-bleed image break — magazine interrupt between sections. */
export function FullBleed({
  src,
  alt,
  position,
  height = "band",
  caption,
  className = "",
  priority,
  children,
}: Props) {
  // Never pair aspect-ratio with min-height — browsers expand width to satisfy both (horizontal scroll).
  const h =
    height === "screen"
      ? "min-h-[70svh] md:min-h-[85svh]"
      : height === "tall"
        ? "aspect-[16/10] w-full md:aspect-[21/10]"
        : "aspect-[16/9] w-full md:aspect-[24/10]";

  return (
    <figure className={`reveal relative isolate overflow-hidden ${className}`}>
      <div className={`ken-wrap relative w-full ${h}`}>
        <Img
          src={src}
          alt={alt}
          position={position}
          priority={priority}
          className="ken-img absolute inset-0 h-full w-full object-cover"
        />
        {children}
      </div>
      {caption && (
        <figcaption className="container-x mt-4 flex items-baseline justify-between gap-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
