const route = require('express').Router()
const authController = require('../controllers/auth.controller')

route.route('/register').post(authController.register)

route.route('/login').post(authController.login)


module.exports = route