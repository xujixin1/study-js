/**
 * 
 */
'use strict';

module.exports = app => {
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/baidu', 'home.baidu');
  app.get('/test', 'home.test');
  app.get('/ppap', 'home.ppap');
  app.get('/car', 'home.car');
  app.get('/bike', 'home.bike');
  app.get('/age', 'home.age');
  app.post('/age', 'home.age');
  app.post('/look', 'home.look');
  app.post('/date', 'home.date');
  app.post('/lodash', 'home.find');
};
