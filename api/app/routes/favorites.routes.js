const route = require('express').Router()
const { getFavorites, addFavorites, deleteFavorites} = require('../controllers/favorites.controller')

route.route('/').get(getFavorites)

//route.route('/:id').get(getOneFavorites)

route.route('/').post(addFavorites)

//route.route('/:id').put(editFavorites)

route.route('/:id').delete(deleteFavorites)

module.exports = route