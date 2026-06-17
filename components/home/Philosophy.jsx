"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, SplitWords, Parallax, ImageReveal } from "@/components/motion";

export default function Philosophy() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div className="order-2 lg:order-1">
            <Parallax amount={36} className="arch relative mx-auto aspect-[3/4] max-w-md overflow-hidden lg:mx-0">
              <ImageReveal className="h-full w-full">
                <Image
                  src="/images/cu-ruecken-lower.png"
                  alt="Manuelle Therapie, präzise Arbeit mit den Händen"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="scale-110 object-cover"
                />
              </ImageReveal>
            </Parallax>
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <FadeUp>
              <p className="text-kicker mb-6 text-pine">Die Philosophie</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Schmerzfreiheit beginnt mit *Verständnis* für den eigenen Körper."
              className="font-display text-display-lg text-ink"
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 max-w-xl leading-relaxed text-mist">
                Die Förderung Ihrer Eigenaktivität gehört zu den zentralen
                Säulen jeder ergebnisorientierten Behandlung in dieser Praxis.
                Wer versteht, wie der eigene Organismus arbeitet, geht
                bewusster mit ihm um. Schmerzreduktion stellt sich dann fast
                wie von selbst ein, als natürliche Folge einer ganzheitlichen
                Betrachtung.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="mt-5 max-w-xl leading-relaxed text-mist">
                Als ehemaliger Spitzensportler kenne ich die
                Leistungsgrenzen des menschlichen Körpers aus eigener
                Erfahrung. Ich weiß zugleich, welche Fähigkeiten in einem
                gesunden Körper stecken. Mit diesem Hintergrund lassen sich
                Behandlungserfolge schneller und wirksamer erzielen.
              </p>
            </FadeUp>
            <FadeUp delay={0.35} className="mt-10">
              <Link href="/ueber-mich" className="btn btn-outline group w-fit">
                Andy Böhme kennenlernen
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
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
