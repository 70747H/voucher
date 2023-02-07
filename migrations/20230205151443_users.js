/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('vouchers', (table) => {
    table.increments('id');
    table.string('code');
    table.boolean('is_used').defaultTo(false);
    table.integer('user_id');
    table.timestamp('used_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('vouchers');
};
