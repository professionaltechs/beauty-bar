const Group = require("../model/group");

exports.create = async (req, res) => {
    try {
        const group = await new Group(req.body);
    
        group.save().then(response => {
            res.status(200).json({
                message: "group created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.get = async (req, res) => {
    try {
        const group = await Group.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: group
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const group = await Group.find({isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: group
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const group = await Group.findOne({_id: req.body.id});
        if(!group){
            res.status(404).json({
                message: "group not found with given id "
            });
        }
    
        group.title = req.body.title || group.title;
        group.images = req.body.images || group.images;
        group.description = req.body.description || group.description;
    
        group.save().then(response => {
            res.status(200).json({
                message: "updated succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const group = await Group.findOne({_id: req.body.id});
        if(!group){
            res.status(404).json({
                message: "group not found with given id "
            });
        }
    
        group.isDeleted = 1;
        group.save().then(response => {
            console.log(response)
            res.status(200).json({
                message: "deleted succesfully"
            })
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}