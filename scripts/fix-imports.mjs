import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';

// Fix the import assertion syntax for Node.js compatibility
const filePath = './.contentlayer/generated/index.mjs';

try {
  const content = readFileSync(filePath, 'utf8');

  // Replace the problematic import with a require-based approach
  let updatedContent = content.replace(
    /import allBlogs from '\.\/Blog\/_index\.json' (?:assert|with) \{ type: 'json' \}/g,
    `import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const allBlogs = require('./Blog/_index.json');`
  );

  // Also fix if createRequire is already there but missing import
  if (updatedContent.includes('createRequire') && !updatedContent.includes("import { createRequire } from 'module'")) {
    updatedContent = updatedContent.replace(
      /export \{ isType \} from 'contentlayer\/client'/,
      `import { createRequire } from 'module';

export { isType } from 'contentlayer/client'`
    );
  }

  if (content !== updatedContent) {
    writeFileSync(filePath, updatedContent);
    console.log('Fixed import assertions for Node.js compatibility');
  }
} catch (error) {
  console.log('No contentlayer generated file to fix');
}