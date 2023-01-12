const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SkinUnderTone = require("../model/skinUnderTone");


exports.create = async (req, res) => {
    try {
        const skinUnderTone = await new SkinUnderTone(req.body);
    
        skinUnderTone.save().then(response => {
            res.json({
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

exports.get = async (req, res) => {
    const skinUnderTone = await SkinUnderTone.findOne({_id: req.body.id});

    res.json({
        skinUnderTone 
    })
}

exports.getAll = async (req, res) => {
    const skinUnderTone = await SkinUnderTone.find({});

    res.json({
        message: skinUnderTone
    })
}

exports.update = async (req, res) => {
    try {
        const skinUnderTone = await SkinUnderTone.findOne({_id: req.body.id});
    
        skinUnderTone.name = req.body.name;
        skinUnderTone.image = req.body.image;
    
        skinUnderTone.save().then(response => {
            res.json({
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

exports.delete = async (req, res) => {
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