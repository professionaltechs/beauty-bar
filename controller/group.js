// const Group = require("../model/group");

// exports.get = async (req, res) => {
//     try {
//         const group = await Group.findOne({_id: req.body.id, isDeleted: {$ne: 1}});
    
//         res.status(200).json({
//             message: group
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

// exports.getAll = async (req, res) => {
//     try {
//         const group = await Group.find({isDeleted: {$ne: 1}});
    
//         res.status(200).json({
//             message: group
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }