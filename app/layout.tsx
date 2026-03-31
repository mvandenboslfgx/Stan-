import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "S. Vermeulen Bouwservice | Installatie & Bouw Heinenoord",
  description:
    "Specialist in verwarming, ventilatie, sanitair en renovatie in Heinenoord en omgeving.",
  keywords: ["Bouwservice", "Installatie", "Heinenoord", "Renovatie"],
  openGraph: {
    title: "S. Vermeulen Bouwservice | Installatie & Bouw Heinenoord",
    description:
      "Specialist in verwarming, ventilatie, sanitair en renovatie in Heinenoord en omgeving.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className="bg-[#f8fbff] text-[#0b1f3a] antialiased">
        <SiteHeader />
        {children}
        <a
          href="https://wa.me/31612812600"
          target="_blank"
          rel="noreferrer"
          aria-label="Stuur een WhatsApp-bericht"
          className="fixed bottom-5 right-5 z-50 rounded-full bg-[#163764] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#1f4a82]"
        >
          WhatsApp
        </a>
        <footer className="border-t border-[#dbe7f7] bg-[#f8fbff]">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-[#163764]">
            <Image
              src="/logo.png"
              alt="S. Vermeulen Bouwservice logo"
              width={84}
              height={84}
              className="h-20 w-20 rounded object-cover"
            />
            <p className="font-medium text-[#0b1f3a]">S. Vermeulen Bouwservice</p>
            <p>Locatie: Heinenoord</p>
            <p>KvK 94927898 · BTW NL005118783B12</p>
            <Link
              href="/algemene-voorwaarden"
              className="underline underline-offset-2 transition hover:text-[#1f4a82]"
            >
              Algemene voorwaarden
            </Link>
            <p>{new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
