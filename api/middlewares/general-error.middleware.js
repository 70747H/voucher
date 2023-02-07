module.exports = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error)
  }

  if (error.validationErrors) {
    return res.status(400).json({
      errors: error.validationErrors
    })
  }

  if (error.type === 'UnknownError') {
    res.status(500).send(error)
  }

  next()
}
