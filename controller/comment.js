const Comment = require("../model/comment");

exports.createComment = async (req , res) =>{
    try {
        const comment = await new Comment(req.body)
        comment.save().then((response)=>{
            res.status(200).json({
                id: response._id,
                message : "comment created"
            })
        })    
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message || "not created"
        })
    }  
}

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

exports.updateCommentById = async (req, res) =>{
    try {
        const comment = await Comment.findOne({_id : req.body.id})
      
        comment.userId = req.body.userId || comment.userId;
        comment.postId = req.body.postId || comment.postId;
        comment.commentId = req.body.commentId || comment.commentId;
        comment.text = req.body.text || comment.text;

        comment.save().then(()=>{
            res.status(200).json({
                comment,
                message : "comment updated"
            })
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}

exports.deleteCommentById = async (req, res) =>{
    try {
        const comment = await Comment.findOne({_id: req.body.id})
        comment.isDeleted = 1
        comment.save().then(()=>{
            res.status(200).json({message : "comment deleted"})
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}