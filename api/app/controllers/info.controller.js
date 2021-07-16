const dataModel = require('../models/favorites.model')
const fetch = require('node-fetch')

const getInfo = (req, res) => {
    fetch("https://api.twelvedata.com/stocks?source=docs&exchange=NYSE")
            .then((respuesta) => {
                return respuesta.json()
            }).then((resp) => {
                res.json(resp.data)
                });
}


module.exports = {
    getInfo
}