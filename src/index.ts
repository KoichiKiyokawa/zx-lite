import path from "path";
import { fileURLToPath } from "url";
import { execa, execaCommandSync } from "execa";

import glob from "fast-glob";
export { glob };

import fs from "fs-extra";
export { fs };

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export function $(args: TemplateStringsArray): string {
  return execaCommandSync(args.raw.join(""), { shell: true }).stdout;
}

export function parallel(commands: string[]): Promise<string[]> {
  return Promise.all(
    commands.map((command) => execa(command, { shell: true }).then((r) => r.stdout)),
  );
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
