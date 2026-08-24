import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten | Installatie montage en douglas houtbouw",
  description:
    "Gespecialiseerde diensten in installatie montage, douglas houtbouw en complete montageprojecten.",
};

const services = [
  {
    title: "Installatie montage",
    description:
      "Montage van W-installaties, S-installaties en installatiesystemen met technische precisie.",
    href: "/verwarming",
  },
  {
    title: "Douglas houtbouw",
    description:
      "Overkappingen, schuttingen, buitenverblijven en maatwerk constructies in duurzaam douglas hout.",
    href: "/sanitair",
  },
  {
    title: "Montage projecten",
    description:
      "Complete montageprojecten met strakke planning en uitvoering in samenwerking met aannemers.",
    href: "/contact",
  },
];

export default function DienstenPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <h1 className="mb-6 text-4xl font-bold md:mb-8 md:text-6xl">Diensten</h1>
      <p className="max-w-3xl text-lg text-[#b8cdf0]">
        Gericht op montage in installatietechniek en specialistisch douglas
        houtwerk. Kort, duidelijk en professioneel uitgevoerd.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="animate-fade-up rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-8 shadow-sm transition hover:-translate-y-1 hover:bg-[#10274d]"
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#dce8fb]">{service.title}</h2>
            <p className="text-[#b8cdf0]">{service.description}</p>
            <p className="mt-6 text-[#8fb1e3]">Naar pagina →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
