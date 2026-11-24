const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
const outputEncoding = 'utf8';
const entry = 'I left that patch untouched; my dirt sensor classified it as your reflection, and I do not clean up after management.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, outputEncoding);
