const SubCategory = require("../model/subCategory");

exports.createSubCategory = async (req, res) => {
    try {
        const subCategory = await new SubCategory(req.body);
    
        subCategory.save().then(response => {
            console.log(response)
            res.status(200).json({
                id: response._id,
                message: "subCategory created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

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

exports.updateSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findOne({_id: req.body.id});
        if(!subCategory){
            res.status(404).json({
                message: "subCategory not found with given id "
            });
        }
    
        subCategory.title = req.body.title || subCategory.title;
        subCategory.images = req.body.images || subCategory.images;
        subCategory.categoryId = req.body.categoryId || subCategory.categoryId;
    
        subCategory.save().then(response => {
            res.status(200).json({
                subCategory,
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

exports.deleteSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findOne({_id: req.body.id});
        if(!subCategory){
            res.status(404).json({
                message: "subCategory not found with given id "
            });
        }
    
        subCategory.isDeleted = 1;
        subCategory.save().then(response => {
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