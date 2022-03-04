const express = require('express')
const router = express.Router()
var usersController = require('../controllers/users.controller')

router.get('/',(req, res) => {res.status(200).json('Software Avanzado - Tarea Práctica 5 - 201709454 - Jorge Ambrocio')})
router.post('/user', usersController.pUser)

module.exports = router