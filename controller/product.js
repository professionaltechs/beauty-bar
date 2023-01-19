const Discount = require("../model/discount");
const Product = require("../model/product");
const User = require("../model/user");

exports.createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body);
    
        product.save().then(response => {
            res.status(200).json({
                id: response._id,
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

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.body.id, isDeleted: {$ne: 1}}).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades");
    
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

exports.getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({isDeleted: {$ne: 1}}).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades");
    
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

exports.updateProductById = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.body.id});
        if(!product){
            res.status(404).json({
                message: "Product not found with given id "
            });
        }
    
        product.images = req.body.images || product.images;
        product.title = req.body.title || product.title;
        product.price = req.body.price || product.price;
        product.rating = req.body.rating || product.rating;
        product.description = req.body.description || product.description;
        product.ingredients = req.body.ingredients || product.ingredients;
        product.discount = req.body.discount || product.discount;
        product.categoryId = req.body.categoryId || product.categoryId;
        product.subCategoryId = req.body.subCategoryId || product.subCategoryId;
        product.brandId = req.body.brandId || product.brandId;
        product.skinTypeId = req.body.skinTypeId || product.skinTypeId;
        product.skinToneId = req.body.skinToneId || product.skinToneId;
        product.skinUnderToneId = req.body.skinUnderToneId || product.skinUnderToneId;
        product.skinConcernIds = req.body.skinConcernIds || product.skinConcernIds;
        product.shades = req.body.shades || product.shades;
    
        product.save().then(response => {
            res.status(200).json({
                product,
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

exports.deleteProductById = async (req, res) => {
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

exports.getPopularProducts = async (req, res) => {
    try {
        const products = await Product.find({isDeleted: {$ne: 1}}).sort({rating: -1}).limit(req.body.limit).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades")

        res.status(200).json({
            message: products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getProductsBySubCatId = async (req, res) => {
    try {
        const products = await Product.find({subCategoryId: req.body.subCategoryId, isDeleted: {$ne: 1}}).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades");
        
        res.status(200).json({
            message: products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }

}

exports.getProductsByBrandId = async (req, res) => {
    try {
        const products = await Product.find({brandId: req.body.brandId, isDeleted: {$ne: 1}}).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades");

        res.status(200).json({
            message: products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getTop3NewestProducts = async (req, res) => {
    try {
        const products = await Product.find({isDeleted: {$ne: 1}}).sort({createdAt: -1}).limit(3).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades");

        res.status(200).json({
            message: products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getBestMatchProducts = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.body.userId})
        let productIds = []
        let products = await Product.find({
            skinTypeId: user.skinTypeId, 
            skinToneId: user.skinToneId, 
            skinUnderToneId: user.skinUnderToneId
        }).limit(req.body.limit).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades");
        
        products.forEach((item, pos) => {
            productIds.push(item._id)
        })
        
        let moreProducts = [];
        if(req.body.limit > products.length){
            moreProducts = await Product.find({
                $or: [
                    {$and : [{ skinTypeId: user.skinTypeId}, { skinToneId: user.skinToneId }, { _id: {$nin: productIds} }]},
                    {$and : [{ skinTypeId: user.skinTypeId}, { skinUnderToneId: user.skinUnderToneId }, { _id: {$nin: productIds} }]},
                    {$and : [{ skinToneId: user.skinToneId}, { skinUnderToneId: user.skinUnderToneId }, { _id: {$nin: productIds} }]},
                ]
            }).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades")

            products = [...products, ...moreProducts]
        }

        return res.json({
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getDiscountedProducts = async (req, res) => {
    try {
        const discounts = await Discount.find().sort({percentage: -1}).populate("productIds");

        let productArray = [];
        discounts.forEach((item, index) => {
            productArray = [...productArray, ...item.productIds]
        })
    
        res.status(200).json({
            productArray
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}