'use strict';

module.exports = {

  /**
   * Validate source
   * @param {Rules} rule validate rule
   * @param {any} source The object to validate (default request.body)
   * @param {ValidateSource} options An object describing processing options for the validation
   * @param {Function} callback A callback function to invoke when validation completes
   * @return {Promise} promise
   */
  avalidate(rule, source, options, callback) {

    if (source instanceof Function) {
      callback = source;
      source = undefined;
    }

    if (options instanceof Function) {
      callback = options;
      options = undefined;
    }

    source = source || this.request.body;
    return this.app.avalidator(rule).validate(source, options, callback);
  },
};
