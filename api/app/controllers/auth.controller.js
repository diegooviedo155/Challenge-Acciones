const dataModel = require('../models/users.model')

const register = (req, res) => {
    dataModel.postRegister(req.body, (data, err) => {
        res.json(data)
    })
}

const login = (req, res) => {
    dataModel.postLogin(req.body, (data, err) => {
        res.json(data)
    })
}

module.exports = {
    register,
    login
}