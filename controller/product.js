const Discount = require("../model/discount");
const Product = require("../model/product");
const User = require("../model/user");
const Review = require("../model/review");

exports.getProductDetailsById = async (req, res) => {
    // "categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades storeId"
    try {
        const reviews = await Review.find({productId: req.body.id}).select({_id: 0, userId: 1, rating: 1, comment: 1, createdAt: 1}).populate({path: "userId", select: {"_id": 0, "name": 1, "profileImage": 1}})
        const discount = await Discount.findOne({productIds: { "$in" : [req.body.id]} }).select({_id: 0, productIds: 0})
        const product = await Product.findOne({_id: req.body.id, isDeleted: {$ne: 1}})
            .select({images: 1, title: 1, price: 1, rating: 1, description: 1, brandId: 1, shades: 1, storeId: 1, ingredients: 1})
            .populate({path: "shades", select: {"_id": 0, "name": 1, "colorShade": 1}})
            .populate({path: "brandId", select: {"_id": 0, "title": 1, "image": 1}})
            .populate({path: "storeId", select: {"_id": 0, "title": 1, "image": 1}})
        
        const finalProduct = {...product._doc}
        finalProduct.reviews = []
        reviews.forEach((item, index) => {
            finalProduct.reviews.push(item)
        })

        if(discount){
            finalProduct.discountPercentage = discount.percentage
            finalProduct.discountValidity = discount.validity
            finalProduct.discountedPrice = (product.price / 100) * discount.percentage
        }else{
            finalProduct.discountPercentage = null
            finalProduct.discountValidity = null
            finalProduct.discountedPrice = 0
        }

        res.status(200).json({
            message: finalProduct
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
        const product = await Product.find({isDeleted: {$ne: 1}}).populate("categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades storeId");
    
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

exports.getPopularProducts = async (req, res) => {
    // "categoryId subCategoryId brandId skinTypeId skinToneId skinUnderToneId skinConcernIds shades"
    try {
        const discounts = await Discount.find().sort({percentage: -1});

        const products = await Product
            .find({isDeleted: {$ne: 1}})
            .select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1})
            .sort({rating: -1})
            .limit(req.body.limit);


        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })

        res.status(200).json({
            message: productArray
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getFilteredProductsByPrice = async (req, res) => {
    try {
        const products = await Product
            .find({isDeleted: {$ne: 1}})
            .select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1})
            .sort({price: req.body.flag == "highest" ? -1 : req.body.flag == "lowest" ? 1 : null})
            .limit(req.body.limit)

        const discounts = await Discount.find().sort({percentage: -1});
        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })

        res.status(200).json({
            message: productArray
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
        const products = await Product
            .find({subCategoryId: req.body.subCategoryId, isDeleted: {$ne: 1}})
            .select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1})
            .limit(req.body.limit)
        
        const discounts = await Discount.find().sort({percentage: -1});
        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })
        
        res.status(200).json({
            message: productArray
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
        const products = await Product
            .find({brandId: req.body.brandId, isDeleted: {$ne: 1}})
            .select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1})
            .limit(req.body.limit)
    
        const discounts = await Discount.find().sort({percentage: -1});
        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })
        
        res.status(200).json({
            message: productArray
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
        const products = await Product
            .find({isDeleted: {$ne: 1}}).sort({createdAt: -1})
            .select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1})
            .limit(3)

        const discounts = await Discount.find().sort({percentage: -1});
        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })
        
        res.status(200).json({
            message: productArray
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
        }).select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1}).limit(req.body.limit)

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
            }).select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1}).limit(req.body.limit - products.length)

            products = [...products, ...moreProducts]
        }

        const discounts = await Discount.find().sort({percentage: -1});
        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })
        
        res.status(200).json({
            message: productArray
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getFilteredProductsByStoreId = async (req, res) => {
    try {
        const products = await Product
            .find({storeId: req.body.storeId, isDeleted: {$ne: 1}})
            .select({images: 1, title: 1, rating: 1, brand: 1, price: 1, ingredients: 1})
            .limit(req.body.limit)

        const discounts = await Discount.find().sort({percentage: -1});
        let productArray = []
        discounts.forEach((item, index) => {
            products.forEach((element, position) => {
                const obj = {...element._doc}
                if(item.productIds.indexOf(element._id) >= 0){
                    obj.discountedPrice = (element.price / 100) * item.percentage
                    obj.discountPercentage = item.percentage
                    productArray.push(obj);
                }else{
                    obj.discountedPrice = null
                    obj.discountPercentage = null
                    productArray.push(obj);
                }
            })
        })

        res.status(200).json({
            message: productArray
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
        const discounts = await Discount.find().sort({percentage: -1}).populate({path: "productIds", select: "images title rating brand price ingredients"});
        
        let i = 0
        let productArray = [];
        discounts.every((item, index) => {
            item.productIds.every((element, posittion) => {
                console.log(req.body.limit <= i && req.body.limit != null)
                if(req.body.limit <= i && req.body.limit != null){
                    return false
                }
                const obj = {...element._doc}
                obj.discountedPrice = (element.price / 100) * item.percentage
                obj.discountPercentage = item.percentage
                productArray.push(obj);
                i++
                return true
            })
            if(req.body.limit <= i && req.body.limit != null){
                return false
            }
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