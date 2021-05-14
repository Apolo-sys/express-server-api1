const { check } = require('express-validator')

const { usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch } = require("../controllers/users");

const { Router } = require('express')

const router = Router();


router.get('/', usersGet)

router.put('/:id', usersPut)

router.post('/', [
    check('mail', 'Mail not valid').isEmail(),
], usersPost)

router.delete('/', usersDelete)

router.patch('/', usersPatch)













module.exports = router;

