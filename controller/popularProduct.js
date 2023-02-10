const PopularProduct =  require("../model/popularProduct");


exports.get = async (req, res) =>{
    try {
        const popularProduct = await PopularProduct.findOne({_id: req.body.id, isDeleted: {$ne: 1}})
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
        const popularProduct = await PopularProduct.find({isDeleted: {$ne: 1}})
        res.status(200).json({message : popularProduct})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}