const express = require("express")
const router = express.Router()
const BlogControler = require('../controllers/Blogs')

router.post('/getAll', BlogControler.getAllBlogs)
router.post('/add', BlogControler.addBlog)
router.post('/update', BlogControler.updateBlog)
router.post('/delete', BlogControler.deleteBlog)

module.exports = router