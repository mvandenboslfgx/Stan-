import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten | S. Vermeulen Bouwservice",
  description:
    "Bekijk alle diensten van S. Vermeulen Bouwservice: verwarming, sanitair, renovatie en klussen.",
};

const services = [
  {
    title: "Verwarming",
    description: "Installatie, onderhoud en storingen van cv-systemen.",
    href: "/verwarming",
  },
  {
    title: "Sanitair",
    description: "Badkamers, leidingen en complete sanitaire installaties.",
    href: "/sanitair",
  },
  {
    title: "Ventilatie en luchtbehandeling",
    description: "Gezonde lucht en efficiënte installaties in huis.",
    href: "/contact",
  },
  {
    title: "Renovatie en verbouwing",
    description: "Van idee tot oplevering met strakke afwerking.",
    href: "/contact",
  },
  {
    title: "Klussen in en rondom huis",
    description: "Praktische oplossingen voor kleine en grote klussen.",
    href: "/contact",
  },
];

export default function DienstenPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-32">
      <h1 className="mb-8 text-5xl font-bold md:text-6xl">Diensten</h1>
      <p className="max-w-3xl text-lg text-[#163764]">
        Installatie, renovatie en onderhoud met duidelijke communicatie en
        professionele uitvoering.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="rounded-xl border border-[#dbe7f7] bg-[#eff4fc] p-8 shadow-sm transition hover:bg-[#dbe7f7]"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#0b1f3a]">{service.title}</h2>
            <p className="text-[#163764]">{service.description}</p>
            <p className="mt-6 text-[#1f4a82]">Naar pagina →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
