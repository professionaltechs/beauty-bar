const PopularProduct =  require("../model/popularProduct");

exports.create = async (req , res) =>{
    try {
        const popularProduct = await new PopularProduct(req.body)
        popularProduct.save().then(()=>{
            res.status(200).json({
                message : "PopularProduct created"
            })
        })    
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message || "not created"
        })
    }  
}


exports.get = async (req, res) =>{
    try {
        const popularProduct = await PopularProduct.findOne({_id: req.body.id})
        res.status(200).json({message : popularProduct})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}
exports.getAll = async (req, res) =>{
    try {
        const popularProduct = await PopularProduct.find({})
        res.status(200).json({message : popularProduct})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.update = async (req, res) =>{
    try {
        const popularProduct = await PopularProduct.findOne({_id : req.body.id})
      
        popularProduct.productId = req.body.productId || popularProduct.productId;

        post.save().then(()=>{
            res.status(200).json({message : "post updated"})
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}



exports.delete = async (req, res) =>{
    try {
        const popularProduct = await PopularProduct.findOne({_id: req.body.id})
        popularProduct.isDeleted = 1
        popularProduct.save().then(()=>{
            res.status(200).json({message : "post deleted"})
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}