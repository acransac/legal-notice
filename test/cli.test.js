// Copyright (c) Adrien Cransac
// License: MIT

import childProcess from 'child_process';
import { promisify } from 'util';

const exec = promisify(childProcess.exec);

test("List Copyright Holders And Licenses", async () => {
  const {stdout, stderr} = await exec("cd test/test_module; ../../src/cli.js");

  const control = [
    "test_module version 1.0.0 and its dependencies have the following copyright holders "
      + "and licenses:\n",
    "# test_dependency_1 version 1.0.0",
    "Copyright 2023 Adrien Cransac\n",
    "Dummy license text 1\n",
    "# test_dependency_2 version 1.0.0",
    "Copyright 2023 Adrien Cransac\n",
    "Dummy license text 2\n",
    "# test_module version 1.0.0",
    "Copyright 2023 Adrien Cransac\n",
    "Dummy license text\n\n"
  ].join("\n");

  expect(stdout).toBe(control);

  expect(stderr).toBe("");
});

test("Fail To List Out Of A Module Directory", async () => {
  const {stdout, stderr} = await exec("cd test; ../src/cli.js");

  expect(stdout).toBe("");

  expect(stderr).toBe(
    "Error: no package.json found.\n\n"
      + "Run the command in a module directory where package.json is.\n");
});
