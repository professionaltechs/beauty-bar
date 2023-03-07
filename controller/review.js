const Product = require("../model/product");
const Review = require("../model/review");

exports.createReview = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.body.productId});
        const review = await new Review(req.body);

        if(product.rating == 0){
            product.rating = (req.body.rating + product.rating);
        }else{
            product.rating = (req.body.rating + product.rating) / 2;
        }
        product.save();

        review.save().then(response => {
            res.status(200).json({
                id: response._id,
                message: "review created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

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

exports.updateReviewById = async (req, res) => {
    try {
        const review = await Review.findOne({_id: req.body.id});
        if(!review){
            res.status(404).json({
                message: "review not found with given id "
            });
        }
    
        // review.userId = req.body.userId || review.userId;
        // review.productId = req.body.productId || review.productId;
        review.rating = req.body.rating || review.rating;
        review.comment = req.body.comment || review.comment;
    
        review.save().then(response => {
            res.status(200).json({
                review,
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

exports.deleteReviewById = async (req, res) => {
    try {
        const review = await Review.findOne({_id: req.body.id});
        if(!review){
            res.status(404).json({
                message: "review not found with given id "
            });
        }
    
        review.isDeleted = 1;
        review.save().then(response => {
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