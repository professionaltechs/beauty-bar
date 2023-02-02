const Permission = require("../model/permission");

exports.createPermission = async (req, res) => {
    try {
        const permission = await new Permission(req.body);
    
        permission.save().then(response => {
            res.status(200).json({
                id: response._id,
                message: "permission created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getPermissionById = async (req, res) => {
    const permission = await Permission.findOne({_id: req.body.id, isDeleted: {$ne: 1}}).select({createdAt: 0, updatedAt: 0, __v: 0, isActive: 0, isDeleted: 0});
    res.json({
        permission
    })
}

exports.getAllPermissions = async (req, res) => {
    const permission = await Permission.find({isDeleted: {$ne: 1}}).select({createdAt: 0, updatedAt: 0, __v: 0, isActive: 0, isDeleted: 0});
    res.json({
        permission
    })
}

exports.updatePermissionById = async (req, res) => {
    try {
        const permission = await Permission.findOne({_id: req.body.id}).select({createdAt: 0, updatedAt: 0, __v: 0, isActive: 0, isDeleted: 0});
    
        permission.title = req.body.title || permission.title;
        permission.permissionIds = req.body.permissionIds || permission.permissionIds;
    
        permission.save().then(response => {
            res.status(200).json({
                permission,
                message: "updated succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error
        })
    }
}

exports.deletePermissionById = async (req, res) => {
    try {
        const permission = await Permission.findOne({_id: req.body.id});
    
        permission.isDeleted = 1;
        permission.save().then(response => {
            console.log(response)
            res.status(200).json({
                message: "deleted succesfully"
            })
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error
        })
    }
}