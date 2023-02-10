const Role = require("../model/role");

exports.getRoleById = async (req, res) => {
    const role = await Role.findOne({_id: req.body.id, isDeleted: {$ne: 1}})
        .select({createdAt: 0, updatedAt: 0, __v: 0, isActive: 0, isDeleted: 0})
        .populate({path: "permissionIds", select: {"_id": 0, "title": 1}})
    res.json({
        role
    })
}

exports.getAllRoles = async (req, res) => {
    const role = await Role.find({isDeleted: {$ne: 1}}).select({createdAt: 0, updatedAt: 0, __v: 0, isActive: 0, isDeleted: 0}).populate({path: "permissionIds", select: {"_id": 0, "title": 1}});
    res.json({
        role
    })
}