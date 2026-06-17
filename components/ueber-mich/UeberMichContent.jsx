"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { steckbrief, werdegang, skeletonErfolge, contact } from "@/lib/data";
import { FadeUp, SplitWords, EASE } from "@/components/motion";
import Grasses from "@/components/Grasses";

export default function UeberMichContent() {
  return (
    <>
      {/* Kopfbereich mit Porträt */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
        <Grasses className="pointer-events-none absolute -left-10 top-32 hidden h-64 w-auto -scale-x-100 text-sage-deep lg:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="text-kicker mb-8 text-pine"
            >
              Über mich
            </motion.p>
            <SplitWords
              as="h1"
              text="Ich kenne beide Seiten der *Behandlungsbank.*"
              className="font-display text-display-xl text-ink"
              delay={0.4}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: EASE }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-mist"
            >
              Erst Weltmeister im Skeleton, dann Physiotherapeut der deutschen
              Biathletinnen bei zwei Olympischen Spielen und heute
              Heilpraktiker mit eigener Praxis in Mühldorf am Inn. Was mich
              täglich antreibt, ist die Erfahrung aus beiden Welten.
            </motion.p>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-12 space-y-4 border-t hairline pt-8"
            >
              {steckbrief.map((eintrag, i) => (
                <motion.div
                  key={eintrag.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.4 + i * 0.08, ease: EASE }}
                  className="grid grid-cols-[120px_1fr] gap-4 text-sm sm:grid-cols-[160px_1fr]"
                >
                  <dt className="text-kicker pt-0.5 text-mist">{eintrag.label}</dt>
                  <dd className="leading-relaxed text-ink">{eintrag.wert}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
              className="arch relative aspect-[3/4] overflow-hidden bg-paper"
            >
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
                className="h-full w-full"
              >
                <Image
                  src="/images/andy-boehme.png"
                  alt="Porträt von Andy Böhme"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
              className="absolute -bottom-6 -right-2 rounded-2xl border hairline bg-paper px-6 py-4 shadow-xl shadow-forest/10 md:-right-6"
            >
              <p className="font-display text-lg text-ink">{contact.name}</p>
              <p className="text-sm text-mist">{contact.rollen}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Die Geschichte */}
      <section className="bg-paper px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <p className="text-kicker mb-6 text-pine">Der Antrieb</p>
          </FadeUp>
          <SplitWords
            as="h2"
            text="Leistung zu bringen, für mich und für andere, gehört zu meinen stärksten *Antrieben.*"
            className="font-display text-display-md text-ink"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FadeUp delay={0.15}>
              <p className="leading-relaxed text-mist">
                Schon als Sportler interessierten mich vor allem die vordersten
                Plätze. Aufgewachsen im Trainingszentrum Oberhof, geformt vom
                Skilanglauf und später vom Skeleton, gehörte das Streben nach
                dem Maximum früh zu meinem Alltag. Mit dem verletzungsbedingten
                Abschied vom Spitzensport um die Jahrtausendwende erlebte ich
                allerdings auch, was eine Leistungseinschränkung im Leben eines
                Menschen verändern kann.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="leading-relaxed text-mist">
                Den richtigen Weg aus dieser Situation zu finden war schwer und
                genau deshalb so wertvoll. Heute suche ich diesen Weg gemeinsam
                mit Menschen, die vor ähnlichen Fragen stehen. Die Ausbildung
                zum Physiotherapeuten, jahrelange Arbeit mit Nationalmannschaften
                und der Abschluss als Heilpraktiker bilden dafür das Fundament.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Werdegang Timeline */}
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <FadeUp>
              <p className="text-kicker mb-6 text-pine">Werdegang</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Stationen eines Lebens in *Bewegung.*"
              className="font-display text-display-lg text-ink"
            />
          </div>

          <ol className="relative border-l hairline pl-8 md:pl-12">
            {werdegang.map((station, i) => (
              <motion.li
                key={station.zeit}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-leaf bg-cream md:-left-[55px]" />
                <p className="text-kicker text-leaf">{station.zeit}</p>
                <h3 className="mt-2 font-display text-2xl text-ink">{station.titel}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-mist">{station.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skeleton-Karriere */}
      <section className="relative overflow-hidden bg-forest px-5 py-24 text-cream md:px-8 md:py-36">
        <Grasses className="pointer-events-none absolute -right-6 bottom-0 h-72 w-auto text-leaf-soft/15" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="text-kicker mb-6 text-leaf-soft">Die Skeleton-Jahre</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Kopfüber mit 130 km/h durch den *Eiskanal.*"
              className="font-display text-display-lg"
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 leading-relaxed text-cream/75">
                Von 1992 bis 2002 gehörte ich zur Weltspitze des Skeletonsports,
                ab 1994 als Mitglied der deutschen Nationalmannschaft. Wer
                einmal erlebt hat, wie sich der Körper bei diesen Kräften
                anfühlt, behandelt Athleten mit einem anderen Verständnis.
              </p>
            </FadeUp>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skeletonErfolge.map((erfolg, i) => (
              <motion.div
                key={erfolg.wert + erfolg.detail}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                className="rounded-2xl border hairline-light bg-pine/40 p-8"
              >
                <LaurelIcon className="size-7 text-leaf-soft" />
                <p className="mt-5 font-display text-2xl">{erfolg.wert}</p>
                <p className="mt-1 text-sm text-cream/65">{erfolg.detail}</p>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-16 max-w-3xl border-l-2 border-leaf-soft pl-6 md:pl-8">
            <p className="font-display text-2xl italic leading-snug text-cream/90 md:text-3xl">
              „Fast immer eröffnen Rückschläge Wege zu Neuem. Diese Erfahrung
              gebe ich heute an meine Patienten weiter."
            </p>
            <p className="mt-4 text-sm text-cream/60">{contact.name}</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function LaurelIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
      />
    </svg>
  );
}
