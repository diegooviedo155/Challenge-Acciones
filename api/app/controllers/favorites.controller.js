const dataModel = require('../models/favorites.model')

const getFavorites = (req, res) => {
    const data = {"idUser":27}
    dataModel.getFavorites(data,(data,error) => {
        res.json(data)
    })
}

const addFavorites = (req, res) => {
    const datos = req.body
    dataModel.addFavorites(datos,(data,error) => {
        res.json(data)
    })
}


const deleteFavorites = (req, res) => {
    const {id} = req.params
    dataModel.deleteFavorites(id,(data,error)=>{
        res.json(data)
    })
}

// const getOneFavorites = (req, res) => {
// } 
// const editFavorites = (req, res) => {
// }

module.exports = {
    getFavorites, addFavorites, deleteFavorites
}