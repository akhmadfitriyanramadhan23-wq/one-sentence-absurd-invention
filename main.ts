// One-Sentence Absurd Invention Pitch — u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a
// Writes the entry (one sentence, at most 220 characters) to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
// One sentence: the annoyance (waking up), the invention (an alarm clock
// that apologises and snoozes itself), and its silly mechanism (it forges
// the excuse note to your boss in your handwriting).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A self-apologising alarm clock that says sorry, snoozes itself, and lets you sleep in — then writes the excuse note to your boss in your handwriting.";
const MAX = 220;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
if (ENTRY.trim().split(/[.!?]\s+/).length > 1) throw new Error("entry must be one sentence");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
