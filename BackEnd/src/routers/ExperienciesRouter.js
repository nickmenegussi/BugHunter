const express = require('express')
const router = express.Router()
const {viewExperiencies, createExperiences, updateAmountOfExperiencie, updateAreaAtuation, updateCurrentPosition, updateDegree, deleteExperiencies} = require('../controllers/ExperienciesController')

router.get('/experiencies/:idUser/user', viewExperiencies)

router.patch('/experiencies/:idExperiencies/degree', updateDegree)
router.patch('/experiencies/:idExperiencies/amountOfExperiencie', updateAmountOfExperiencie)
router.patch('/experiencies/:idExperiencies/areaAtuation', updateAreaAtuation)
router.patch('/experiencies/:idExperiencies/currentPosition', updateCurrentPosition)

router.post('/experiencies/create', createExperiences)

router.delete('/experiencies/:idExperiencies/delete', deleteExperiencies)

module.exports = router