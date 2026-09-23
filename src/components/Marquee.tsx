type Props = {
  items: string[];
  className?: string;
};

/** Slow craft-tag marquee — fits Sabine ritual atmosphere. */
export function Marquee({ items, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee max-w-[100vw] overflow-hidden border-y border-line py-4 md:py-5 ${className}`}
      aria-hidden
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item text-ink">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
