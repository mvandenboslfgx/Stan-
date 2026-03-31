import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | S. Vermeulen Bouwservice",
  description:
    "Algemene voorwaarden van S. Vermeulen Bouwservice, gevestigd te Heinenoord.",
};

const sections = [
  {
    title: "Artikel 1 – Definities",
    points: [
      "Opdrachtnemer: S. Vermeulen Bouwservice, gevestigd te Heinenoord, ingeschreven bij de Kamer van Koophandel onder nummer 94927898.",
      "Opdrachtgever: iedere natuurlijke of rechtspersoon die gebruik maakt van de diensten van opdrachtnemer.",
      "Overeenkomst: iedere afspraak tussen opdrachtnemer en opdrachtgever.",
    ],
  },
  {
    title: "Artikel 2 – Toepasselijkheid",
    points: [
      "Deze algemene voorwaarden zijn van toepassing op alle offertes, werkzaamheden en overeenkomsten.",
      "Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.",
    ],
  },
  {
    title: "Artikel 3 – Zelfstandige uitvoering (Wet DBA)",
    points: [
      "Opdrachtnemer voert werkzaamheden uit als zelfstandig ondernemer.",
      "Er is geen sprake van een arbeidsovereenkomst.",
      "Opdrachtnemer bepaalt zelfstandig: wijze van uitvoering, werktijden en gebruikte materialen en middelen.",
      "Opdrachtgever oefent geen gezag uit over opdrachtnemer.",
      "Opdrachtnemer is gerechtigd zich te laten vervangen.",
    ],
  },
  {
    title: "Artikel 4 – Offertes en overeenkomsten",
    points: [
      "Offertes zijn vrijblijvend, tenzij anders vermeld.",
      "Een overeenkomst komt tot stand na mondelinge, schriftelijke of digitale bevestiging.",
      "Opdrachtnemer behoudt zich het recht voor opdrachten te weigeren.",
    ],
  },
  {
    title: "Artikel 5 – Uitvoering van werkzaamheden",
    points: [
      "Werkzaamheden worden uitgevoerd naar beste inzicht en vakmanschap.",
      "Opdrachtnemer heeft een inspanningsverplichting, tenzij anders overeengekomen.",
      "Opdrachtgever zorgt voor tijdige aanlevering van benodigde informatie en toegang tot de werkplek.",
    ],
  },
  {
    title: "Artikel 6 – Tarieven en betaling",
    points: [
      "Alle prijzen zijn exclusief btw, tenzij anders vermeld.",
      "Betaling dient te geschieden binnen 14 dagen na factuurdatum.",
      "Opdrachtnemer hanteert 30% aanbetaling vooraf en 70% betaling bij oplevering.",
      "Bij te late betaling zijn wettelijke rente en incassokosten voor rekening van opdrachtgever.",
    ],
  },
  {
    title: "Artikel 7 – Meerwerk",
    points: [
      "Werkzaamheden buiten de oorspronkelijke opdracht worden beschouwd als meerwerk.",
      "Meerwerk wordt aanvullend gefactureerd.",
    ],
  },
  {
    title: "Artikel 8 – Meerdere opdrachtgevers",
    points: [
      "Opdrachtnemer is vrij om werkzaamheden voor meerdere opdrachtgevers uit te voeren.",
      "Er geldt geen exclusiviteit, tenzij schriftelijk overeengekomen.",
    ],
  },
  {
    title: "Artikel 9 – Aansprakelijkheid",
    points: [
      "Opdrachtnemer is uitsluitend aansprakelijk voor directe schade.",
      "Aansprakelijkheid is beperkt tot het bedrag van de betreffende factuur.",
      "Opdrachtnemer is niet aansprakelijk voor gevolgschade, indirecte schade en winstderving.",
    ],
  },
  {
    title: "Artikel 10 – Overmacht",
    points: [
      "Onder overmacht wordt verstaan: omstandigheden buiten de invloed van opdrachtnemer.",
      "Bij overmacht worden verplichtingen tijdelijk opgeschort.",
    ],
  },
  {
    title: "Artikel 11 – Garantie en oplevering",
    points: [
      "Opdrachtnemer levert werk op in goede staat conform afspraak.",
      "Eventuele gebreken dienen binnen redelijke termijn gemeld te worden.",
      "Garantie geldt uitsluitend op uitgevoerde werkzaamheden, niet op slijtage of verkeerd gebruik.",
    ],
  },
  {
    title: "Artikel 12 – Intellectueel eigendom",
    points: [
      "Opdrachtnemer behoudt het recht om uitgevoerde projecten te gebruiken voor portfolio en promotie.",
    ],
  },
  {
    title: "Artikel 13 – Beëindiging",
    points: [
      "Beide partijen kunnen de overeenkomst beëindigen met een redelijke opzegtermijn.",
      "Reeds uitgevoerde werkzaamheden worden gefactureerd.",
    ],
  },
  {
    title: "Artikel 14 – Geheimhouding",
    points: [
      "Beide partijen verplichten zich tot geheimhouding van vertrouwelijke informatie.",
    ],
  },
  {
    title: "Artikel 15 – Toepasselijk recht",
    points: [
      "Op alle overeenkomsten is Nederlands recht van toepassing.",
      "Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Algemene Voorwaarden</h1>
      <p className="mb-2 text-lg text-[#163764]">S. Vermeulen Bouwservice</p>
      <p className="mb-10 text-sm text-[#1f4a82]">Laatst bijgewerkt: 31 maart 2026</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-xl border border-[#dbe7f7] bg-[#eff4fc] p-6"
          >
            <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
            <ul className="list-disc space-y-2 pl-6 text-[#163764]">
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
