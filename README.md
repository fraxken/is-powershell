# is-powershell
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/fraxken/is-powershell/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![V1.0](https://img.shields.io/badge/version-1.0.0-blue.svg)

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

isPowershell
    .then((ret) => console.log(ret))
    .catch(console.error);
```

## Licence
MIT
