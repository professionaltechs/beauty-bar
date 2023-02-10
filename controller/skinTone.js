const SkinTone = require("../model/skinTone");

exports.getSkinToneById = async (req, res) => {
    const skinTone = await SkinTone.findOne({_id: req.body.id, isDeleted: {$ne: 1}});

    res.json({
        skinTone 
    })
}

exports.getAllSkinTones = async (req, res) => {
    const skinTone = await SkinTone.find({isDeleted: {$ne: 1}}, {__v: 0, createdAt: 0, updatedAt: 0, isDeleted: 0, isActive: 0});

    res.json({
        message: skinTone
    })
}