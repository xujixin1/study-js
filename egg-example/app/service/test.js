/**
 * 2017-9-24 Xu Jixin
 */
'use strict';

module.exports = app => {
  class Test extends app.Service {
    * test() {
      return '123';
    }
  }
  return Test;
};
