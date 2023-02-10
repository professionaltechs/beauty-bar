const Discount = require("../model/discount");

exports.getDiscountById = async (req, res) =>{
    try {
        const discount = await Discount.findOne({_id: req.body.id, isDeleted: {$ne: 1}})
        res.status(200).json({message : discount})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.getAllDiscounts = async (req, res) =>{
    try {
        const discount = await Discount.find({isDeleted: {$ne: 1}})
        res.status(200).json({message : discount})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}