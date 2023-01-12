const Category = require("../model/categories");

exports.create = async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "group content can not be empty"
        });
    }
    try {
        const category = await new Category(req.body);
    
        category.save().then(response => {
            res.status(200).json({
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

exports.get = async (req, res) => {
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

exports.getAll = async (req, res) => {
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

exports.update = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.body.id});
        if(!category){
            res.status(404).json({
                message: "category not found with given id "
            });
        }
    
        category.name = req.body.name || category.name;
        category.images = req.body.images || category.images;
    
        category.save().then(response => {
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