import NextLink from "next/link";
import { Img } from "./Img";
import { Arrow } from "./Button";

type Props = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  position?: string;
  alt?: string;
};

/** Editorial teaser card linking into a house subpage. */
export function TeaserCard({ href, eyebrow, title, text, image, position, alt = "" }: Props) {
  return (
    <NextLink
      href={href}
      className="reveal group group/btn flex flex-col border-t border-line pt-8 transition-opacity duration-500 hover:opacity-95"
    >
      {image && (
        <div className="relative mb-7 aspect-[16/10] overflow-hidden bg-surface">
          <Img
            src={image}
            alt={alt}
            position={position}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
      )}
      <p className="eyebrow text-accent-text">{eyebrow}</p>
      <h3 className="display-3 mt-3">{title}</h3>
      <p className="body-copy mt-4 flex-1">{text}</p>
      <span className="eyebrow mt-8 flex items-center gap-3 text-ink">
        Weiterlesen <Arrow />
      </span>
    </NextLink>
  );
}
