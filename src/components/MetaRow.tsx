type Item = { label: string; value: string };

type Props = {
  items: Item[];
  className?: string;
};

/** Horizontal meta strip — address / hours / craft tags. */
export function MetaRow({ items, className = "" }: Props) {
  return (
    <ul
      className={`flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-6 ${className}`}
    >
      {items.map((item) => (
        <li key={item.label} className="reveal min-w-[8rem]">
          <p className="eyebrow text-muted">{item.label}</p>
          <p className="mt-1.5 font-display text-xl leading-tight text-ink md:text-[1.35rem]">
            {item.value}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Compact fact strip for editorial breaks. */
export function StatStrip({
  items,
  className = "",
}: {
  items: { value: string; label: string }[];
  className?: string;
}) {
  const cols =
    items.length <= 2
      ? "sm:grid-cols-2"
      : items.length === 3
        ? "sm:grid-cols-3"
        : items.length === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-3 lg:grid-cols-5";

  return (
    <ul className={`grid grid-cols-2 border-t border-line ${cols} ${className}`}>
      {items.map((item) => (
        <li
          key={item.label}
          className="reveal border-b border-line py-7 pr-5 sm:border-b-0 sm:border-r sm:pr-8 sm:last:border-r-0"
        >
          <p className="font-display text-[1.65rem] leading-none text-ink md:text-2xl">
            {item.value}
          </p>
          <p className="mt-2 text-[0.8rem] leading-snug text-muted">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
