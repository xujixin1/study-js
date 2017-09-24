/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'user';
    }
    * sina() {
      return yield app.curl('http://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('http://www.sohu.com.cn');
    }
    * baidu() {
      return yield app.curl('http://www.baidu.com.cn');
    }
    * test() {
      return 'abc';
    }
    * ppap() {
      return '123';
    }
  }
  return Home;
};
