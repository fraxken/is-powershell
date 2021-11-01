# is-powershell
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/fraxken/is-powershell/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/fraxken/is-powershell/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![size](https://img.shields.io/github/languages/code-size/fraxken/is-powershell)
[![Known Vulnerabilities](https://snyk.io//test/github/fraxken/is-powershell/badge.svg?targetFile=package.json)](https://snyk.io//test/github/fraxken/is-powershell?targetFile=package.json)

Node.js - Detect if the terminal is powershell

## Getting started
This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i is-powershell
# or
$ yarn add is-powershell
```

## Usage example
```js
const isPowershell = require("is-powershell");

async function main() {
    const ret = await isPowershell();
    console.log(`is parent pid is powershell ? ${ret}`);
}
main().catch(console.error);
```

## Licence
MIT
