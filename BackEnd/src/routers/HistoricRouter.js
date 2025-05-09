const express = require('express')
const router = express.Router()
const {viewHistoric, createHitoric, DeleteHistoric} = require('../controllers/HistoricController')

router.get('/historic/:idHistoric/user', viewHistoric)
// router.patch('/historic/:idHistoric/historic')

router.post('/historic/create', createHitoric)
router.delete('/historiic/:idExperiencies/delete', DeleteHistoric)

module.exports = router