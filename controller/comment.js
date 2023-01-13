const Comment = require("../model/comment");

exports.create = async (req , res) =>{
    try {
        const comment = await new Comment(req.body)
        comment.save().then(()=>{
            res.status(200).json({
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

exports.get = async (req, res) =>{
    try {
        const comment = await Comment.findOne({_id: req.body.id})
        res.status(200).json({message : comment})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.getAll = async (req, res) =>{
    try {
        const comment = await Comment.find({})
        res.status(200).json({message : comment})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.update = async (req, res) =>{
    try {
        const comment = await Comment.findOne({_id : req.body.id})
      
        comment.userId = req.body.userId || comment.userId;
        comment.postId = req.body.postId || comment.postId;
        comment.commentId = req.body.commentId || comment.commentId;
        comment.text = req.body.text || comment.text;

        comment.save().then(()=>{
            res.status(200).json({message : "comment updated"})
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}

exports.delete = async (req, res) =>{
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