const Role = require("../model/role");

exports.createRole = async (req, res) => {
    try {
        const role = await new Role(req.body);
    
        role.save().then(response => {
            res.status(200).json({
                id: response._id,
                message: "role created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getRoleById = async (req, res) => {
    const role = await Role.findOne({_id: req.body.id, isDeleted: {$ne: 1}}).select({createdAt: 0, updatedAt: 0});
    res.json({
        role
    })
}

exports.getAllRoles = async (req, res) => {
    const role = await Role.find({isDeleted: {$ne: 1}}).select({createdAt: 0, updatedAt: 0});
    res.json({
        role
    })
}

exports.updateRoleById = async (req, res) => {
    try {
        const role = await Role.findOne({_id: req.body.id});
    
        role.title = req.body.title || role.title;
        role.permissionIds = req.body.permissionIds || role.permissionIds;
    
        role.save().then(response => {
            res.status(200).json({
                role,
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

exports.deleteRoleById = async (req, res) => {
    try {
        const role = await Role.findOne({_id: req.body.id});
    
        role.isDeleted = 1;
        role.save().then(response => {
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