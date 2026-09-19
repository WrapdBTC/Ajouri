import Link from "next/link";
import { SmartImg } from "@/components/SmartImg";
import type { members } from "@/lib/members";

type Member = (typeof members)[number];

const overlays: Record<Member["theme"], string> = {
  michelle:
    "from-[color:var(--color-m-ink)]/50 via-[color:var(--color-m-ink)]/15 to-transparent",
  sabine:
    "from-[color:var(--color-s-bg)]/75 via-[color:var(--color-s-bg)]/25 to-transparent",
  isabelle: "from-black/70 via-black/25 to-transparent",
};

const accents: Record<Member["theme"], string> = {
  michelle: "group-hover:ring-[color:var(--color-m-accent)]",
  sabine: "group-hover:ring-[color:var(--color-s-accent)]",
  isabelle: "group-hover:ring-[color:var(--color-i-steel)]",
};

const delays = ["animate-delay-1", "animate-delay-2", "animate-delay-3"];

export function PortalCard({
  member,
  index,
}: {
  member: Member;
  index: number;
}) {
  return (
    <Link
      href={member.href}
      className={`group relative block min-h-[30rem] overflow-hidden ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:min-h-[36rem] ${accents[member.theme]} animate-fade-up ${delays[index] ?? ""}`}
    >
      <SmartImg
        src={member.image}
        alt={member.name}
        fill
        priority={index === 0}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${overlays[member.theme]}`}
      />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/75">
          {member.role}
        </p>
        <h2 className="font-display text-3xl md:text-4xl">{member.name}</h2>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">
          {member.claim}
        </p>
        <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/65">
          {member.personality}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-white/90 transition-transform duration-300 group-hover:translate-x-1">
          Eintreten <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
