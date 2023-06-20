const { Bloges } = require('../models')

exports.getAllBlogs = async (req, res) => {
    try {
        var getAllBlog = await Bloges.findAll()
        if (!getAllBlog) {
            return res.status(404).json({
                message: "Something went wrong"
            })
        } else {
            return res.status(200).json({
                message: "Success",
                getAllBlog
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.addBlog = async (req, res) => {
    try {
        const { blog } = req.body
        var createBlog = await Bloges.create(blog)
        if (!createBlog) {
            return res.status(404).json({
                message: "failed to create"
            })
        } else {
            return res.status(200).json({
                message: "created",
                create_post
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const { blogs } = req.body
        var updateBlog = await Bloges.update(
            blogs,
            {
                where: {
                    id: blogs.id
                }
            }
        )
        return res.status(200).send({
            message: "update post",
            updateBlog
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog_id = req.body
        const data = await Bloges.findOne({ where: { id: blog_id } })
        if (!data) {
            return res.status(404).json({
                message: "post not found"
            })
        } else {
            Bloges.update({
                isDelete: true
            }, {
                where: {
                    id: blog_id
                }
            }).then((_) => {
                res.status(200).send({
                    message: "Delete",
                    // data
                })
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

