#!/usr/bin/env node
'use strict';
// Forces Next.js to use webpack instead of Turbopack (avoids Turbopack runtime errors)
const { spawn } = require('child_process');
const path = require('path');

const cwd = path.join(__dirname, '..');
const child = spawn('npx', ['next', 'dev', '--webpack'], {
  stdio: 'inherit',
  shell: true,
  cwd,
});
child.on('exit', (code) => process.exit(code ?? 0));
