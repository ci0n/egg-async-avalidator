'use strict';

const mock = require('egg-mock');

describe('test/asyncvalidator.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/asyncvalidator-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      // .expect('hi, asyncvalidator')
      .expect('{"telephone":[{"message":"必填","field":"telephone"}]}')
      .expect(200);
  });
});
