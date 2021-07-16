const app = require('./app/app')



//dataBase
require('./basedatos')


app.listen(app.get('port'),(error)=>{
    if(error){
        console.log(`there was an error : ${error}`)
    }else{
        console.log(`server running on port: ${app.get('port')}`)
    }
})