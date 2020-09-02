# egg-async-avalidator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-async-avalidator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-async-avalidator
[travis-image]: https://img.shields.io/travis/eggjs/egg-async-avalidator.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-async-avalidator
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-async-avalidator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-async-avalidator?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-async-avalidator.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-async-avalidator
[snyk-image]: https://snyk.io/test/npm/egg-async-avalidator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-async-avalidator
[download-image]: https://img.shields.io/npm/dm/egg-async-avalidator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-async-avalidator

<!--
Description here.
-->


Async validate plugin for egg

See [async-validator](https://github.com/yiminghe/async-validator) for more information such as custom rule.

The 'message' is not only a 'string', it can be 'any'.

## Install

```bash
$ npm i egg-async-avalidator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.asyncAvalidator = {
  enable: true,
  package: 'egg-async-avalidator',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.asyncAvalidator = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
const rules = {
  name: {required: true, message: 'name Can not be empty'}
}
try {
  await app.asyncValidator(rules).validate({name: ''})
} catch(err) {
  
}
```

## License

[MIT](LICENSE)
