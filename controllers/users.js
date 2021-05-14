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

function usersPost(req, res)  {

    const { name, age } = req.body

    res.json({
        msg: 'Post API - Controller',
        name,
        age
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