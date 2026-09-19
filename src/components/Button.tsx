import NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text";
  size?: "md" | "sm";
  className?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-3 rounded-[2px] font-medium uppercase transition-[background-color,color,border-color,opacity] duration-500 ease-out";

const sizes = {
  md: "h-12 min-h-11 px-7 text-[0.7rem] tracking-[0.22em]",
  sm: "h-11 min-h-11 px-5 text-[0.65rem] tracking-[0.2em]",
};

const variants = {
  solid: "bg-btn text-btn-ink hover:opacity-85",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-bg",
  text: "h-auto! min-h-11 px-0! py-2 text-ink underline decoration-accent/60 decoration-1 underline-offset-[6px] hover:decoration-ink",
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 10"
      className={`h-2.5 w-5 transition-transform duration-500 group-hover/btn:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 5h19M14.5 0.5 19 5l-4.5 4.5" />
    </svg>
  );
}

export function Button({ href, children, variant = "solid", size = "md", className = "" }: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <NextLink href={href} className={cls}>
        {children}
      </NextLink>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
