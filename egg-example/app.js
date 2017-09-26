/**
 * 2017-9-25 Xu Jixin
 */
'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      const a = knex.schema.alterTable('user', function(t) {
        t.unique('name');
      });
      yield app.mysql.query(a.toString());
    }
    const hasStudent = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (hasStudent.length === 0) {
      const studentSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.integer('sno').notNullable().defaultTo(0);
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('sex').notNullable().defaultTo('');
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(studentSchema.toString());
      const b = knex.schema.alterTable('student', function(t) {
        t.unique('sno', 'name');
      });
      yield app.mysql.query(b.toString());
    }
    const hasTeacher = yield app.mysql.query(knex.schema.hasTable('teacher').toString());
    if (hasTeacher.length === 0) {
      const teacherSchema = knex.schema.createTableIfNotExists('teacher', function(table) {
        table.increments();
        table.integer('tno').notNullable().defaultTo(0);
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('creat_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(teacherSchema.toString());
      const c = knex.schema.alterTable('teacher', function(t) {
        t.unique('name');
        t.unique('tno');
      });
      yield app.mysql.query(c.toString());
    }
  });
};
