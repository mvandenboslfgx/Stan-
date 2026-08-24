import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installatie montage | S. Vermeulen Bouwservice",
  description:
    "Professionele installatie montage van W-installaties, S-installaties en installatiesystemen.",
};

export default function VerwarmingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <h1 className="mb-6 text-4xl font-bold md:mb-8 md:text-6xl">
        Installatie montage
      </h1>
      <p className="max-w-3xl text-lg text-[#b8cdf0]">
        Technische montage voor installatietechniek. Uitvoering volgens planning,
        met focus op kwaliteit en net werk op locatie.
      </p>

      <section className="mt-10 animate-fade-up rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 shadow-sm md:mt-12 md:p-10">
        <h2 className="mb-6 text-3xl font-bold">Wat wij doen</h2>
        <ul className="space-y-3 text-lg text-[#b8cdf0]">
          <li>Montage van W-installaties</li>
          <li>Montage van S-installaties</li>
          <li>Montage van installatiesystemen</li>
          <li>Technische uitvoering en eindcontrole</li>
        </ul>
      </section>

      <div className="mt-10">
        <Link
          href="/contact"
          className="rounded-lg bg-[#1a3c73] px-6 py-3 font-semibold text-[#dce8fb] transition hover:scale-105 hover:bg-[#224b8f]"
        >
          Offerte aanvragen
        </Link>
      </div>
    </main>
  );
}
