import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | S. Vermeulen Bouwservice",
  description:
    "Juridische informatie, voorwaarden, privacy en disclaimer van S. Vermeulen Bouwservice.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Juridische informatie</h1>
      <p className="mb-2 text-lg text-[#b8cdf0]">S. Vermeulen Bouwservice</p>
      <p className="mb-10 text-sm text-[#8fb1e3]">Laatst bijgewerkt: 31 maart 2026</p>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/legal/terms"
          className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 transition hover:bg-[#10274d]"
        >
          <h2 className="mb-2 text-xl font-semibold">Algemene voorwaarden</h2>
          <p className="text-[#b8cdf0]">Contractvoorwaarden inclusief Wet DBA-clausules.</p>
        </Link>
        <Link
          href="/legal/privacy"
          className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 transition hover:bg-[#10274d]"
        >
          <h2 className="mb-2 text-xl font-semibold">Privacyverklaring</h2>
          <p className="text-[#b8cdf0]">AVG-informatie over verwerking en rechten.</p>
        </Link>
        <Link
          href="/legal/disclaimer"
          className="rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 transition hover:bg-[#10274d]"
        >
          <h2 className="mb-2 text-xl font-semibold">Disclaimer</h2>
          <p className="text-[#b8cdf0]">Gebruik, aansprakelijkheid en informatievoorbehoud.</p>
        </Link>
      </div>
    </main>
  );
}
