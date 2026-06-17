import { alleLeistungenNamen } from "@/lib/data";

/* Laufband mit allen Behandlungsmethoden, ruhig und endlos */
export default function Marquee() {
  const items = [...alleLeistungenNamen, ...alleLeistungenNamen];
  return (
    <div
      className="overflow-hidden border-y hairline bg-sage py-5"
      aria-label="Behandlungsmethoden im Überblick"
    >
      <div className="flex w-max animate-marquee items-center gap-8 motion-reduce:animate-none">
        {items.map((name, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8">
            <span className="font-display text-lg text-pine md:text-xl">{name}</span>
            <LeafDot />
          </span>
        ))}
      </div>
    </div>
  );
}

function LeafDot() {
  return (
    <svg viewBox="0 0 16 16" className="size-3 shrink-0 text-leaf" aria-hidden>
      <path
        d="M8 1C8 1 13 4 13 9c0 3-2.2 6-5 6S3 12 3 9c0-5 5-8 5-8Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
