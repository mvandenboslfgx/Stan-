import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | S. Vermeulen Bouwservice",
  description: "Disclaimer en gebruiksvoorwaarden van S. Vermeulen Bouwservice.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Disclaimer</h1>
      <p className="mb-8 text-[#b8cdf0]">
        De inhoud van deze website is informatief en bedoeld voor zakelijke
        oriëntatie op diensten van S. Vermeulen Bouwservice.
      </p>

      <div className="space-y-6">
        <section className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
          <h2 className="mb-3 text-xl font-semibold">Geen arbeidsrelatie</h2>
          <p className="text-[#b8cdf0]">
            Informatie op deze website impliceert geen arbeidsovereenkomst of
            gezagsverhouding. Opdrachten worden uitgevoerd als zelfstandige,
            projectmatige dienstverlening op basis van contractafspraken.
          </p>
        </section>

        <section className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
          <h2 className="mb-3 text-xl font-semibold">Aansprakelijkheid</h2>
          <p className="text-[#b8cdf0]">
            Hoewel deze website zorgvuldig is samengesteld, kan geen garantie
            worden gegeven op volledigheid of actualiteit. Gebruik van informatie
            is op eigen verantwoordelijkheid.
          </p>
        </section>

        <section className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6">
          <h2 className="mb-3 text-xl font-semibold">Wijzigingen</h2>
          <p className="text-[#b8cdf0]">
            S. Vermeulen Bouwservice behoudt zich het recht voor om website-inhoud,
            voorwaarden en juridische pagina&apos;s zonder voorafgaande kennisgeving aan
            te passen.
          </p>
        </section>
      </div>
    </main>
  );
}
