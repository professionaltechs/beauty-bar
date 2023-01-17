const SubCategory = require("../model/subCategory");

exports.create = async (req, res) => {
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

exports.get = async (req, res) => {
    try {
        const subCategory = await SubCategory.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
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

exports.getAll = async (req, res) => {
    try {
        const subCategory = await SubCategory.find({isDeleted: {$ne: 1}});
    
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

exports.update = async (req, res) => {
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

exports.delete = async (req, res) => {
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