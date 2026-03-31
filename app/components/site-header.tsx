import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe7f7] bg-[#f8fbff]/95 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="S. Vermeulen Bouwservice logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
        </Link>

        <nav className="hidden gap-8 text-sm text-[#163764] md:flex">
          <Link href="/">Home</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/fotos">Foto&apos;s</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/algemene-voorwaarden">Voorwaarden</Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-[#163764] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1f4a82]"
        >
          Offerte aanvragen
        </Link>
      </div>
    </header>
  );
}
