#!/usr/bin/env node
import fs from 'fs';
import commander from 'commander';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const program = new commander.Command();

program
  .version(version)
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')

program.option('-f, --format [type]', 'output format')

program.parse(process.argv);

if (program.format) console.log(`- ${program.format}`);
