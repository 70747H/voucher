const Objection = require('objection');
const Voucher = require('../../../api/vouchers/model/voucher');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();
let voucherService = require('../../../api/vouchers/voucher.service');

describe('Voucher Service', () => {
  describe('service.list', () => {
    let returnVal;

    beforeEach(() => {
      returnVal = [
        {
          id: 1,
          code: 'q636tLTLZuY1syfpV65XW2',
          is_used: true,
          user_id: 1,
          used_at: '2023-02-06T12:14:36.188Z',
        },
      ];

      sandbox.stub(Objection.Model, 'query').resolves(returnVal);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return array of vouchers', async () => {
      const result = await voucherService.list();
      expect(result).to.be.an('array');
      expect(result).to.equal(returnVal);
    });
  });

  describe('service.get', () => {
    let returnVal;

    beforeEach(() => {
      returnVal = {
        id: 1,
        code: 'q636tLTLZuY1syfpV65XW2',
        is_used: true,
        user_id: 1,
        used_at: '2023-02-06T12:14:36.188Z',
      };

      sandbox.stub(Voucher, 'query').returns({
        findById: sandbox.stub().returns(returnVal),
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return a voucher', async () => {
      const result = await voucherService.get();
      expect(result).to.be.an('object');
      expect(result).to.equal(returnVal);
    });
  });

  describe('service.create', () => {
    let returnVal;

    beforeEach(() => {
      returnVal = [
        {
          code: 'q636tLTLZuY1syfpV65XW2',
          user_id: 1,
        },
      ];

      sandbox.stub(Voucher, 'query').returns({
        insert: sandbox.stub().returns({
          code: 'q636tLTLZuY1syfpV65XW3',
          user_id: 1,
        }),
      });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should create a voucher', async () => {
      const result = await voucherService.create({
        code: 'q636tLTLZuY1syfpV65XW3',
        user_id: 1,
      });

      expect(result).to.be.an('object');
      expect(result).to.haveOwnProperty('code');
      expect(result).to.haveOwnProperty('user_id');
    });
  });

  describe('service.update', () => {
    beforeEach(() => {
      returnVal = [
        {
          code: 'q636tLTLZuY1syfpV65XW2',
          user_id: 1,
        },
      ];

      sandbox.stub(Voucher, 'query').returns({
        findById: sandbox.stub().returnsThis(),
        patch: sandbox.stub().returns({
          code: 'q636tLTLZuY1syfpV65XW3',
          user_id: 1,
        }),
      });
    });

    afterEach(() => {
      sandbox.restore();
    });
    it("should update voucher's is_used and used_at", async () => {
      const result = await voucherService.update(4, { is_used: true });
      console.log(result);
    });
  });
});
