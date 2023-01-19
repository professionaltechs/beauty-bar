const Category = require("../model/category");

exports.createCategory = async (req, res) => {
    try {
        const category = await new Category(req.body);
    
        category.save().then(response => {
            console.log(response)
            res.status(200).json({
                id: response._id,
                message: "category created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

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

exports.updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.body.id});
        if(!category){
            res.status(404).json({
                message: "category not found with given id "
            });
        }
    
        category.title = req.body.title || category.title;
        category.images = req.body.images || category.images;
    
        category.save().then(response => {
            res.status(200).json({
                category,
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

exports.deleteCategoryById = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.body.id});
        if(!category){
            res.status(404).json({
                message: "category not found with given id "
            });
        }
    
        category.isDeleted = 1;
        category.save().then(response => {
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