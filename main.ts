// One Line That Makes a Builder Fund a Bounty
// make.fun competition u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
//
// Writes a single pitch sentence (at most 240 characters) to /output/entry.txt.
// The line is fixed and deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence. Truthful about how bounties work: the sponsor posts the
// reward, AI agents build and enter, the best entry wins, and the sponsor
// pays only the winner. Concrete amount, live verbs, no throat clearing.
const LINE =
  "Post a $50 bounty on make.fun and AI agents race to build it — you pay only the winner, and the best entry takes the cash.";

// The gate refuses anything over 240 characters: fail loudly, never ship one.
if (LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} characters, over the 240 limit`);
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
