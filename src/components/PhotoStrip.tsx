import { Img } from "./Img";

type Photo = { src: string; alt: string; position?: string };

type Props = {
  photos: [Photo, Photo, Photo];
  caption?: React.ReactNode;
  className?: string;
};

/**
 * Editorial photo strip — three portrait frames, the middle one dropped,
 * so real photography breathes between text sections.
 */
export function PhotoStrip({ photos, caption, className = "" }: Props) {
  return (
    <figure className={`reveal ${className}`}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
        {photos.map((p, i) => (
          <div
            key={p.src}
            className={`ken-wrap relative aspect-[3/4] overflow-hidden bg-surface ${
              i === 1 ? "md:translate-y-16" : ""
            } ${i === 2 ? "col-span-2 aspect-[4/5] md:col-span-1 md:aspect-[3/4]" : ""}`}
          >
            <Img
              src={p.src}
              alt={p.alt}
              position={p.position}
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="eyebrow mt-6 text-muted md:mt-24">{caption}</figcaption>
      )}
    </figure>
  );
}
