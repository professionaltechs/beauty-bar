
// const Post = require('../model/post');


// exports.get = async (req, res) =>{
//     try {
//         const post = await Post.findOne({_id: req.body.id, isDeleted: {$ne: 1}})
//         res.status(200).json({message : post})
//     } catch (error) {
//         console.log(error)
//         res.json({
//             message : error.message
//         })
//     }
// }
// exports.getAll = async (req, res) =>{
//     try {
//         const post = await Post.find({isDeleted: {$ne: 1}})
//         res.status(200).json({message : post})
//     } catch (error) {
//         console.log(error)
//         res.json({
//             message : error.message
//         })
//     }
// }