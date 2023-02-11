// Copyright (c) Adrien Cransac
// License: MIT

import licenses from '../src/licenses.js';

test("List Copyright Holders And Licenses", async () => {
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
    "Dummy license text\n"
  ].join("\n");

  expect(await licenses("test_module", "1.0.0", "test/test_module")).toBe(control);
});

test("Fail To List Out Of A Module Directory", async () => {
  await expect(licenses("dummy", "1.0.0", "test")).rejects
    .toStrictEqual(new Error("No packages found in this path.."));
});
