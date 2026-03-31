import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sanitair | S. Vermeulen Bouwservice",
  description:
    "Sanitair en badkamer installaties voor renovatie en nieuwbouw in Heinenoord en omgeving.",
};

export default function SanitairPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-32">
      <h1 className="mb-8 text-5xl font-bold md:text-6xl">
        Sanitair en badkamer installaties
      </h1>
      <p className="max-w-3xl text-lg text-[#163764]">
        Complete sanitaire installaties voor renovatie en nieuwbouw, strak en
        professioneel opgeleverd.
      </p>

      <section className="mt-12 rounded-xl border border-[#dbe7f7] bg-[#eff4fc] p-10 shadow-sm">
        <h2 className="mb-6 text-3xl font-bold">Wat wij doen</h2>
        <ul className="space-y-3 text-lg text-[#163764]">
          <li>Badkamer installatie</li>
          <li>Toiletten</li>
          <li>Leidingen</li>
          <li>Renovatie</li>
        </ul>
      </section>

      <div className="mt-10">
        <Link
          href="/contact"
          className="rounded-lg bg-[#163764] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#1f4a82]"
        >
          Offerte aanvragen
        </Link>
      </div>
    </main>
  );
}
