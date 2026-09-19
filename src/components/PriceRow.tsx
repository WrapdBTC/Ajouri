export function PriceRow({
  name,
  detail,
  time,
  price,
}: {
  name: string;
  detail: string;
  time?: string;
  price: string;
}) {
  return (
    <li className="py-6">
      <div className="flex items-baseline">
        <h3 className="font-display text-[1.6rem] leading-tight md:text-[1.75rem]">{name}</h3>
        {time && <span className="eyebrow ml-4 hidden shrink-0 text-muted sm:inline">{time}</span>}
        <span aria-hidden className="leader" />
        <span className="font-display text-[1.6rem] leading-tight tabular-nums md:text-[1.75rem]">{price}</span>
      </div>
      <p className="body-copy mt-1.5 max-w-lg">
        {time && <span className="sm:hidden">{time} · </span>}
        {detail}
      </p>
    </li>
  );
}
