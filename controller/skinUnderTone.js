const SkinUnderTone = require("../model/skinUnderTone");

exports.getSkinUnderToneById = async (req, res) => {
    const skinUnderTone = await SkinUnderTone.findOne({_id: req.body.id, isDeleted: {$ne: 1}}, {__v: 0, createdAt: 0, updatedAt: 0, isDeleted: 0, isActive: 0});

    res.json({
        skinUnderTone 
    })
}

exports.getAllSkinUnderTones = async (req, res) => {
    const skinUnderTone = await SkinUnderTone.find({gender: req.body.gender, isDeleted: {$ne: 1}}, {__v: 0, createdAt: 0, updatedAt: 0, isDeleted: 0, isActive: 0});

    res.json({
        message: skinUnderTone
    })
}