"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroLeistungen } from "@/lib/data";
import { EASE, SplitWords } from "@/components/motion";
import Grasses from "@/components/Grasses";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
      {/* Vollflächiges Hintergrundbild */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: EASE }}
          className="h-full w-full"
        >
          <Image
            src="/images/hero-szene.png"
            alt="Behandlung in der hellen, ruhigen Praxis INNNatur"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </motion.div>
        {/* Gradient: links undurchsichtig → rechts transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/75 to-cream/50 lg:bg-gradient-to-r lg:from-cream lg:via-cream/90 lg:to-transparent" />
      </div>

      <Grasses className="pointer-events-none absolute -left-10 top-24 hidden h-72 w-auto -scale-x-100 text-sage-deep lg:block" />

      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="text-kicker mb-6 text-pine"
          >
            Sportphysiotherapie · Heilpraktik · Mühldorf am Inn
          </motion.p>

          <SplitWords
            as="h1"
            text="Gesunde *Bewegung* ist mein Ziel und Ihr Weg."
            className="font-display text-display-xl text-ink"
            delay={0.5}
          />

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="mt-8 max-w-lg space-y-3.5"
          >
            {heroLeistungen.map((item) => (
              <li key={item.titel} className="flex items-start gap-3">
                <CheckIcon className="mt-1 size-5 shrink-0 text-leaf" />
                <span className="text-lg leading-snug text-ink">
                  <span className="font-medium">{item.titel}</span>
                  <span className="text-mist"> — {item.claim}</span>
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/leistungen" className="btn btn-primary group">
              Leistungen entdecken
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link href="/kontakt" className="btn btn-outline">
              Kontakt aufnehmen
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-10 flex gap-10 border-t hairline pt-6"
          >
            <div>
              <dt className="text-kicker text-mist">Erfahrung</dt>
              <dd className="mt-1 font-display text-2xl text-ink">30+ Jahre</dd>
            </div>
            <div>
              <dt className="text-kicker text-mist">Methoden</dt>
              <dd className="mt-1 font-display text-2xl text-ink">16 Verfahren</dd>
            </div>
            <div className="hidden sm:block">
              <dt className="text-kicker text-mist">Betreuung</dt>
              <dd className="mt-1 font-display text-2xl text-ink">Olympia & WM</dd>
            </div>
          </motion.dl>
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

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}
