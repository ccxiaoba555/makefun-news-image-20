// main.ts — make.fun news-image entry (Node 22, standard library only).
// The entry image is the entry.png shipped beside this file. This program
// copies it, byte for byte, to the grader's output directory. It uses no
// network and no randomness, so repeated runs produce identical bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outputDir, "entry.png"));
console.log(`wrote ${join(outputDir, "entry.png")}`);
