const Brand = require('../model/brand')

exports.createBrand = async (req, res)=>{
    try {
        const brand = await new Brand(req.body)
        brand.save().then(()=>{
            res.status(200).json({
                id: brand._id,
                message : "updated brand"
            })
        })
    } catch (error) {
    console.log(error)
    res.json({
        message : error.message
    })    
    }
}

exports.getBrandById = async (req , res)=>{
    try {
        const brand = await Brand.findOne({_id : req.body.id, isDeleted: {$ne: 1}})
        res.status(200).json({message : brand})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}
exports.getAllBrands = async (req , res)=>{
    try {
        const brand = await Brand.find({isDeleted: {$ne: 1}})
        res.status(200).json({message : brand})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.updateBrandById = async (req , res)=>{
    try {
        const brand = await Brand.findOne({_id : req.body.id})

        brand.image = req.body.image || brand.image;
        brand.title = req.body.title || brand.title;
        brand.save().then(()=>{
            res.status(200).json({
                brand,
                message : "brand updated"
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : error.message
        })
    }
}


exports.deleteBrandById = async (req , res)=>{
    try {
        const brand = await Brand.findOne({_id : req.body.id})
        brand.isDeleted = 1
        brand.save().then(()=>{
            res.status(200).json({message : "delted"})
        })
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}