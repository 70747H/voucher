const short = require('short-uuid')
const voucherService = require('./voucher.service')

class VoucherController {
  async list (req, res, next) {
    try {
      const vouchers = await voucherService.list()
      res.status(200).json(vouchers)
    } catch (error) {
      next(error)
    }
  }

  async create (req, res, next) {
    const { body } = req
    const { user_id: userId } = body
    try {
      await voucherService.create({
        user_id: userId,
        code: short.generate()
      })

      res.status(201).send('Created!')
    } catch (error) {
      next(error)
    }
  }

  async update (req, res, next) {
    const { params } = req
    const { id } = params

    try {
      const foundVoucher = await voucherService.get(id)

      if (!foundVoucher) res.status(404).send('Voucher not found')

      if (foundVoucher.is_used) res.status(400).send('Voucher is used before')

      await voucherService.update(id, {
        is_used: true,
        used_at: new Date().toISOString()
      })
      res.status(200).send('Updated!')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new VoucherController()
