import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Montagebedrijf installatietechniek en houtbouw",
  description:
    "Neem contact op voor installatie montage, douglas houtbouw of complete montageprojecten.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <h1 className="mb-6 text-4xl font-bold md:mb-8 md:text-6xl">Contact</h1>
      <p className="max-w-3xl text-lg text-[#b8cdf0]">
        Stuur direct een WhatsApp-bericht voor installatie montage, douglas
        houtbouw of complete montageprojecten.
      </p>

      <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-12">
        <section className="animate-fade-up rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-[#dce8fb]">Gegevens</h2>
          <dl className="mt-6 space-y-5 text-[#b8cdf0]">
            <div>
              <dt className="text-sm text-[#dce8fb]">Telefoon</dt>
              <dd>
                <a className="hover:text-[#dce8fb]" href="tel:0612812600">
                  06-12812600
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#dce8fb]">E-mail</dt>
              <dd>
                <a
                  className="break-all hover:text-[#dce8fb]"
                  href="mailto:info@vermeulenbouwservice.nl"
                >
                  info@vermeulenbouwservice.nl
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#dce8fb]">Locatie</dt>
              <dd>Heinenoord</dd>
            </div>
            <div>
              <dt className="text-sm text-[#dce8fb]">KvK</dt>
              <dd>94927898</dd>
            </div>
            <div>
              <dt className="text-sm text-[#dce8fb]">BTW</dt>
              <dd>NL005118783B12</dd>
            </div>
          </dl>
        </section>

        <section className="animate-fade-up rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 shadow-sm [animation-delay:120ms] md:p-10">
          <h2 className="text-3xl font-bold text-[#dce8fb]">WhatsApp</h2>
          <p className="mt-4 text-[#b8cdf0]">
            Stuur ons direct een bericht. We reageren zo snel mogelijk.
          </p>
          <a
            href="https://wa.me/31612812600"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg bg-[#1a3c73] px-6 py-3 font-semibold text-[#dce8fb] transition hover:scale-105 hover:bg-[#224b8f]"
          >
            Open WhatsApp
          </a>
        </section>
      </div>
    </main>
  );
}
