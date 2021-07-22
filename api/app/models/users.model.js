const connections = require('../../basedatos')

const dataModel = {
    postRegister: (data, callback) => {
        if (connections) {

            connections.query('SELECT email FROM users WHERE email = ?', [data.email], (error, result) => {
                if (error) throw error
                if (result.length > 0) {
                    callback({ message: 'Este email esta en Uso', alert: false })
                } else {
                    connections.query(`insert into users (name, email, password) value(${connections.escape(data.name)}, ${connections.escape(data.email)},${connections.escape(data.password)})`, (err, rows) => {
                        if (err) throw err
                        callback({ message: 'Se registro correctamente', alert: true })
                    })
                }
            })
        }
    },
    postLogin: (data, callback) => {
        if (connections) {
            if (data.email && data.password) {
                connections.query('SELECT * FROM users WHERE email = ?', [data.email], (error, result) => {
                    if (error) throw error
                    if ((data.password == result[0].password)) {
                        callback({ message: 'Bienvenido', alert: true, session: true, id: result[0].id, name: result[0].name })
                    } else {
                        callback({ message: 'Usuario o Password Incorrectas', alert: true, session: false })
                    }
                })
            } else {
                callback({ message: 'Por favor Ingrese un usuario y una clave', alert: false, session: false })
            }
        }
    }
}

module.exports = dataModel