const Brand = require('../model/brand')

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