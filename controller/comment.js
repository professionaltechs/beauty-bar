const Comment = require("../model/comment");

exports.getCommentById = async (req, res) =>{
    try {
        const comment = await Comment.findOne({_id: req.body.id, isDeleted: {$ne: 1}})
        res.status(200).json({message : comment})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.getAllComments = async (req, res) =>{
    try {
        const comment = await Comment.find({isDeleted: {$ne: 1}})
        res.status(200).json({message : comment})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}