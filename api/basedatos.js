const mysql = require("mysql")

const conexion = mysql.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password: "",
    database:"db_stocks"
})

conexion.connect((err)=>{
    if(err){
        console.log(`ha ocurrido un error: ${err}`)
    }else{
        console.log(`Base de Datos Conectada!!!`)
    }
})

module.exports = conexion