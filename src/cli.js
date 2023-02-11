#!/usr/bin/env node

// Copyright (c) Adrien Cransac
// License: MIT

import { readFile } from 'fs/promises';
import licenses from './licenses.js';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

yargs(hideBin(process.argv))
  .usage("Usage: $0\n")
  .usage("List the copyright holders and licenses of a module and its dependencies.\n")
  .usage("Run the command in the module's directory where package.json is.")
  .parse();

try {
  const {name, version} = JSON.parse(await readFile("package.json", {encoding: "utf8"}));

  console.log(await licenses(name, version, "."));
}
catch (error) {
  if (error.code === "ENOENT") {
    console.error(
      "Error: no package.json found.\n\n"
        + "Run the command in a module directory where package.json is.");
  }
  else {
    console.error(`Error: ${error.message}`);
  }
}
