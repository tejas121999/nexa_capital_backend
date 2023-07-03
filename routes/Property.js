const express = require("express")
const router = express.Router()
const propertyControler = require('../controllers/Property')
const verify = require("../middleware/JWT")
const property_img = require('../middleware/PropertyIMG')

router.post('/getAll', propertyControler.getAllProperty)
router.post('/add', verify.validateToken, propertyControler.addProperty)
router.post('/update', verify.validateToken, propertyControler.updateProperty)
router.post('/delete', verify.validateToken, propertyControler.deleteProperty)
router.post('/upload/:id',
    verify.validateToken,
    property_img.upload.array('property'),
    propertyControler.uploadImg
)
router.post('/getImg', verify.validateToken, propertyControler.getPropertyImg)

module.exports = router