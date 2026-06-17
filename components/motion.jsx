"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

export const EASE = [0.22, 1, 0.36, 1];

/* Sanftes Aufblenden von unten, der Grundbaustein aller Sektionen */
export function FadeUp({ children, delay = 0, y = 32, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* Überschriften erscheinen Wort für Wort. Wörter in *Sternchen* werden
   zur kursiven Serifen-Auszeichnung. */
export function SplitWords({ text, as: Tag = "h2", className, delay = 0 }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <span className="sr-only">{text.replaceAll("*", "")}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.055, delayChildren: delay }}
        className="inline"
      >
        {words.map((word, i) => {
          const accent = word.startsWith("*") && word.endsWith("*");
          const clean = word.replaceAll("*", "");
          return (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block ${accent ? "italic text-leaf" : ""}`}
                variants={{
                  hidden: { y: "110%", rotate: 2.5 },
                  visible: {
                    y: "0%",
                    rotate: 0,
                    transition: { duration: 0.85, ease: EASE },
                  },
                }}
              >
                {clean}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}

/* Bilder gleiten beim Scrollen leicht gegen die Richtung, ruhige Parallaxe */
export function Parallax({ children, amount = 50, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* Zahlen zählen hoch, sobald sie ins Bild kommen */
export function Counter({ to, suffix = "", className, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, motionValue, to]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* Bild wird beim Hereinscrollen aus einer Maske freigegeben */
export function ImageReveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(8% 8% 8% 8% round 24px)", opacity: 0, scale: 1.06 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 0px)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
