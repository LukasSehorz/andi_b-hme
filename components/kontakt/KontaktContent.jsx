"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact, oeffnungszeiten, geo } from "@/lib/data";
import { EASE, FadeUp } from "@/components/motion";

export default function KontaktContent() {
  const bbox = `${(geo.lng - 0.012).toFixed(4)}%2C${(geo.lat - 0.006).toFixed(4)}%2C${(geo.lng + 0.012).toFixed(4)}%2C${(geo.lat + 0.006).toFixed(4)}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${geo.lat}%2C${geo.lng}`;

  return (
    <>
      {/* Hero mit Hintergrundbild */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden md:min-h-[660px]">
        <Image
          src="/images/praxis-2.webp"
          alt="Heller Behandlungsraum der Praxis INNNatur in Mühldorf am Inn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* gerichtete Verläufe: Text links lesbar, Bilddetails rechts sichtbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/55 to-forest/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            aria-label="Brotkrumen"
            className="mb-5 flex flex-wrap items-center gap-1 text-xs text-cream/70"
          >
            <Link href="/" className="transition-colors hover:text-leaf-soft">
              Start
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-cream">Kontakt</span>
          </motion.nav>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="text-kicker mb-4 inline-flex items-center gap-2 rounded-full bg-leaf px-3 py-1 text-cream"
          >
            Kontakt
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
            className="max-w-4xl font-display text-display-lg leading-tight text-cream [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]"
          >
            Sprechen Sie direkt mit Andy Böhme
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: EASE }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]"
          >
            Erzählen Sie mir kurz, was Sie bewegt. Sie erreichen mich
            telefonisch oder per E-Mail, und gemeinsam finden wir den passenden
            Weg für Ihre Behandlung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: EASE }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a href={contact.telefonHref} className="btn btn-primary btn-lg">
              <Phone className="size-4" />
              Jetzt anrufen
            </a>
            <a href={contact.emailHref} className="btn btn-outline-light btn-lg">
              <Mail className="size-4" />
              E-Mail schreiben
            </a>
          </motion.div>
        </div>
      </section>

      {/* Kontaktwege + Info */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1.3fr_1fr] lg:py-28">
        <FadeUp>
          <div className="rounded-3xl bg-forest p-8 text-cream shadow-xl shadow-forest/10 md:p-10">
            <h2 className="font-display text-display-md">So erreichen Sie mich</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/70">
              Am schnellsten geht es telefonisch, mobil bin ich auch außerhalb
              der üblichen Zeiten erreichbar. Gerne können Sie mir Ihr Anliegen
              auch per E-Mail schildern, ich melde mich in der Regel innerhalb
              von 24 Stunden bei Ihnen.
            </p>

            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href={contact.telefonHref}
                  className="group flex items-center gap-4 rounded-2xl border hairline-light bg-pine/40 p-5 transition-colors hover:bg-pine/70"
                >
                  <Phone className="size-6 shrink-0 text-leaf-soft" />
                  <span>
                    <span className="block text-kicker text-cream/60">Praxis</span>
                    <span className="mt-1 block font-display text-xl">{contact.telefon}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.mobilHref}
                  className="group flex items-center gap-4 rounded-2xl border hairline-light bg-pine/40 p-5 transition-colors hover:bg-pine/70"
                >
                  <Phone className="size-6 shrink-0 text-leaf-soft" />
                  <span>
                    <span className="block text-kicker text-cream/60">Mobil</span>
                    <span className="mt-1 block font-display text-xl">{contact.mobil}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="group flex items-center gap-4 rounded-2xl border hairline-light bg-pine/40 p-5 transition-colors hover:bg-pine/70"
                >
                  <Mail className="size-6 shrink-0 text-leaf-soft" />
                  <span>
                    <span className="block text-kicker text-cream/60">E-Mail</span>
                    <span className="mt-1 block break-all font-display text-lg md:text-xl">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-start gap-3 border-t hairline-light pt-6 text-sm text-cream/80">
              <MapPin className="mt-0.5 size-5 shrink-0 text-leaf-soft" />
              <address className="not-italic leading-relaxed">
                {contact.praxis} im FTZ Mühldorf
                <br />
                {contact.strasse}
                <br />
                {contact.ort}
              </address>
            </div>
          </div>
        </FadeUp>

        <aside className="space-y-6">
          <FadeUp delay={0.1}>
            <div className="rounded-3xl border hairline bg-paper p-8">
              <h3 className="flex items-center gap-2 font-display text-xl text-ink">
                <Clock className="size-5 text-leaf" /> Termine
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {oeffnungszeiten.map((o) => (
                  <li
                    key={o.tag}
                    className="flex justify-between gap-4 border-b border-ink/10 py-1.5 last:border-0"
                  >
                    <span className="font-medium text-ink">{o.tag}</span>
                    <span className="text-right text-mist">{o.zeit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-mist">
                Die Behandlung erfolgt ausschließlich nach Vereinbarung. Rufen
                Sie an oder schreiben Sie mir, dann finden wir gemeinsam einen
                passenden Termin.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border hairline">
              <iframe
                title="Karte, Praxis INNNatur, Münchener Straße 84c, Mühldorf am Inn"
                className="size-full"
                loading="lazy"
                src={mapSrc}
              />
            </div>
          </FadeUp>
        </aside>
      </section>
    </>
  );
}

function ChevronRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
    </svg>
  );
}

function Phone({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function Mail({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m18 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m18 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function MapPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function Clock({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
