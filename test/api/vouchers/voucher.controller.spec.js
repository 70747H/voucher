const rewire = require('rewire');
const { expect } = require('chai');
const request = require('supertest');
const short = require('short-uuid');
const knex = require('../../../config/db');

describe('Voucher Controller', () => {
  let app = rewire('../../../app');
  beforeEach(async () => {
    await knex.raw(`create table if not exists vouchers(
      id serial not null constraint vouchers_pkey primary key,
      code varchar(255),
      is_used boolean default false,
      user_id integer,
      used_at timestamp with time zone
    );`);
    await knex('vouchers').truncate();
    await knex('vouchers').insert([
      { code: '1CC6LcNmdCanYutjhVZ758', user_id: 1 },
      { code: 'toEMWa2Fe9feM7gjz8oLK4', user_id: 1 },
      { code: 'dbzELVwKNh65g5QXt9dMTX', user_id: 1 },
    ]);
  });
  describe('controller.list', () => {
    it('GET / should successfully return an array of vouchers', async () => {
      const result = await request(app).get('/vouchers');
      expect(result.status).to.equal(200);
      expect(result.body).to.be.an('array');
    });
  });

  describe('controller.create', () => {
    it('POST / should successfully create a voucher', async () => {
      const result = await request(app).post('/vouchers').send({ user_id: 3 });
      expect(result.status).to.equal(201);
    });
  });

  describe('controller.update', () => {
    it('PATCH / should respond with an error: Voucher not found', async () => {
      const result = await request(app).patch('/vouchers/15');
      expect(result.status).to.equal(404);
      expect(result.text).to.equal('Voucher not found');
    });

    it('PATCH / should successfully update voucher', async () => {
      const result = await request(app).patch('/vouchers/1');
      expect(result.status).to.equal(200);
    });

    it('PATCH / should respond with an error: Voucher is used before', async () => {
      await request(app).patch('/vouchers/1');
      const result = await request(app).patch('/vouchers/1');
      expect(result.status).to.equal(400);
      expect(result.text).to.equal('Voucher is used before');
    });
  });
});
