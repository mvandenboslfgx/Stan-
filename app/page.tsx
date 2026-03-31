import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="py-32">
        <div className="container grid items-center gap-16 md:grid-cols-2">
          <div className="max-w-xl animate-fade-up">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Bouw en installaties.
              <br /> Zonder gedoe.
            </h1>

            <p className="mb-8 text-lg text-[#163764]">
              Professioneel uitgevoerd in Heinenoord en omgeving.
            </p>

            <div className="flex gap-4">
              <Link
                href="/diensten"
                className="rounded-lg border border-[#dbe7f7] bg-white px-6 py-3 text-[#102a4c] transition hover:scale-105 hover:bg-[#eff4fc]"
              >
                Bekijk diensten
              </Link>

              <Link
                href="/contact"
                className="rounded-lg bg-[#163764] px-6 py-3 text-white transition hover:scale-105 hover:bg-[#1f4a82]"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-xl animate-fade-up [animation-delay:120ms]">
            <Image
              src="/projects/douglas-buitenverblijven/douglas-1.png"
              alt="Project van S. Vermeulen Bouwservice"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#eff4fc] py-24">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold">Diensten</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-xl border border-[#dbe7f7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-2 font-semibold">Verwarming</h3>
              <p className="text-sm text-[#163764]">
                Installatie en onderhoud van verwarmingssystemen.
              </p>
            </div>

            <div className="animate-fade-up rounded-xl border border-[#dbe7f7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md [animation-delay:80ms]">
              <h3 className="mb-2 font-semibold">Sanitair</h3>
              <p className="text-sm text-[#163764]">
                Complete sanitaire oplossingen.
              </p>
            </div>

            <div className="animate-fade-up rounded-xl border border-[#dbe7f7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md [animation-delay:160ms]">
              <h3 className="mb-2 font-semibold">Renovatie</h3>
              <p className="text-sm text-[#163764]">
                Van verbouwing tot afwerking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold animate-fade-up">Klaar om te starten?</h2>

        <Link
          href="/contact"
          className="animate-fade-up rounded-lg bg-[#163764] px-6 py-3 text-white transition hover:scale-105 hover:bg-[#1f4a82] [animation-delay:120ms]"
        >
          Vraag offerte aan
        </Link>
      </section>
    </main>
  );
}
