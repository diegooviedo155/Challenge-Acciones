const connections = require('../../basedatos')

const dataModel = {
    getFavorites: (data,callback) => {
        if(connections) {
            connections.query('select * from fav', (error,rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addFavorites:(data,callback)=>{
        if(connections){
            // connections.query(`select * from fav where symbol = ?`,[data.symbol],(error,result) => {
                //     if(error) throw error
                //     if(result.length>0 ){
            //         callback({message:"Ya se encuentra en favoritos"})
            //     }else{
                    connections.query(`INSERT INTO fav (idUser, symbol, name, currency, exchange, country, type) VALUES (${connections.escape(data.idUser)}, ${connections.escape(data.symbol)}, ${connections.escape(data.name)}, ${connections.escape(data.currency)}, ${connections.escape(data.exchange)}, ${connections.escape(data.country)}, ${connections.escape(data.type)})`,(error,result) => {
                        if (error) throw error
                        callback({message:'Agregado'})
                    })
                    //     }
            // })
        }
    },
    
    deleteFavorites:(data,callback)=>{
        if(connections){
            connections.query(`delete from fav where id = ${connections.escape(data)}`, (error,rows) => {
                if(error) throw error
                callback({message: 'Eliminado'})
            })
        }
    }
}

    // editFavorites:()=>{
    // },
    
    // getOneFavorites:(data,callback) => {
    // },

    module.exports = dataModel