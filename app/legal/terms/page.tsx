import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | S. Vermeulen Bouwservice",
  description:
    "Algemene voorwaarden voor projectmatige installatiediensten van S. Vermeulen Bouwservice.",
};

const sections = [
  {
    title: "1. Ondernemer en toepasselijkheid",
    points: [
      "S. Vermeulen Bouwservice is een zelfstandig opererende onderneming, gevestigd te Heinenoord, KvK 94927898.",
      "Deze voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten.",
    ],
  },
  {
    title: "2. Onafhankelijke opdrachtnemer (Wet DBA)",
    points: [
      "Partijen sluiten uitdrukkelijk geen arbeidsovereenkomst.",
      "Opdrachtnemer voert werkzaamheden zelfstandig en naar eigen professioneel inzicht uit.",
      "Er bestaat geen gezagsverhouding; opdrachtgever geeft alleen opdrachtkaders en gewenste resultaten.",
      "Opdrachtnemer kan werkzaamheden laten uitvoeren door vervanging of inzet van derden.",
      "Opdrachtnemer werkt voor meerdere opdrachtgevers en hanteert geen exclusiviteitsverplichting, tenzij schriftelijk overeengekomen.",
    ],
  },
  {
    title: "3. Opdracht, planning en deliverables",
    points: [
      "Werkzaamheden worden projectmatig uitgevoerd op basis van overeengekomen opdrachtomschrijving, planning en deliverables.",
      "Aanpassingen buiten de opdrachtomschrijving gelden als meerwerk en worden aanvullend geoffreerd.",
      "Opdrachtnemer heeft een inspanningsverplichting voor professionele uitvoering en oplevering conform afspraak.",
    ],
  },
  {
    title: "4. Tarieven en betaling",
    points: [
      "Prijzen zijn exclusief btw, tenzij anders vermeld.",
      "Facturatie vindt plaats op basis van overeengekomen projectfasen en/of deliverables.",
      "Standaard betaalstructuur: 30% bij opdracht, 70% bij oplevering, tenzij schriftelijk anders afgesproken.",
      "Betalingstermijn: 14 dagen na factuurdatum.",
    ],
  },
  {
    title: "5. Aansprakelijkheid en overmacht",
    points: [
      "Aansprakelijkheid is beperkt tot directe schade en maximaal het factuurbedrag van de betreffende opdracht.",
      "Gevolgschade, indirecte schade en winstderving zijn uitgesloten.",
      "Bij overmacht worden verplichtingen tijdelijk opgeschort zonder schadeplichtigheid.",
    ],
  },
  {
    title: "6. Intellectueel eigendom en geheimhouding",
    points: [
      "Opdrachtnemer behoudt intellectuele eigendomsrechten op eigen methodiek, documentatie en knowhow, tenzij schriftelijk anders overeengekomen.",
      "Opdrachtnemer mag gerealiseerde projecten als referentie gebruiken, tenzij schriftelijk anders afgesproken.",
      "Partijen behandelen vertrouwelijke informatie strikt vertrouwelijk.",
    ],
  },
  {
    title: "7. Toepasselijk recht",
    points: [
      "Op alle rechtsverhoudingen is Nederlands recht van toepassing.",
      "Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Algemene voorwaarden</h1>
      <p className="mb-8 text-[#b8cdf0]">
        Deze voorwaarden zijn opgesteld voor resultaatgerichte projectopdrachten en
        zelfstandige uitvoering conform de Wet DBA.
      </p>
      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
            <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-[#b8cdf0]">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
