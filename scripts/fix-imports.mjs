import { readFileSync, writeFileSync } from 'fs';

// Fix the import assertion syntax for Node.js 22 compatibility
const filePath = './.contentlayer/generated/index.mjs';

try {
  const content = readFileSync(filePath, 'utf8');
  const updatedContent = content.replace(
    /assert \{ type: 'json' \}/g,
    "with { type: 'json' }"
  );

  if (content !== updatedContent) {
    writeFileSync(filePath, updatedContent);
    console.log('Fixed import assertions for Node.js 22 compatibility');
  }
} catch (error) {
  console.log('No contentlayer generated file to fix');
}