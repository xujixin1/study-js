'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return 'user';
    }
  }
  return Home;
};
