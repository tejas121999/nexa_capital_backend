const express = require("express")
const router = express.Router()
const user = require('./Users')
const property = require('./Property')
const blog = require('./Blogs')
const enquery = require('./Enquery')

router.use('/user', user)
router.use('/property', property)
router.use('/blog', blog)
router.use('/enquery', enquery)

module.exports = router