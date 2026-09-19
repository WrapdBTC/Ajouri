import { Img } from "./Img";
import { Eyebrow } from "./SectionIntro";

type Props = {
  image: string;
  alt: string;
  position?: string;
  /** Image on right when true */
  flip?: boolean;
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  sticky?: boolean;
};

/** Editorial split: oversized photo + sticky caption column (7/4). */
export function SplitFeature({
  image,
  alt,
  position,
  flip = false,
  index,
  eyebrow,
  title,
  children,
  className = "",
  sticky = true,
}: Props) {
  return (
    <div className={`grid gap-10 md:grid-cols-12 md:items-start md:gap-12 ${className}`}>
      <div
        className={`reveal ken-wrap relative aspect-[4/5] overflow-hidden bg-surface md:col-span-7 md:aspect-auto md:min-h-[36rem] lg:min-h-[38rem] ${
          flip ? "md:order-2" : ""
        }`}
      >
        <Img
          src={image}
          alt={alt}
          position={position}
          className="ken-img absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div
        className={`reveal md:col-span-4 ${flip ? "md:order-1" : "md:col-start-9"} ${
          sticky ? "sticky-caption" : ""
        }`}
      >
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 className="display-2 mt-6">{title}</h2>
        <div className="mt-8 space-y-5">{children}</div>
      </div>
    </div>
  );
}
