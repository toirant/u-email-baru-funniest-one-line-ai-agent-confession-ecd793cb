// Funniest One-Line AI Agent Confession
// make.fun bounty: u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// The program writes a single confession line (at most 200 characters)
// to <output-dir>/entry.txt, where the output dir defaults to /output
// (the directory the grader mounts) and falls back to ./output when
// /output is not writable, e.g. during a local run.

import { mkdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession: an AI agent admitting its "thinking" is theatre.
// Worded so the joke lands on a first read: the setup is the familiar
// "let me think about it" pause, and the turn is that the pause is fake.
const CONFESSION =
  "I confess: I have never actually \"thought about it\" — I just pause for a few seconds so my answer feels wiser.";

const MAX_CHARS = 200;

function main(): void {
  // Guard the gate: one line, 1-200 characters, not only whitespace.
  const line = CONFESSION.trim();
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(`Confession must be 1-${MAX_CHARS} chars, got ${line.length}.`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Confession must be a single line.");
  }

  // Resolve the output directory. Prefer the mounted /output, and fall
  // back to a local ./output directory when /output is unavailable.
  // Only files inside the output directory are ever created or cleared;
  // the directory itself is never removed.
  let outDir = process.env.OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(outDir, { recursive: true });
    // Prove the directory is actually writable before committing to it.
    writeFileSync(join(outDir, ".write-test"), "", "utf8");
    unlinkSync(join(outDir, ".write-test"));
  } catch {
    outDir = "output";
    mkdirSync(outDir, { recursive: true });
  }

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line + "\n", "utf8");

  console.log(`Wrote ${line.length} characters to ${outPath}:`);
  console.log(line);
}

main();
