const express = require("express")
const router = express.Router()
const propertyControler = require('../controllers/Property')
const verify = require("../middleware/JWT")

router.post('/getAll', verify.validateToken, propertyControler.getAllProperty)
router.post('/add', verify.validateToken, propertyControler.addProperty)
router.post('/update', verify.validateToken, propertyControler.updateProperty)
router.post('/delete', verify.validateToken, propertyControler.deleteProperty)

module.exports = router