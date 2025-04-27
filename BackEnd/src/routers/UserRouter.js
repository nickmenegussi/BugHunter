const express = require('express')
const router = express.Router()
const {viewUser, updatNameUser, updateEmailUser, updateSenhaUser, DeleteUser, createLogin, createRegister} = require('../controllers/UserController')

router.get('/user', viewUser)

router.patch('/user/:idUser/nameUser', updatNameUser)
router.patch('/user/:idUser/emailUser', updateEmailUser)
router.patch('/user/:idUser/novaSenha', updateSenhaUser)

router.post('/user/register', createRegister)
router.post('/user/login', createLogin)

router.delete('/user/:idUser/delete', DeleteUser)

module.exports = router