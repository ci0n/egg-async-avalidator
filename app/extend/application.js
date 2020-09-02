'use strict';

const { default: Schema } = require('async-validator');


module.exports = {

  /**
   * async-validator factory
   * @param {Rules} rule validate rule
   * @return {AsyncValidator} async-validator schema instance
   */
  avalidator(rule) {
    const validator = new Schema(rule);
    return validator;
  },
};
