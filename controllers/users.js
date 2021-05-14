const User = require('../models/User')
const bcryptjs = require('bcryptjs');
const {validationResult} = require("express-validator");


function usersGet(req, res)  {
    const { q, name = 'No name', apikey, page = 1, limit = 1 } = req.query
    res.json({
        msg: 'Get API - Controller',
        q,
        name,
        apikey,
        page,
        limit
    })
    return true
}

function usersPut(req, res)  {

    const id = req.params.id

    res.json({
        msg: 'Put API - Controller',
        id
    })
    return true
}

const usersPost = async (req, res) =>  {

    const errors = validationResult(req)
    if( !errors.isEmpty() ) {
        return res.status(400).send(errors)
    }

    const { name, mail, password, role } = req.body
    const user = new User({ name, mail, password, role })

    // Verify if mail exists
    const mailExists = await User.findOne({ mail })
    if ( mailExists ) {
        return res.status(400).json({
            msg: 'Mail already exists'
        })
    }

    // Crypt Password
    const salt = bcryptjs.genSaltSync(); // Generate Salt
    user.password = bcryptjs.hashSync( password, salt )

    // Save on DB
    await user.save();

    res.json({
        msg: 'Post API - Controller',
        user
    })
    return true
}

function usersDelete(req, res)  {
    res.json({
        msg: 'Delete API - Controller'
    })
    return true
}

function usersPatch(req, res)  {
    res.json({
        msg: 'Patch API - Controller'
    })
    return true
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}