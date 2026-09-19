import { asset } from "@/lib/asset";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** CSS object-position, e.g. "46% 22%" — all source images are 16:9. */
  position?: string;
  priority?: boolean;
  /** Scale around `position` — for tight crops (e.g. round portrait medallions). */
  zoom?: number;
};

/** Static-export safe image: always prefixes the GitHub Pages basePath. */
export function Img({ src, alt, className = "", position, priority, zoom }: Props) {
  const style: React.CSSProperties = {};
  if (position) style.objectPosition = position;
  if (zoom) {
    style.transform = `scale(${zoom})`;
    style.transformOrigin = position ?? "50% 50%";
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      alt={alt}
      width={1280}
      height={720}
      className={className}
      style={position || zoom ? style : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
