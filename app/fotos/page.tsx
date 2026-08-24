import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cases & projectresultaten | S. Vermeulen Bouwservice",
  description:
    "Bekijk gerealiseerde montageprojecten in installatietechniek en douglas houtbouw.",
};

const groupedPhotos = [
  {
    title: "Douglas buitenverblijven",
    photos: Array.from({ length: 10 }, (_, i) => ({
      src: `/projects/douglas-buitenverblijven/douglas-${i + 1}.png`,
    })),
  },
  {
    title: "Douglas / hout-beton schuttingen",
    photos: Array.from({ length: 5 }, (_, i) => ({
      src: `/projects/douglas-hout-beton-schuttingen/schutting-${i + 1}.png`,
    })),
  },
  {
    title: "Installatiewerk",
    photos: Array.from({ length: 9 }, (_, i) => ({
      src: `/projects/installatiewerk/installatie-${i + 1}.png`,
    })),
  },
];

export default function FotosPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-32">
      <h1 className="mb-6 text-4xl font-bold md:mb-8 md:text-6xl">Cases</h1>
      <p className="max-w-3xl text-lg text-[#b8cdf0]">
        Selectie van gerealiseerde montageprojecten en afwerkingsniveau.
      </p>

      {groupedPhotos.map((group, groupIndex) => (
        <section key={group.title} className="mt-10 first:mt-8 md:mt-14 md:first:mt-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#dce8fb]">{group.title}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {group.photos.map((photo, index) => (
              <div
                key={photo.src}
                className="group animate-fade-up overflow-hidden rounded-xl shadow-sm"
                style={{ animationDelay: `${groupIndex * 120 + index * 45}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={`${group.title} projectfoto`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
