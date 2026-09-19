type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  className?: string;
  /** "split": title left, lead right on desktop. */
  layout?: "stack" | "split";
};

export function Eyebrow({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-accent-text">
      {index && <span className="tabular-nums">{index}</span>}
      {index && <span aria-hidden className="h-px w-8 bg-accent/60" />}
      <span>{children}</span>
    </p>
  );
}

export function SectionIntro({ index, eyebrow, title, lead, className = "", layout = "stack" }: Props) {
  if (layout === "split") {
    return (
      <div className={`grid gap-8 md:grid-cols-12 md:items-end ${className}`}>
        <div className="md:col-span-7">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
          <h2 className="display-2 mt-6">{title}</h2>
        </div>
        {lead && <p className="lead md:col-span-4 md:col-start-9">{lead}</p>}
      </div>
    );
  }
  return (
    <div className={className}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="display-2 mt-6">{title}</h2>
      {lead && <p className="lead mt-6 max-w-xl">{lead}</p>}
    </div>
  );
}
