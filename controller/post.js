
const Post = require('../model/post');

exports.create = async (req , res) =>{
    try {
        const post = await new Post(req.body)
        post.save().then((response)=>{
            res.status(200).json({
                id:  response._id,
                message : "post created"
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
        const post = await Post.findOne({_id: req.body.id})
        res.status(200).json({message : post})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}
exports.getAll = async (req, res) =>{
    try {
        const post = await Post.find({})
        res.status(200).json({message : post})
    } catch (error) {
        console.log(error)
        res.json({
            message : error.message
        })
    }
}

exports.update = async (req, res) =>{
    try {
        const post = await Post.findOne({_id : req.body.id})
      
        post.userId = req.body.userId || post.userId;
        post.images = req.body.images || post.images;
        post.text = req.body.text || post.text;
        post.taggedProducts = req.body.taggedProducts || post.taggedProducts;
        post.taggedProductsLink = req.body.taggedProductsLink || post.taggedProductsLink;
        post.like = req.body.like || post.like;
        post.hashtag = req.body.hashtag || post.hashtag;

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
        const post = await Post.findOne({_id: req.body.id})
        post.isDeleted = 1
        post.save().then(()=>{
            res.status(200).json({message : "post deleted"})
        })
    } catch (error) {
        console.log(error)
        res.json({message : error.message})
    }
}





