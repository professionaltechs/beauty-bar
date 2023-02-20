const SkinConcern = require("../model/skinConcern");

exports.getSkinConcernById = async (req, res) => {
    const skinConcern = await SkinConcern.findOne({_id: req.body.id, isDeleted: {$ne: 1}}, {__v: 0, createdAt: 0, updatedAt: 0, isDeleted: 0, isActive: 0});

    res.json({
        skinConcern 
    })
}

exports.getAllSkinConcerns = async (req, res) => {
    const skinConcern = await SkinConcern.find({gender: req.body.gender, isDeleted: {$ne: 1}}, {__v: 0, createdAt: 0, updatedAt: 0, isDeleted: 0, isActive: 0});

    res.json({
        message: skinConcern
    })
}