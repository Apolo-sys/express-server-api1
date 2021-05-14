const mongoose = require('mongoose')


const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log("Connection successful with MongoDB")
    } catch (e) {
        throw new Error('Error with DB Conection: ' + e.message)
    }
}


module.exports = {
    dbConnection
}