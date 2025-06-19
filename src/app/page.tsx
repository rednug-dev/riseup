import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Riseup | Antirasistisk ungdomsengasjement i lokalmiljøet",
  description:
    "Riseup er en frivillig organisasjon som driver antirasistiske prosjekter og aktiviteter for ungdom.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[70vh] px-6 text-center bg-gradient-to-br from-rose-500 via-fuchsia-600 to-indigo-600 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Sammen <span className="underline decoration-yellow-400">står</span> vi sterkere&nbsp;mot&nbsp;rasisme
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light">
            Riseup samler ungdom for å skape et inkluderende lokalsamfunn gjennom prosjekter, workshops og fritidsaktiviteter.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#get-involved"
              className="px-8 py-3 rounded-full bg-white/90 text-rose-600 font-semibold hover:bg-white transition-colors"
            >
              Engasjer deg
            </Link>
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full border border-white/80 hover:bg-white/10 transition-colors"
            >
              Våre prosjekter
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero-overlay.svg"
          alt="Dekorativ bakgrunnsgrafikk"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 pointer-events-none"
          priority
        />
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Hvem er vi?</h2>
          <p className="mt-4 text-lg">
            Riseup drives av frivillige ildsjeler med hjerte for antirasisme. Vi arrangerer alt fra gatemøter og debattkvelder til
            kreative verksteder og fotballturneringer – alltid med mål om å styrke fellesskap, respekt og muligheter for ungdom.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Aktuelle prosjekter</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Street Art for Unity",
                desc: "Vi gir ungdom verktøy til å uttrykke antirasisme gjennom gatekunst og muraler i byen.",
              },
              {
                title: "Fotball mot hat",
                desc: "En inkluderende fotballturnering hvor lagene blandes for å bryte ned fordommer.",
              },
              {
                title: "Speak Up‑workshops",
                desc: "Retorikk‑ og historiefortelling‑kurs som hjelper unge stemmer å bli hørt.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-white shadow-md p-6 flex flex-col">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-gray-700 flex-grow">{desc}</p>
                <Link href="#get-involved" className="mt-6 self-start text-rose-600 hover:underline">
                  Les mer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section id="get-involved" className="py-20 px-6 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Bli frivillig eller støtt oss</h2>
          <p className="mt-4 text-lg">
            Uansett om du vil bidra som mentor, delta på arrangementer eller støtte økonomisk – vi trenger deg.
          </p>
          <Link
            href="mailto:kontakt@riseup.no"
            className="inline-block mt-8 px-10 py-4 bg-white text-rose-600 rounded-full font-semibold hover:bg-yellow-300 hover:text-rose-700 transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </main>
  );
}
