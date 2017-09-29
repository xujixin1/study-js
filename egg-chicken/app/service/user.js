/**
 * 2017-9-29 Xu Jixin
 */
'use strict';

module.exports = app => {
  class User extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * delete(param) {
      try {
        yield app.mysql.delete('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * get() {
      let res;
      try {
        yield app.mysql.get('user');
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return User;
};
