// Trimmt den Weißraum aus dem Logo-PNG und speichert eine optimierte Version
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dir, "../public/images/logo.png");
const DST = path.join(__dir, "../public/images/logo.png");

// Puppeteer-unabhängige Lösung: Canvas über native Node-Bindings nicht verfügbar.
// Stattdessen: Sharp verwenden falls installiert, sonst Jimp.
let trimmed = false;

try {
  const { default: sharp } = await import("sharp");
  const img = sharp(SRC);
  const trimmed_buf = await img.trim({ threshold: 20 }).toBuffer({ resolveWithObject: true });
  writeFileSync(DST, trimmed_buf.data);
  console.log(`Trimmed: ${trimmed_buf.info.width}×${trimmed_buf.info.height}`);
  trimmed = true;
} catch {}

if (!trimmed) {
  console.log("sharp nicht installiert – installiere es kurz...");
}
