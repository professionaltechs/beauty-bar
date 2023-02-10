const Product = require("../model/product");
const Review = require("../model/review");

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findOne({_id: req.body.id, isDeleted: {$ne: 1}}).populate("userId productId");
    
        res.status(200).json({
            message: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getAllReviews = async (req, res) => {
    try {
        const review = await Review.find({isDeleted: {$ne: 1}}).populate("userId productId");
    
        res.status(200).json({
            message: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}