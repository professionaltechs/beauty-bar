const Shade = require("../model/shades");

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