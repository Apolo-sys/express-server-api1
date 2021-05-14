const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersRoutePath = '/api/users'

        // DB Connection
        this.connectDB().then(r => console.log("MongoDB Attached to Server"))

        // Middlewares
        this.middlewares()

        // App Routes

        this.routes()
    }

    async connectDB() {
        await dbConnection()
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Read body json
        this.app.use( express.json() )

        // Public directory
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use(this.usersRoutePath, require('../routes/user'))
    }

listen() {
        this.app.listen( this.port, () => {
            console.log("Server listening on port", this.port)
        })
    }
}




module.exports = Server;