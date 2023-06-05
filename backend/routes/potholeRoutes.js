const express = require('express')
const router = express.Router()
const potholeController = require('../controller/potholeController')

router.post('/api/potholes/post', potholeController.reportPothole)
router.get('/api/potholes/getAll', potholeController.listAllPothole);

module.exports = router