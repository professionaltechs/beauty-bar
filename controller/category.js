const Category = require("../model/category");

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const category = await Category.find({isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: category
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}