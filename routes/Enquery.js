const express = require("express")
const router = express.Router()
const propertyControler = require('../controllers/Enquery')
const verify = require("../middleware/JWT")

router.post('/getAll', verify.validateToken, propertyControler.getAllenquery)
router.post('/add', verify.validateToken, propertyControler.addEnquery)
router.post('/update', verify.validateToken, propertyControler.updateEnq)
router.post('/delete', verify.validateToken, propertyControler.deleteEnqs)

module.exports = router