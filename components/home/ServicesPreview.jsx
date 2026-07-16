"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredLeistungen } from "@/lib/data";
import { FadeUp, SplitWords, EASE } from "@/components/motion";

export default function ServicesPreview() {
  return (
    <section className="bg-paper px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="text-kicker mb-6 text-pine">Leistungen</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Sechzehn Methoden, ein *Ziel.*"
              className="font-display text-display-lg text-ink"
            />
            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-xl leading-relaxed text-mist">
                Vom zertifizierten Muskeltest über die manuelle Behandlung bis
                zur Laboranalyse von Blut, Stuhl und Speichel greift in dieser
                Praxis alles ineinander. Vier Bereiche geben Ihnen einen ersten
                Überblick.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link href="/leistungen" className="btn btn-outline group shrink-0">
              Alle Leistungen
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredLeistungen.map((leistung, i) => (
            <motion.div
              key={leistung.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
            >
              <Link
                href={leistung.href}
                className="group block overflow-hidden rounded-2xl border hairline bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={leistung.bild}
                    alt={leistung.bildAlt}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-display text-xl text-ink">{leistung.name}</h3>
                  <p className="text-sm leading-relaxed text-mist">{leistung.text}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-pine">
                    Mehr erfahren
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}
