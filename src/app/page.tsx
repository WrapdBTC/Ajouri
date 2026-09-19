import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PortalCard } from "@/components/PortalCard";
import { Button } from "@/components/Button";
import { members, site } from "@/lib/members";

export default function HubPage() {
  return (
    <div className="flex min-h-full flex-col bg-paper">
      <Nav theme="hub" />
      <main className="flex-1">
        <section className="relative overflow-hidden px-5 pb-14 pt-20 md:px-8 md:pb-20 md:pt-28">
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[color:var(--color-m-accent)]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-[color:var(--color-s-accent)]/10 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.28em] text-muted">
              Familie · {site.location}
            </p>
            <h1 className="animate-fade-up animate-delay-1 font-display mt-6 text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.88] tracking-[0.08em] uppercase text-ink">
              {site.name}
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-8 max-w-2xl text-lg text-muted md:text-xl leading-relaxed">
              Drei eigenständige Handwerke unter einem Namen. Haut. Klang.
              Linie. Verbunden durch Eleganz, Präzision und die ruhige Haltung,
              Dinge richtig zu tun — hier in Neuburg an der Donau.
            </p>
            <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-4">
              <Button href="#welten" tone="hub">
                Die drei Welten
              </Button>
              <Button href="#kennenlernen" tone="hub" variant="outline">
                Kennenlernen
              </Button>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-black/5 bg-ink/[0.02] py-4" aria-hidden>
          <div className="flex animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-10 px-5">
                <span>Hautanalyse</span>
                <span>·</span>
                <span>Klangmassage</span>
                <span>·</span>
                <span>Fine-Line Tattoo</span>
                <span>·</span>
                <span>Meditation</span>
                <span>·</span>
                <span>Facials</span>
                <span>·</span>
                <span>Atelier</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>

        <section id="kennenlernen" className="px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
              Kennenlernen
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl text-ink">
              Drei Stimmen. Eine Familie.
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {members.map((m) => (
                <article
                  key={m.slug}
                  className="border border-black/5 bg-white/50 p-7 transition-shadow hover:shadow-lg"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    {m.role}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-ink">{m.name}</h3>
                  <p className="mt-2 text-sm font-medium text-ink/80">{m.claim}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {m.personality}
                  </p>
                  <a
                    href={`#welten`}
                    className="mt-6 inline-flex text-[0.65rem] uppercase tracking-[0.16em] text-ink/70 hover:text-ink"
                  >
                    Zur Welt →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="welten" className="px-5 pb-24 md:px-8">
          <div className="mx-auto mb-10 max-w-7xl">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
              Die Welten
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">
              Eintreten.
            </h2>
          </div>
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 md:gap-6">
            {members.map((m, i) => (
              <PortalCard key={m.slug} member={m} index={i} />
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 px-5 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl text-ink md:text-3xl text-balance">
              Kein Sammelsurium — drei Boutiquen unter einem Dach.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              Jede Seite ist eine vollständige Welt mit eigener Atmosphäre —
              und demselben Anspruch an Handwerk und Haltung.
            </p>
          </div>
        </section>
      </main>
      <Footer theme="hub" />
    </div>
  );
}
