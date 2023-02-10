const SkinType = require("../model/skinType");

exports.getSkinTypeById = async (req, res) => {
    const skinType = await SkinType.findOne({_id: req.body.id, isDeleted: {$ne: 1}});

    res.json({
        skinType 
    })
}

exports.getAllSkinTypes = async (req, res) => {
    const skinType = await SkinType.find({isDeleted: {$ne: 1}}, {__v: 0, createdAt: 0, updatedAt: 0, isDeleted: 0, isActive: 0});

    res.json({
        message: skinType
    })
}