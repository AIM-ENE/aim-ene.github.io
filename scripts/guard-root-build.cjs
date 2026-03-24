#!/usr/bin/env node

const path = require('path');
const {spawnSync} = require('child_process');

const repoRoot = process.cwd();
const initCwd = process.env.INIT_CWD ? path.resolve(process.env.INIT_CWD) : repoRoot;

if (initCwd !== repoRoot) {
  const relativeFromRoot = path.relative(repoRoot, initCwd) || '.';
  console.error(
    [
      "Refusing root build from a subdirectory.",
      `Detected run location: ${relativeFromRoot}`,
      "Run root build only from repository root:",
      "  cd /Users/bartvanderwal/Code/ENE/aim-ene.github.io && yarn build",
      "For course-only builds, use e.g.:",
      "  cd courses/soex/studenten && yarn build",
    ].join('\n'),
  );
  process.exit(0);
}

const result = spawnSync('docusaurus', ['build'], {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status ?? 1);
