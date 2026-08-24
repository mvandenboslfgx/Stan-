import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring | S. Vermeulen Bouwservice",
  description: "AVG privacyverklaring van S. Vermeulen Bouwservice.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacyverklaring</h1>
      <p className="mb-8 text-[#b8cdf0]">
        S. Vermeulen Bouwservice verwerkt persoonsgegevens conform de AVG en
        uitsluitend voor zakelijke communicatie en projectuitvoering.
      </p>

      <div className="space-y-6">
        <section className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
          <h2 className="mb-3 text-xl font-semibold">Welke gegevens</h2>
          <ul className="list-disc space-y-2 pl-6 text-[#b8cdf0]">
            <li>Naam, e-mailadres, telefoonnummer en projectinformatie die u actief verstrekt.</li>
            <li>Technische basisinformatie voor websitebeveiliging en statistieken.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
          <h2 className="mb-3 text-xl font-semibold">Doeleinden</h2>
          <ul className="list-disc space-y-2 pl-6 text-[#b8cdf0]">
            <li>Opstellen en uitvoeren van offertes, opdrachten en projectafspraken.</li>
            <li>Communicatie over planning, uitvoering en oplevering.</li>
            <li>Nakoming van wettelijke verplichtingen, zoals administratie en facturatie.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
          <h2 className="mb-3 text-xl font-semibold">Bewaartermijn en rechten</h2>
          <ul className="list-disc space-y-2 pl-6 text-[#b8cdf0]">
            <li>Gegevens worden niet langer bewaard dan noodzakelijk of wettelijk verplicht.</li>
            <li>U heeft recht op inzage, correctie, verwijdering en beperking van verwerking.</li>
            <li>Verzoeken kunnen worden ingediend via info@vermeulenbouwservice.nl.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
