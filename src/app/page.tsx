import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PortalCard } from "@/components/PortalCard";
import { members, site } from "@/lib/members";

export default function HubPage() {
  return (
    <div className="flex min-h-full flex-col bg-paper">
      <Nav theme="hub" />
      <main className="flex-1">
        <section className="relative overflow-hidden px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
          <div className="mx-auto max-w-7xl">
            <p className="animate-fade-up text-[0.7rem] uppercase tracking-[0.28em] text-muted">
              Familie · Neuburg an der Donau
            </p>
            <h1 className="animate-fade-up animate-delay-1 font-display mt-6 text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.9] tracking-[0.08em] uppercase text-ink">
              {site.name}
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-8 max-w-xl text-lg text-muted md:text-xl">
              Drei eigenständige Handwerke. Verbunden durch Eleganz, Präzision
              und die ruhige Haltung, Dinge richtig zu tun.
            </p>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8">
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
            <p className="mt-5 text-muted">
              Haut. Klang. Linie. Jede Welt hat ihre eigene Atmosphäre — und
              denselben Anspruch an Handwerk und Haltung.
            </p>
          </div>
        </section>
      </main>
      <Footer theme="hub" />
    </div>
  );
}
