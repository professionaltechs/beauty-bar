const Discount = require("../model/discount");

exports.createDiscount = async (req , res) =>{
    try {
        const discount = await new Discount(req.body)
        discount.save().then((response)=>{
            res.status(200).json({
                id: response._id,
                message : "discount created"
            })
        })    
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message || "not created"
        })
    }  
}

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

exports.updateDiscountById = async (req, res) =>{
    try {
        const discount = await Discount.findOne({_id : req.body.id})
      
        discount.percentage = req.body.percentage || discount.percentage;
        discount.validity = req.body.validity || discount.validity;
        discount.productIds = req.body.productIds || discount.productIds;

        discount.save().then(()=>{
            res.status(200).json({
                discount,
                message : "discount updated"
            })
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}

exports.deleteDiscountById = async (req, res) =>{
    try {
        const discount = await Discount.findOne({_id: req.body.id})
        discount.isDeleted = 1
        discount.save().then(()=>{
            res.status(200).json({message : "discount deleted"})
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}

exports.insertProductsInDiscountById = async (req, res) => {
    try {
        const discount = await Discount.findOne({_id: req.body.id})
        discount.productIds = [...discount.productIds, ...req.body.productIds]
        discount.save().then(()=>{
            res.status(200).json({
                discount,
                message : "Inserted Successfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }
}