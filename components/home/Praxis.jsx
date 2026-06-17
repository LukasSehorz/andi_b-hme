"use client";

import Image from "next/image";
import { contact } from "@/lib/data";
import { FadeUp, SplitWords, Parallax, ImageReveal } from "@/components/motion";

export default function Praxis() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <p className="text-kicker mb-6 text-pine">Die Praxis</p>
          </FadeUp>
          <SplitWords
            as="h2"
            text="Ein Ort, an dem Ihr Körper zur *Ruhe* kommt."
            className="font-display text-display-lg text-ink"
          />
          <FadeUp delay={0.15}>
            <p className="mt-6 leading-relaxed text-mist">
              Sie finden die Praxis INNNatur im FTZ Mühldorf an der Münchener
              Straße. Helle Räume, viel Tageslicht und eine ruhige Atmosphäre
              schaffen den Rahmen, in dem Behandlung wirken kann.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-8">
          <ImageReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/praxis-1.webp"
              alt="Behandlungsraum der Praxis INNNatur mit Therapieliege"
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <div className="md:mt-16">
            <ImageReveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/praxis-2.webp"
                alt="Heller Praxisraum mit Tageslicht und Trainingsbereich"
                fill
                sizes="(min-width: 768px) 48vw, 100vw"
                className="object-cover"
              />
            </ImageReveal>
            <FadeUp delay={0.2} className="mt-8 flex items-start gap-4">
              <PinIcon className="mt-1 size-5 shrink-0 text-leaf" />
              <p className="leading-relaxed text-mist">
                {contact.praxis} im FTZ Mühldorf
                <br />
                <span className="text-ink">
                  {contact.strasse}, {contact.ort}
                </span>
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon({ className }) {
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
