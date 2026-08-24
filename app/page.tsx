import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden py-16 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-douglas.png')" }}
        />
        <div className="absolute inset-0 bg-[#030b1a]/70" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl animate-fade-up text-left md:text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Montagebedrijf in de installatietechniek en houtbouw.
              <br /> Strakke montage. Kwalitatief houtwerk.
            </h1>

            <p className="mb-8 text-lg text-[#b8cdf0]">
              Specialist in douglas houtbouw. Duidelijk in communicatie. Strak in
              uitvoering.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:justify-center">
              <Link
                href="/diensten"
                className="rounded-lg border border-[#1a3c73] bg-[#06142b] px-6 py-3 text-[#dce8fb] transition hover:scale-105 hover:bg-[#0a1c38]"
              >
                Bekijk diensten
              </Link>

              <Link
                href="/contact"
                className="animate-pulse-soft rounded-lg bg-[#1a3c73] px-6 py-3 text-[#dce8fb] transition hover:scale-105 hover:bg-[#224b8f]"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06142b] py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold md:mb-12">Diensten</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up animate-float-slow rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="mb-2 font-semibold">Installatie montage</h3>
              <p className="text-sm text-[#b8cdf0]">
                Montage van W-installaties, S-installaties en technische systemen.
                Nauwkeurig en professioneel uitgevoerd.
              </p>
            </div>

            <div className="animate-fade-up animate-float-slow rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md [animation-delay:80ms]">
              <h3 className="mb-2 font-semibold">Douglas houtbouw</h3>
              <p className="text-sm text-[#b8cdf0]">
                Overkappingen, schuttingen, buitenverblijven en maatwerk
                houtconstructies. Strak afgewerkt met duurzaam douglas hout.
              </p>
            </div>

            <div className="animate-fade-up animate-float-slow rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md [animation-delay:160ms]">
              <h3 className="mb-2 font-semibold">Montage projecten</h3>
              <p className="text-sm text-[#b8cdf0]">
                Complete montageprojecten in samenwerking met aannemers.
                Strakke planning en duidelijke oplevermomenten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Werkwijze</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Intake en duidelijke afspraken",
              "Planning en werkvoorbereiding",
              "Montage en afwerking",
              "Oplevering en overdracht",
            ].map((step, index) => (
              <div
                key={step}
                className="animate-fade-up rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-5 text-sm text-[#b8cdf0]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06142b] py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Waarom opdrachtgevers kiezen voor ons</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Duidelijke communicatie tijdens het hele traject.",
              "Strakke planning en betrouwbare uitvoering.",
              "Eén aanspreekpunt en zichtbaar vakmanschap op locatie.",
            ].map((item, index) => (
              <div
                key={item}
                className="animate-fade-up rounded-xl border border-[#1a3c73] bg-[#0a1c38] p-6 text-[#b8cdf0]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center md:py-24">
        <h2 className="mb-4 text-3xl font-bold animate-fade-up">
          Klaar om uw montageproject te starten?
        </h2>

        <Link
          href="/contact"
          className="animate-fade-up rounded-lg bg-[#1a3c73] px-6 py-3 text-[#dce8fb] transition hover:scale-105 hover:bg-[#224b8f] [animation-delay:120ms]"
        >
          Start via WhatsApp
        </Link>
      </section>
    </main>
  );
}
