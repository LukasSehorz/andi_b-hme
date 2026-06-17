import { contact } from "@/lib/data";

export const metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="px-5 pb-24 pt-32 md:px-8 md:pt-44">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-display-lg text-ink">Impressum</h1>

        <div className="mt-12 space-y-10 leading-relaxed text-mist">
          <div>
            <h2 className="text-kicker mb-4 text-pine">Angaben gemäß § 5 DDG</h2>
            <p className="text-ink">
              {contact.praxis} · Praxis für Sportphysiotherapie und Heilpraktik
              <br />
              {contact.name}
              <br />
              {contact.strasse}
              <br />
              {contact.ort}
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Kontakt</h2>
            <p>
              Telefon {contact.telefon}
              <br />
              Mobil {contact.mobil}
              <br />
              E-Mail{" "}
              <a href={contact.emailHref} className="link-quiet text-ink underline decoration-leaf/40 underline-offset-4">
                {contact.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Berufsbezeichnung</h2>
            <p>
              Physiotherapeut und Heilpraktiker, verliehen in der Bundesrepublik
              Deutschland. Es gelten die berufsrechtlichen Regelungen des
              Heilpraktikergesetzes sowie des Masseur- und
              Physiotherapeutengesetzes.
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Hinweis</h2>
            <p>
              Diese Angaben sind vor Veröffentlichung der Seite durch den
              Praxisinhaber zu prüfen und um Aufsichtsbehörde sowie
              Umsatzsteuer-Angaben zu ergänzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
