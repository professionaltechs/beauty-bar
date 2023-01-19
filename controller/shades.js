const Shade = require("../model/shades");

exports.createShade = async (req, res) => {
    try {
        const shade = await new Shade(req.body);
    
        shade.save().then(response => {
            res.status(200).json({
                id: response._id,
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

exports.getShadeById = async (req, res) => {
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

exports.getAllShades = async (req, res) => {
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

exports.updateShadeById = async (req, res) => {
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
                shade,
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

exports.deleteShadeById = async (req, res) => {
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