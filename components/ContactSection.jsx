"use client";

import { contact } from "@/lib/data";
import { FadeUp, SplitWords } from "@/components/motion";
import Grasses from "@/components/Grasses";

/* Gemeinsame Kontakt-Sektion am Ende jeder Seite */
export default function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-sage px-6 py-16 md:px-16 md:py-24">
        <Grasses className="pointer-events-none absolute -bottom-6 right-4 h-52 w-auto text-leaf/20 md:right-16" />

        <div className="relative max-w-2xl">
          <FadeUp>
            <p className="text-kicker mb-6 text-pine">Kontakt</p>
          </FadeUp>
          <SplitWords
            as="h2"
            text="Der erste Schritt ist ein *Anruf.*"
            className="font-display text-display-lg text-ink"
          />
          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-xl leading-relaxed text-mist">
              Erzählen Sie mir kurz, was Sie bewegt. Gemeinsam finden wir einen
              Termin und den passenden Weg für Ihre Behandlung. Sie erreichen
              die Praxis telefonisch, mobil auch außerhalb der üblichen Zeiten.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={contact.telefonHref} className="btn btn-primary btn-lg">
              {contact.telefon}
            </a>
            <a href={contact.emailHref} className="btn btn-outline btn-lg">
              E-Mail schreiben
            </a>
          </FadeUp>

          <FadeUp delay={0.35}>
            <dl className="mt-12 grid gap-x-12 gap-y-6 border-t hairline pt-8 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-kicker mb-2 text-pine">Adresse</dt>
                <dd className="leading-relaxed text-ink/80">
                  {contact.strasse}
                  <br />
                  {contact.ort}
                </dd>
              </div>
              <div>
                <dt className="text-kicker mb-2 text-pine">Mobil</dt>
                <dd className="leading-relaxed text-ink/80">
                  <a href={contact.mobilHref} className="link-quiet">
                    {contact.mobil}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-kicker mb-2 text-pine">Termine</dt>
                <dd className="leading-relaxed text-ink/80">
                  Nach Vereinbarung, auch für Berufstätige gut planbar
                </dd>
              </div>
            </dl>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
