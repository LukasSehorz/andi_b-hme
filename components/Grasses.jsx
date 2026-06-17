/* Gräser-Motiv von der Visitenkarte, als feine Linienzeichnung */
export default function Grasses({ className, stroke = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 220 260"
      fill="none"
      aria-hidden
      className={className}
    >
      <g stroke={stroke} strokeWidth="2" strokeLinecap="round">
        <path d="M30 260C28 200 24 150 38 96" />
        <path d="M38 96c2-18 8-34 20-44" opacity="0.7" />
        <path d="M62 260c4-70 2-130-14-188" />
        <path d="M48 72c-4-16-2-34 8-48" opacity="0.7" />
        <path d="M96 260c-2-80 6-148 30-208" />
        <path d="M126 52c4-14 14-28 28-34" opacity="0.7" />
        <path d="M132 260c8-62 24-118 56-164" />
        <path d="M188 96c8-12 20-22 32-26" opacity="0.6" />
        <path d="M168 260c10-44 28-86 52-118" opacity="0.85" />
      </g>
      <g fill={stroke}>
        <ellipse cx="58" cy="46" rx="5" ry="16" transform="rotate(14 58 46)" opacity="0.85" />
        <ellipse cx="36" cy="92" rx="4.5" ry="14" transform="rotate(-8 36 92)" opacity="0.65" />
        <ellipse cx="128" cy="48" rx="5" ry="15" transform="rotate(20 128 48)" opacity="0.8" />
        <ellipse cx="190" cy="92" rx="4.5" ry="13" transform="rotate(34 190 92)" opacity="0.7" />
      </g>
    </svg>
  );
}
