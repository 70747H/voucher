const Voucher = require('./model/voucher')

class VoucherService {
  list () {
    return Voucher.query()
  }

  get (id) {
    return Voucher.query().findById(id)
  }

  create (data) {
    return Voucher.query().insert(data)
  }

  update (id, data) {
    return Voucher.query().findById(id).patch(data)
  }
}

module.exports = new VoucherService()
