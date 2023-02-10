const SubCategory = require("../model/subCategory");

exports.getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findOne({_id: req.body.id, isDeleted: {$ne: 1}}).populate("categoryId");
    
        res.status(200).json({
            message: subCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getAllSubCategories = async (req, res) => {
    try {
        const subCategory = await SubCategory.find({isDeleted: {$ne: 1}}).populate("categoryId");
    
        res.status(200).json({
            message: subCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getSubCategoriesByCatId = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({categoryId: req.body.categoryId}).populate("categoryId");
    
        res.status(200).json({
            subCategories
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}