type Chapter = {
  numeral: string;
  title: string;
  line?: string;
};

type Props = {
  chapters: Chapter[];
  className?: string;
  /** "rail" = vertical journey list; "row" = horizontal chapter strip */
  layout?: "rail" | "row";
};

/** Numbered journey — I / II / III energy (Anam Cara–like ritual). */
export function ChapterIndex({ chapters, className = "", layout = "rail" }: Props) {
  if (layout === "row") {
    const cols =
      chapters.length === 3
        ? "sm:grid-cols-3"
        : chapters.length === 4
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-2";

    return (
      <ol className={`grid gap-0 border-t border-line ${cols} ${className}`}>
        {chapters.map((ch) => (
          <li
            key={ch.numeral}
            className="reveal border-b border-line py-8 sm:border-b-0 sm:border-l sm:px-6 sm:py-10 sm:first:border-l-0 sm:first:pl-0"
          >
            <span className="chapter-num !text-[2.75rem] md:!text-[3.5rem]">{ch.numeral}</span>
            <h3 className="display-3 mt-5">{ch.title}</h3>
            {ch.line && <p className="body-copy mt-3">{ch.line}</p>}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={`space-y-0 ${className}`}>
      {chapters.map((ch) => (
        <li
          key={ch.numeral}
          className="reveal grid grid-cols-[4.5rem_1fr] gap-5 border-t border-line py-9 last:border-b md:grid-cols-[6rem_1fr] md:gap-8"
        >
          <span className="chapter-num">{ch.numeral}</span>
          <div className="pt-1">
            <h3 className="display-3">{ch.title}</h3>
            {ch.line && <p className="body-copy mt-3 max-w-md">{ch.line}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
