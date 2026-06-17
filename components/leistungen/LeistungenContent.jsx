"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leistungsGruppen, contact } from "@/lib/data";
import { FadeUp, SplitWords, Parallax, ImageReveal, EASE } from "@/components/motion";

export default function LeistungenContent() {
  return (
    <>
      {/* Kopfbereich */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="relative z-10 lg:order-last">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                className="text-kicker mb-8 text-pine"
              >
                Leistungen
              </motion.p>

              <SplitWords
                as="h1"
                text="Therapie, die beim ganzen *Menschen* ansetzt."
                className="font-display text-display-lg text-ink"
                delay={0.4}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1, ease: EASE }}
                className="mt-8 max-w-lg text-lg leading-relaxed text-mist"
              >
                Sportler und Privatpersonen finden in der Praxis INNNatur
                vierzehn Behandlungsarten und Techniken unter einem Dach. Welche
                davon für Sie die richtige ist, entscheidet Ihr Befund und nie
                ein Schema.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a href="#diagnostik" className="btn btn-primary btn-lg group">
                  Behandlungen entdecken
                  <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-1" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-14 grid gap-8 border-t hairline pt-8 sm:grid-cols-3 sm:gap-6"
              >
                <div>
                  <PersonIcon className="size-6 text-leaf" />
                  <p className="mt-3 text-sm font-medium text-ink">
                    Persönliche Betreuung
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    Zeit und volle Aufmerksamkeit für Sie.
                  </p>
                </div>
                <div>
                  <HeartIcon className="size-6 text-leaf" />
                  <p className="mt-3 text-sm font-medium text-ink">
                    Individuelle Therapie
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    Ihr Befund entscheidet, nie ein Schema.
                  </p>
                </div>
                <div>
                  <TrendIcon className="size-6 text-leaf" />
                  <p className="mt-3 text-sm font-medium text-ink">
                    Nachhaltige Ergebnisse
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    Ursachen behandeln, nicht nur Symptome.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
                className="arch relative aspect-[4/3] overflow-hidden bg-paper"
              >
                <motion.div
                  initial={{ scale: 1.18 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
                  className="h-full w-full"
                >
                  <Image
                    src="/images/cu-knie.png"
                    alt="Andy Böhme mobilisiert das Kniegelenk einer Patientin auf der Behandlungsbank"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
                className="absolute -bottom-6 -right-4 rounded-2xl border hairline bg-paper px-6 py-4 shadow-xl shadow-forest/10 md:-right-8"
              >
                <p className="font-display text-lg text-ink">14 Behandlungsarten</p>
                <p className="text-sm text-mist">von der Diagnostik bis zum Training</p>
              </motion.div>
            </div>
          </div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.7 }}
            aria-label="Leistungsbereiche"
            className="mt-16 flex flex-wrap gap-3 md:mt-20"
          >
            {leistungsGruppen.map((gruppe) => (
              <a
                key={gruppe.id}
                href={`#${gruppe.id}`}
                className="rounded-full border hairline bg-paper px-5 py-2 text-sm font-medium text-ink/80 transition-all duration-200 hover:border-leaf/60 hover:text-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf active:scale-95"
              >
                {gruppe.nummer} · {gruppe.titel}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Leistungsgruppen */}
      {leistungsGruppen.map((gruppe, index) => (
        <section
          key={gruppe.id}
          id={gruppe.id}
          className={`scroll-mt-24 px-5 py-20 md:px-8 md:py-28 ${
            index % 2 === 1 ? "bg-paper" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20 ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:[direction:ltr]">
                <div className="lg:sticky lg:top-32">
                  <FadeUp>
                    <p className="font-display text-display-md italic text-sage-deep">
                      {gruppe.nummer}
                    </p>
                  </FadeUp>
                  <SplitWords
                    as="h2"
                    text={gruppe.titel}
                    className="mt-2 font-display text-display-md text-ink"
                  />
                  <FadeUp delay={0.1}>
                    <p className="mt-3 text-lg italic text-pine">{gruppe.claim}</p>
                  </FadeUp>
                  <FadeUp delay={0.2}>
                    <p className="mt-6 max-w-md leading-relaxed text-mist">
                      {gruppe.intro}
                    </p>
                  </FadeUp>
                  <Parallax amount={24} className="mt-10 hidden lg:block">
                    <ImageReveal className="arch relative aspect-[4/3] max-w-md overflow-hidden">
                      <Image
                        src={gruppe.bild}
                        alt={gruppe.bildAlt}
                        fill
                        sizes="(min-width: 1024px) 36vw, 90vw"
                        className="object-cover"
                      />
                    </ImageReveal>
                  </Parallax>
                </div>
              </div>

              <div className="lg:[direction:ltr]">
                <ImageReveal className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl lg:hidden">
                  <Image
                    src={gruppe.bild}
                    alt={gruppe.bildAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </ImageReveal>

                <ul className="divide-y divide-ink/10">
                  {gruppe.leistungen.map((leistung, i) => (
                    <motion.li
                      key={leistung.name}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                      className="group py-8 first:pt-0 lg:py-10"
                    >
                      <div className="flex items-baseline gap-5">
                        <span className="font-display text-sm italic text-leaf">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-pine md:text-3xl">
                            {leistung.name}
                          </h3>
                          <p className="mt-3 max-w-xl leading-relaxed text-mist">
                            {leistung.text}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Für wen */}
      <section className="bg-forest px-5 py-24 text-cream md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <FadeUp>
              <p className="text-kicker mb-6 text-leaf-soft">Für wen</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Spitzensport und Alltag folgen denselben *Gesetzen.*"
              className="font-display text-display-lg"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <FadeUp className="rounded-2xl border hairline-light bg-pine/40 p-8 md:p-10">
              <h3 className="font-display text-2xl">Für Sportlerinnen und Sportler</h3>
              <p className="mt-4 leading-relaxed text-cream/75">
                Wettkampfvorbereitung, Regeneration und der Weg zurück nach
                einer Verletzung verlangen Betreuung auf höchstem Niveau. Ich
                habe Weltmeisterinnen und Olympiasiegerinnen begleitet und
                bringe dieses Wissen an Ihre Seite, vom Nachwuchstalent bis zum
                Profi.
              </p>
            </FadeUp>
            <FadeUp delay={0.12} className="rounded-2xl border hairline-light bg-pine/40 p-8 md:p-10">
              <h3 className="font-display text-2xl">Für Privatpersonen</h3>
              <p className="mt-4 leading-relaxed text-cream/75">
                Rückenschmerzen am Schreibtisch, ein steifer Nacken oder die
                Folgen einer Operation verdienen dieselbe Sorgfalt wie ein
                Olympiakader. Sie erhalten eine Behandlung, die Ursachen sucht
                und Sie aktiv in Ihre Genesung einbezieht.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="mt-12">
            <a href="/kontakt" className="btn btn-light btn-lg">
              Kontakt aufnehmen
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function ArrowDown({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0 6-6m-6 6-6-6" />
    </svg>
  );
}

function PersonIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M5 20c.9-3.4 3.6-5.4 7-5.4s6.1 2 7 5.4" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path
        strokeLinejoin="round"
        d="M12 19.8c-4.4-2.7-7.2-5.5-7.2-8.7 0-2.1 1.6-3.9 3.7-3.9 1.4 0 2.7.8 3.5 2 .8-1.2 2.1-2 3.5-2 2.1 0 3.7 1.8 3.7 3.9 0 3.2-2.8 6-7.2 8.7Z"
      />
    </svg>
  );
}

function TrendIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 17 5.5-5.5 4 4L21 7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 7H21v5.5" />
    </svg>
  );
}
