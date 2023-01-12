const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SkinType = require("../model/skinType");


exports.create = async (req, res) => {
    try {
        const skinType = await new SkinType(req.body);
    
        skinType.save().then(response => {
            res.json({
                message: "skinType created succesfully"
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
    const skinType = await SkinType.findOne({_id: req.body.id});

    res.json({
        skinType 
    })
}

exports.getAll = async (req, res) => {
    const skinType = await SkinType.find({});

    res.json({
        message: skinType
    })
}

exports.update = async (req, res) => {
    try {
        const skinType = await SkinType.findOne({_id: req.body.id});
    
        skinType.name = req.body.name;
        skinType.image = req.body.image;
    
        skinType.save().then(response => {
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
        const skinType = await SkinType.findOne({_id: req.body.id});
    
        skinType.isDeleted = 1;
        skinType.save().then(response => {
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