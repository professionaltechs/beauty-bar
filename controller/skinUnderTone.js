const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SkinUnderTone = require("../model/skinUnderTone");


exports.createSkinUnderTone = async (req, res) => {
    try {
        const skinUnderTone = await new SkinUnderTone(req.body);
    
        skinUnderTone.save().then(response => {
            res.json({
                id: response._id,
                message: "SkinUnderTone created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

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

exports.updateSkinUnderToneById = async (req, res) => {
    try {
        const skinUnderTone = await SkinUnderTone.findOne({_id: req.body.id});
    
        skinUnderTone.title = req.body.title || skinUnderTone.title;
        skinUnderTone.colorCode = req.body.colorCode || skinUnderTone.colorCode;
    
        skinUnderTone.save().then(response => {
            res.json({
                skinUnderTone,
                message: "updated succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

exports.deleteSkinUnderToneById = async (req, res) => {
    try {
        const skinUnderTone = await SkinUnderTone.findOne({_id: req.body.id});
    
        skinUnderTone.isDeleted = 1;
        skinUnderTone.save().then(response => {
            console.log(response)
            res.json({
                message: "deleted succesfully"
            })
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}