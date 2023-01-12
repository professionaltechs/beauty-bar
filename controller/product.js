const Product = require("../model/product");

exports.create = async (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "prodcut content can not be empty"
        });
    }
    try {
        const product = await new Product(req.body);
    
        product.save().then(response => {
            res.status(200).json({
                message: "product created succesfully"
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
        const product = await Product.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: product
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
        const product = await Product.find({isDeleted: {$ne: 1}});
    
        res.status(200).json({
            message: product
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
        const product = await Product.findOne({_id: req.body.id});
        if(!product){
            res.status(404).json({
                message: "Product not found with given id "
            });
        }
    
        product.name = req.body.name || product.name;
        product.images = req.body.images || product.images;
        product.title = req.body.title || product.title;
        product.price = req.body.price || product.price;
        product.rating = req.body.rating || product.rating;
        product.description = req.body.description || product.description;
        product.ingredients = req.body.ingredients || product.ingredients;
        product.discount = req.body.discount || product.discount;
        product.categoryId = req.body.categoryId || product.categoryId;
    
        product.save().then(response => {
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
        const product = await Product.findOne({_id: req.body.id});
        if(!product){
            res.status(404).json({
                message: "Product not found with given id "
            });
        }
    
        product.isDeleted = 1;
        product.save().then(response => {
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