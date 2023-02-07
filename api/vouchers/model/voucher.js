const { Model } = require('objection');
const knex = require('../../../config/db');

Model.knex(knex);

class Voucher extends Model {
  static get tableName() {
    return 'vouchers';
  }
}

module.exports = Voucher;
