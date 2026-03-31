import type { Metadata } from "next";
import ContactForm from "../components/contact-form";

export const metadata: Metadata = {
  title: "Contact | S. Vermeulen Bouwservice",
  description:
    "Neem contact op met S. Vermeulen Bouwservice voor offertes en advies in Heinenoord en omgeving.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-32">
      <h1 className="mb-8 text-5xl font-bold md:text-6xl">Contact</h1>
      <p className="max-w-3xl text-lg text-[#163764]">
        Neem vrijblijvend contact op voor advies of een offerte op maat.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <section className="rounded-xl border border-[#dbe7f7] bg-[#eff4fc] p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-[#0b1f3a]">Gegevens</h2>
          <dl className="mt-6 space-y-5 text-[#163764]">
            <div>
              <dt className="text-sm text-[#0b1f3a]">Telefoon</dt>
              <dd>
                <a className="hover:text-[#1f4a82]" href="tel:0612812600">
                  06-12812600
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#0b1f3a]">E-mail</dt>
              <dd>
                <a
                  className="hover:text-[#1f4a82]"
                  href="mailto:info@vermeulenbouwservices.nl"
                >
                  info@vermeulenbouwservices.nl
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[#0b1f3a]">Locatie</dt>
              <dd>Heinenoord</dd>
            </div>
            <div>
              <dt className="text-sm text-[#0b1f3a]">KvK</dt>
              <dd>94927898</dd>
            </div>
            <div>
              <dt className="text-sm text-[#0b1f3a]">BTW</dt>
              <dd>NL005118783B12</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-[#dbe7f7] bg-[#eff4fc] p-3 shadow-sm">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
