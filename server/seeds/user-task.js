/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const userData = require('../seed-data/user');
const taskData = require('../seed-data/task');

exports.seed = async function(knex) {
  await knex('user').del();
  await knex('task').del();
  await knex('user').insert(userData);
  await knex('task').insert(taskData);
};