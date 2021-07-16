const express = require('express')
const cors = require('cors')

const app = express()
const port = (process.env.PORT || 5000)
        
//settings
app.set('port', port)

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//routes
app.use('/favorites',require('./routes/favorites.routes'))
app.use('/info',require('./routes/info.routes'))
app.use('/auth', require('./routes/users.routes'))


module.exports =app