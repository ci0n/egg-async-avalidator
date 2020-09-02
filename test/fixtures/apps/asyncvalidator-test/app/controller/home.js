'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    const rules = {
      telephone: [{ required: true, message: '必填' }],
    };

    const errFields = await this.ctx.avalidate(rules, { telephone: '' }).catch(({ fields }) => fields);

    this.ctx.body = JSON.stringify(errFields);
  }
}

module.exports = HomeController;
