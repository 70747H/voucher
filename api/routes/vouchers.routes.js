const express = require('express')
const { Validator } = require('express-json-validator-middleware')
const { validate } = new Validator()
const postSchema = require('../vouchers/validation/create-voucher.validation')
const { list, create, update } = require('../vouchers/voucher.controller')

const router = express.Router()

router.get('/', list)

router.post('/', validate({ body: postSchema }), create)

router.patch('/:id', update)

module.exports = router
