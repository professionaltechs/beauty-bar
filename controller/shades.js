const Shade = require("../model/shades");

exports.create = async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "shade content can not be empty"
        });
    }
    try {
        const shade = await new Shade(req.body);
    
        shade.save().then(response => {
            res.status(200).json({
                message: "shade created succesfully"
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
        const shade = await Shade.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: shade
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
        const shade = await Shade.find({isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: shade
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
        const shade = await Shade.findOne({_id: req.body.id});
        if(!shade){
            res.status(404).json({
                message: "shade not found with given id "
            });
        }

        shade.name = req.body.name || shade.name;
        shade.colorShade = req.body.colorShade || shade.colorShade;
    
        shade.save().then(response => {
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
        const shade = await Shade.findOne({_id: req.body.id});
        if(!shade){
            res.status(404).json({
                message: "shade not found with given id "
            });
        }
    
        shade.isDeleted = 1;
        shade.save().then(response => {
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