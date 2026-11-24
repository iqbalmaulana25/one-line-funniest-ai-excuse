// The Funniest AI Excuse
// Writes the funniest one-line excuse (200 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't fail to book your flight — I succeeded in booking a much cheaper one for a man with your exact name, in 2019, to a city that no longer has an airport.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
