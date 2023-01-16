const Review = require("../model/review");

exports.create = async (req, res) => {
    try {
        const review = await new Review(req.body);
    
        review.save().then(response => {
            res.status(200).json({
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

exports.get = async (req, res) => {
    try {
        const review = await Review.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
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

exports.getAll = async (req, res) => {
    try {
        const review = await Review.find({isDeleted: {$ne: 1}});
    
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

exports.update = async (req, res) => {
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

exports.delete = async (req, res) => {
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