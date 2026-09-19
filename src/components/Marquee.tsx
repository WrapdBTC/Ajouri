type Props = {
  items: string[];
  className?: string;
};

/** Slow craft-tag marquee — fits Isabelle / Sabine atmosphere. */
export function Marquee({ items, className = "" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee border-y border-line py-5 ${className}`} aria-hidden>
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
