"use client";

import Image from "next/image";
import Link from "next/link";
import { stats } from "@/lib/data";
import { FadeUp, SplitWords, Counter } from "@/components/motion";
import Grasses from "@/components/Grasses";

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-forest px-5 py-24 text-cream md:px-8 md:py-36">
      <Grasses className="pointer-events-none absolute -right-6 top-12 h-72 w-auto text-leaf-soft/15" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <FadeUp className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="arch relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/cu-ruecken-upper.png"
                alt="Behandlung in heller, ruhiger Atmosphäre der Praxis INNNatur"
                fill
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="text-kicker mb-6 text-leaf-soft">Über mich</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Vom Eis auf die andere Seite der *Behandlungsbank.*"
              className="font-display text-display-lg"
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 max-w-xl leading-relaxed text-cream/75">
                Ein Weltmeistertitel, zwei Weltcup-Gesamtsiege und ein
                verletzungsbedingtes Karriereende haben mich gelehrt, was
                Leistung bedeutet und was ihr Verlust auslöst. Diese Erfahrung
                prägt heute jede Behandlung. Später betreute ich die deutschen
                Biathletinnen bei zwei Olympischen Spielen, bevor ich meine
                Praxis in Mühldorf eröffnete.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t hairline-light pt-8 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-display text-4xl text-leaf-soft">
                      <Counter to={stat.zahl} suffix={stat.suffix} />
                    </dd>
                    <dt className="mt-2 text-xs leading-relaxed text-cream/60">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </FadeUp>

            <FadeUp delay={0.35} className="mt-10">
              <Link href="/ueber-mich" className="btn btn-light">
                Die ganze Geschichte
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
