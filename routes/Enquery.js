const express = require("express")
const router = express.Router()
const propertyControler = require('../controllers/Enquery')

router.post('/getAll', propertyControler.getAllenquery)
router.post('/add', propertyControler.addEnquery)
router.post('/update', propertyControler.updateEnq)
router.post('/delete', propertyControler.deleteEnqs)

module.exports = router