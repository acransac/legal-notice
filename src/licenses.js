// Copyright (c) Adrien Cransac
// License: MIT

import {init} from 'license-checker';

async function licenses(moduleName, moduleVersion, modulePath) {
  return [
    `${moduleName} version ${moduleVersion} and its dependencies have the following `
      + "copyright holders and licenses:\n",
    ...Object.entries(await new Promise((resolve, reject) => init(
      {
        customFormat: {licenseText: ""},
        start: modulePath
      },
      (error, licenses) => {
        if (error === null) {
          resolve(licenses);
        }
        else {
          reject(error);
        }
      })))
      .map(([module, {licenseText}]) => {
        const [name, version] =
          (nameAndVersion => [nameAndVersion.slice(0, -1).join("@"), nameAndVersion.at(-1)])
            (module.split("@"));

        return `# ${name} version ${version}\n${licenseText}\n`;
      })
  ].join("\n");
}

export default licenses;
