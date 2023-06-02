const express = require('express')
const router = express.Router()
const potholeController = require('../controller/potholeController')

router.post('/', potholeController.reportPothole)

module.exports = router