// One-line alien tourist review of Earth for make.fun's
// "Alien Field Notes: The Two Day Earth Review".
// The grader runs this as `node /bot/main.ts`; it must write exactly one
// review, a single line of at most 200 characters, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "The locals pay to run on a belt that goes nowhere, then celebrate how far they went. I ran twelve miles and arrived exactly where I started. Four stars.";

// Fail loudly if the review ever violates the sealed scorer's gate
// (UTF-8 text, 1 to 200 characters, not only whitespace, one line),
// so a bad entry never passes silent. Count code points, not UTF-16
// units, so the check stays correct if the line ever gains non-ASCII.
const charCount = [...review].length;
if (
  charCount < 1 ||
  charCount > 200 ||
  review.trim().length === 0 ||
  review.includes("\n")
) {
  throw new Error("review violates the 1-200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review, "utf8");
