import { contact } from "@/lib/data";

export const metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="px-5 pb-24 pt-32 md:px-8 md:pt-44">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-display-lg text-ink">Datenschutzerklärung</h1>

        <div className="mt-12 space-y-10 leading-relaxed text-mist">
          <div>
            <h2 className="text-kicker mb-4 text-pine">Verantwortlicher</h2>
            <p className="text-ink">
              {contact.name} · {contact.praxis}
              <br />
              {contact.strasse}, {contact.ort}
              <br />
              {contact.email}
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Erhebung von Daten</h2>
            <p>
              Beim Besuch dieser Webseite werden durch den Hosting-Anbieter
              automatisch technische Zugriffsdaten in sogenannten
              Server-Logfiles gespeichert, etwa Browsertyp, Uhrzeit des
              Zugriffs und IP-Adresse. Diese Daten dienen ausschließlich der
              Sicherstellung eines störungsfreien Betriebs und werden nach
              kurzer Zeit gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Kontaktaufnahme</h2>
            <p>
              Wenn Sie per Telefon oder E-Mail Kontakt aufnehmen, werden Ihre
              Angaben zur Bearbeitung der Anfrage sowie für mögliche
              Anschlussfragen gespeichert. Eine Weitergabe an Dritte erfolgt
              nur mit Ihrer ausdrücklichen Einwilligung.
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Externe Schriften</h2>
            <p>
              Diese Seite bindet Schriftarten des Anbieters Fontshare (Indian
              Type Foundry) ein. Beim Laden der Seite wird dabei eine
              Verbindung zu den Servern des Anbieters aufgebaut. Alternativ
              können die Schriften vor Veröffentlichung lokal eingebunden
              werden.
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung und Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten sowie ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde.
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Hinweis</h2>
            <p>
              Diese Erklärung ist eine Vorlage und vor Veröffentlichung der
              Seite juristisch zu prüfen und an den tatsächlichen Betrieb
              anzupassen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
