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
  /** Distinct aspect — prefer same aspect across sibling covers */
  aspect?: "tall" | "wide" | "square";
  className?: string;
};

/**
 * Editorial cover teaser — not a TeaserCard clone.
 * Oversized photography, type overlay, stretches in equal grids via h-full.
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
      className={`reveal group group/btn flex h-full flex-col ${className}`}
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
          className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-bg/0"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
          <p className="eyebrow text-accent-text">{eyebrow}</p>
          <h3 className="display-3 mt-2 text-ink">{title}</h3>
        </div>
      </div>
      <p className="body-copy mt-5 flex-1 !max-w-none text-[0.95rem]">{text}</p>
      <span className="tap-row eyebrow mt-5 text-ink">
        Weiterlesen <Arrow />
      </span>
    </NextLink>
  );
}
