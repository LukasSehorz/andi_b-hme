"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/data";
import { EASE } from "@/components/motion";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b hairline bg-cream/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/"
            className="link-quiet shrink-0"
            aria-label="INNNatur, zur Startseite"
          >
            <Image
              src="/images/logo.png"
              alt="INNNatur Logo"
              width={959}
              height={267}
              priority
              className="h-12 w-auto md:h-16"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
            {links.map((link) => {
              const active =
                link.href === pathname ||
                (link.href !== "/" && !link.href.includes("#") && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-quiet group relative text-sm font-medium ${
                    active ? "text-pine" : "text-ink/80"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-leaf transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <a href={contact.telefonHref} className="btn btn-primary">
              <PhoneIcon className="size-4" />
              {contact.telefon}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="relative z-[60] flex size-12 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf active:scale-95 md:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 transition-all duration-300 ${
                  open ? "top-1.5 rotate-45 bg-cream" : "bg-ink"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-6 transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45 bg-cream" : "bg-ink"
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-forest px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="link-quiet block py-3 font-display text-4xl text-cream hover:text-leaf-soft"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-4"
            >
              <a href={contact.telefonHref} className="btn btn-light w-full">
                <PhoneIcon className="size-4" />
                {contact.telefon}
              </a>
              <p className="text-center text-sm text-cream/60">
                {contact.strasse} · {contact.ort}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhoneIcon({ className }) {
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
