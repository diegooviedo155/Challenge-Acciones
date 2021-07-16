const route = require('express').Router()
const { getInfo} = require('../controllers/info.controller')

route.route('/').get(getInfo)
module.exports = route