import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "petrichor";

// Guard the gate before writing: exactly one plain-ASCII word, well inside 24 chars.
if (!/^[A-Za-z]{1,22}$/.test(word)) {
  throw new Error("entry word failed validation");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
