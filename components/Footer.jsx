import Link from "next/link";
import { contact } from "@/lib/data";
import Grasses from "@/components/Grasses";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <Grasses className="pointer-events-none absolute -right-8 bottom-0 h-64 w-auto text-leaf-soft/25" />

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-tight">
              INN<span className="italic text-leaf-soft">N</span>atur
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Praxis für Sportphysiotherapie und Heilpraktik von Andy Böhme in
              Mühldorf am Inn. Termine nach Vereinbarung.
            </p>
          </div>

          <div>
            <p className="text-kicker mb-5 text-leaf-soft">Praxis</p>
            <address className="space-y-1.5 text-sm not-italic leading-relaxed text-cream/80">
              <p>{contact.praxis} im FTZ Mühldorf</p>
              <p>{contact.strasse}</p>
              <p>{contact.ort}</p>
            </address>
          </div>

          <div>
            <p className="text-kicker mb-5 text-leaf-soft">Kontakt</p>
            <ul className="space-y-1.5 text-sm leading-relaxed">
              <li>
                <a href={contact.telefonHref} className="link-quiet text-cream/80 hover:text-cream">
                  {contact.telefon}
                </a>
              </li>
              <li>
                <a href={contact.mobilHref} className="link-quiet text-cream/80 hover:text-cream">
                  {contact.mobil}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="link-quiet break-all text-cream/80 hover:text-cream">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.webHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet text-cream/80 hover:text-cream"
                >
                  {contact.web}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-kicker mb-5 text-leaf-soft">Seiten</p>
            <ul className="space-y-1.5 text-sm leading-relaxed">
              <li>
                <Link href="/" className="link-quiet text-cream/80 hover:text-cream">
                  Start
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="link-quiet text-cream/80 hover:text-cream">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="link-quiet text-cream/80 hover:text-cream">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="link-quiet text-cream/80 hover:text-cream">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t hairline-light pt-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {contact.praxis} · {contact.name} ·{" "}
            {contact.rollen}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="link-quiet hover:text-cream/80">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link-quiet hover:text-cream/80">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
