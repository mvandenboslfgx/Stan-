"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/diensten", label: "Diensten" },
    { href: "/fotos", label: "Foto's" },
    { href: "/contact", label: "Contact" },
    { href: "/legal/terms", label: "Voorwaarden" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a3c73] bg-[#06142b]/95 backdrop-blur">
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="S. Vermeulen Bouwservice logo"
            width={96}
            height={96}
            className="h-20 w-20 object-contain md:h-24 md:w-24"
            priority
          />
        </Link>

        <nav className="hidden gap-8 text-sm text-[#b8cdf0] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-lg bg-[#1a3c73] px-5 py-2 text-sm font-semibold text-[#dce8fb] transition hover:bg-[#224b8f] md:inline-flex"
        >
          Offerte aanvragen
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-lg border border-[#1a3c73] bg-[#0a1c38] px-3 py-2 text-sm text-[#dce8fb] md:hidden"
        >
          Menu
        </button>
        </div>

        {isOpen ? (
          <div className="mt-3 space-y-2 rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-3 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-[#dce8fb] transition hover:bg-[#10274d]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-lg bg-[#1a3c73] px-4 py-2 text-sm font-semibold text-[#dce8fb] transition hover:bg-[#224b8f]"
            >
              Offerte aanvragen
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
