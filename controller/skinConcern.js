const SkinConcern = require("../model/skinConcern");

exports.getSkinConcernById = async (req, res) => {
    const skinConcern = await SkinConcern.findOne({_id: req.body.id, isDeleted: {$ne: 1}});

    res.json({
        skinConcern 
    })
}

exports.getAllSkinConcerns = async (req, res) => {
    const skinConcern = await SkinConcern.find({isDeleted: {$ne: 1}});

    res.json({
        message: skinConcern
    })
}