import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "S. Vermeulen Bouwservice | Montagebedrijf installatietechniek en houtbouw",
  description:
    "Montagebedrijf in de installatietechniek en specialist in douglas houtbouw. Strakke planning, duidelijke communicatie en vakwerk in uitvoering.",
  keywords: ["Montagebedrijf", "Installatietechniek", "Douglas houtbouw", "Overkapping", "Schutting", "Buitenverblijf"],
  openGraph: {
    title: "S. Vermeulen Bouwservice | Montagebedrijf installatietechniek en houtbouw",
    description:
      "Montagebedrijf in de installatietechniek en specialist in douglas houtbouw. Strakke planning en technisch vakmanschap.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className="bg-[#030b1a] text-[#dce8fb] antialiased">
        <SiteHeader />
        {children}
        <a
          href="https://wa.me/31612812600"
          target="_blank"
          rel="noreferrer"
          aria-label="Stuur een WhatsApp-bericht"
          className="fixed bottom-3 right-3 z-50 rounded-full bg-[#1a3c73] px-4 py-2 text-xs font-bold text-[#dce8fb] shadow-lg transition hover:scale-105 hover:bg-[#224b8f] sm:bottom-5 sm:right-5 sm:px-5 sm:py-3 sm:text-sm"
        >
          WhatsApp
        </a>
        <footer className="border-t border-[#1a3c73] bg-[#06142b]">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-[#b8cdf0]">
            <Image
              src="/logo.png"
              alt="S. Vermeulen Bouwservice logo"
              width={84}
              height={84}
              className="h-20 w-20 rounded object-cover"
            />
            <p className="font-medium text-[#dce8fb]">S. Vermeulen Bouwservice</p>
            <p>Locatie: Heinenoord</p>
            <p>KvK 94927898 · BTW NL005118783B12</p>
            <Link
              href="/legal/terms"
              className="underline underline-offset-2 transition hover:text-[#dce8fb]"
            >
              Algemene voorwaarden
            </Link>
            <Link
              href="/legal/privacy"
              className="underline underline-offset-2 transition hover:text-[#dce8fb]"
            >
              Privacyverklaring
            </Link>
            <Link
              href="/legal/disclaimer"
              className="underline underline-offset-2 transition hover:text-[#dce8fb]"
            >
              Disclaimer
            </Link>
            <p>
              Bouwmerk door{" "}
              <a
                href="https://vdbdigital.nl"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 transition hover:text-[#dce8fb]"
              >
                VDB Digital
              </a>
            </p>
            <p>{new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
