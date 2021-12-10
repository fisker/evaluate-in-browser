# evaluate-in-browser

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/workflow/status/fisker/evaluate-in-browser/CI/main?style=flat-square
[github_actions_link]: https://github.com/fisker/evaluate-in-browser/actions?query=branch%3Amain
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/evaluate-in-browser/main?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/evaluate-in-browser?branch=main
[license_badge]: https://img.shields.io/npm/l/prettier-format.svg?style=flat-square
[license_link]: https://github.com/fisker/evaluate-in-browser/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/evaluate-in-browser.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/evaluate-in-browser

> Evaluate function in browser

## Installation

```bash
yarn add evaluate-in-browser
```

## Usage

```js
import {evaluate} from 'evaluate-in-browser'

const result = await evaluate(() => 1 + 2)

console.log(result)
//=> 3
```
