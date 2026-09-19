import NextLink from "next/link";
import { Img } from "./Img";
import { Arrow } from "./Button";

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  position?: string;
  alt?: string;
  /** Distinct aspect for staggered layouts */
  aspect?: "tall" | "wide" | "square";
  className?: string;
};

/**
 * Editorial cover teaser — not a TeaserCard clone.
 * Oversized photography, type overlay energy, magazine crop.
 */
export function EditorialCover({
  href,
  eyebrow,
  title,
  text,
  image,
  position,
  alt = "",
  aspect = "tall",
  className = "",
}: Props) {
  const ratio =
    aspect === "wide"
      ? "aspect-[16/10]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[3/4]";

  return (
    <NextLink
      href={href}
      className={`reveal group group/btn relative flex flex-col ${className}`}
    >
      <div className={`ken-wrap relative overflow-hidden bg-surface ${ratio}`}>
        <Img
          src={image}
          alt={alt}
          position={position}
          className="ken-img absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/0 to-bg/0 opacity-90"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="eyebrow text-accent-text">{eyebrow}</p>
          <h3 className="display-3 mt-2 text-ink">{title}</h3>
        </div>
      </div>
      <p className="body-copy mt-5 flex-1">{text}</p>
      <span className="eyebrow mt-6 flex items-center gap-3 text-ink">
        Weiterlesen <Arrow />
      </span>
    </NextLink>
  );
}
