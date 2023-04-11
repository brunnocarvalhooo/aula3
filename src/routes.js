const { Router } = require('express')

const { hello, hello2 } = require('./controllers')

const routes = Router()

routes.get('/hello', hello)

routes.get('/hello2', hello2)

module.exports = routes