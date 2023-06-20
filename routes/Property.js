const express = require("express")
const router = express.Router()
const propertyControler = require('../controllers/Property')

router.post('/getAll', propertyControler.getAllProperty)
router.post('/add', propertyControler.addProperty)
router.post('/update', propertyControler.updateProperty)
router.post('/delete', propertyControler.deleteProperty)

module.exports = router