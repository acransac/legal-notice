# Introduction
**legal-notice** is a command-line tool that lists the copyright holders and licenses of a npm
module and its dependencies.

Most open-source licenses allow to use one's work as long as the attribution to the copyright
holders and the license they give to their users are included in the derivative work. One way to
include this information, proposed for example in the Apache License 2.0, is to write the
human-readable copyright attribution and license in a NOTICE file shipped with the distribution.
 **legal-notice** generates the content of such a proposed file so you can deliver it with your
piece of software.

Alternative approaches, typically implemented in module bundlers, gather this licensing information
in source-code comments or humand-and-machine-readable formats like json or csv. **legal-notice**
aims for better visibility and easier access to this information. It is independent from your choice
 of bundler, if any.

This tool formats to a human-readable text document the output of
 [license-checker](https://github.com/davglass/license-checker). This latter piece of software can
be used to generate a short summary of the types of licenses used by your module's dependencies. You
can then check whether your license complies with your dependencies' with
 [this compatibility checker](https://joinup.ec.europa.eu/collection/eupl/solution/joinup-licensing-assistant/jla-compatibility-checker).

# Installation
To install **legal-notice** globally, run:

```bash
    $ npm install --global @acransac/legal-notice
```

Within your module, you can install it with:

```bash
    $ npm install --save-dev @acransac/legal-notice
```

Or you can try it directly with:

```bash
    $ npx @acransac/legal-notice
```

# Usage
**legal-notice** does not take any argument but looks for `package.json` where it is executed from.
 It writes to the standard output the list of copyright holders and licenses of the module in the
current directory and its dependencies.

For example, to write a NOTICE file with the attribution and licensing information, after installing
the tool in your module you can run from the directory where your `package.json` is:

```bash
    $ npx legal-notice > NOTICE
```

Or add a script in `package.json`:

```json
  ...
  "scripts": {
    "legal": "legal-notice > NOTICE",
    ...
  },
```

And run it with:

```bash
    $ npm run legal
```

Update the NOTICE after installing, updating or uninstalling any dependency in your module.

Note that you can get help about the tool with:

```bash
    $ npx legal-notice --help
```
