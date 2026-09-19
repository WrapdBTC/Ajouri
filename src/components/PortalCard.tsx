import Image from "next/image";
import Link from "next/link";
import type { members } from "@/lib/members";

type Member = (typeof members)[number];

const overlays: Record<Member["theme"], string> = {
  michelle:
    "from-[color:var(--color-m-ink)]/55 via-[color:var(--color-m-ink)]/20 to-transparent",
  sabine:
    "from-[color:var(--color-s-bg)]/80 via-[color:var(--color-s-bg)]/35 to-transparent",
  isabelle: "from-black/75 via-black/30 to-transparent",
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
      className={`group relative block min-h-[28rem] overflow-hidden ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:min-h-[34rem] ${accents[member.theme]} animate-fade-up ${delays[index] ?? ""}`}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        priority={index === 0}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${overlays[member.theme]}`}
      />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/70">
          {member.role}
        </p>
        <h2 className="font-display text-3xl md:text-4xl">{member.name}</h2>
        <p className="mt-3 max-w-xs text-sm text-white/80">{member.claim}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-white/90 transition-transform duration-300 group-hover:translate-x-1">
          Eintreten <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
