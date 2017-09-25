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
  app.post('/create', 'test.create');
  app.post('/delete', 'test.delete');
  app.post('/get', 'test.get');
  app.post('/update', 'test.update');
  app.post('/create1', 'student.create');
  app.post('/delete1', 'student.delete');
  app.post('/get1', 'student.get');
  app.post('/update1', 'student.update');
};
