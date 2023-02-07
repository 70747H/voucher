const short = require('short-uuid');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('vouchers').truncate();
  await knex('vouchers').insert([
    { code: short.generate(), user_id: 1 },
    { code: short.generate(), user_id: 1 },
    { code: short.generate(), user_id: 1 },
  ]);
};
