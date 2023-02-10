const SkinUnderTone = require("../model/skinUnderTone");

exports.getSkinUnderToneById = async (req, res) => {
    const skinUnderTone = await SkinUnderTone.findOne({_id: req.body.id, isDeleted: {$ne: 1}});

    res.json({
        skinUnderTone 
    })
}

exports.getAllSkinUnderTones = async (req, res) => {
    const skinUnderTone = await SkinUnderTone.find({isDeleted: {$ne: 1}});

    res.json({
        message: skinUnderTone
    })
}