const Permission = require("../model/permission");

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
