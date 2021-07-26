'use strict'
// framework de nodeJS
const express = require('express')
// librería que da varios middlewares para manejar datos de peticion

const app = express()

var emailCtrl = require('./controller/mail')
app.post('/', emailCtrl.sendMail)

module.exports = app