const { Property, PropertyIMG } = require('../models')

exports.getAllProperty = async (req, res) => {
    try {
        var getAll = await Property.findAndCountAll({
            where: {
                isDelete: false
            },
            limit: req.body.limit,
            offset: req.body.offset
        })
        if (!getAll) {
            return res.status(404).json({
                message: "Data not found"
            })
        } else {
            return res.status(200).json({
                message: "Success",
                getAll
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.addProperty = async (req, res) => {
    try {
        const { property } = req.body
        var create_property = await Property.create(property)

        if (!create_property) {
            return res.status(404).json({
                message: "failed to create"
            })
        } else {
            return res.status(200).json({
                message: "created",
                create_property
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.updateProperty = async (req, res) => {
    try {
        const { property } = req.body
        var updateProperty = await Property.update(
            property,
            {
                where: {
                    id: property.id
                }
            }
        )
        return res.status(200).send({
            message: "update User",
            updateProperty
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.deleteProperty = async (req, res) => {
    try {
        const prop_id = req.body.id
        const data = await Property.findAll({ where: { id: prop_id } })
        if (!data) {
            return res.status(404).json({
                message: "post not found"
            })
        } else {
            Property.update({
                isDelete: true
            }, {
                where: {
                    id: req.body.id
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

exports.uploadImg = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        var file = req.files
        var propertyArray = []

        file.map((fileName) => {
            var temp = {
                "prop_id": id,
                "property_img": fileName.path
            }
            propertyArray.push(temp)
        })

        var upload_img = await PropertyIMG.bulkCreate(propertyArray)
        if (upload_img) {
            return res.status(200).json({
                message: "Image upload success"
            })
        } else {
            return res.status(400).json({
                message: "failed to upload"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.getPropertyImg = async (req, res) => {
    try {
        const data = await PropertyIMG.findAll({ where: { prop_id: req.body.prop_id } })
        if (!data) {
            return res.status(404).json({
                message: "img not found"
            })
        } else {
            res.status(200).send({
                message: "Prop IMG",
                data
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}


