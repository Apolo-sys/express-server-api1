const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Missing Name']
    },
    mail: {
        type: String,
        required: [true, 'Missing Mail'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Missing Password']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})





module.exports = model( 'User', UserSchema )