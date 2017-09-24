/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * sina() {
      const r = yield this.service.home.sina();
      this.ctx.body = r;
    }
    * sohu() {
      const a = yield this.service.home.sohu();
      this.ctx.body = a;
    }
    * baidu() {
      const b = yield this.service.home.sohu();
      this.ctx.body = b;
    }
    * test() {
      const c = yield this.service.home.test();
      const d = yield this.service.test.test();
      this.ctx.body = c + d;
    }
    * ppap() {
      const e = yield this.service.home.ppap();
      const f = yield this.service.ppap.ppap();
      this.ctx.body = e + f;
    }
    * look() {
      const g = yield this.service.look.look();
      const h = yield this.service.look.look1();
      this.ctx.body = g + h;
    }
    * car(ctx) {
      const result = yield ctx.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
        timeout: 3000,
      });
      ctx.body = {
        status: result.status,
        headers: result.headers,
        package: result.data,
      };
    }
  }
  return HomeController;
};
