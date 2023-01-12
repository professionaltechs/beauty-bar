const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SkinTone = require("../model/skinTone");


exports.create = async (req, res) => {
    try {
        const skinTone = await new SkinTone(req.body);
    
        skinTone.save().then(response => {
            res.json({
                message: "skinTone created succesfully"
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
    const skinTone = await SkinTone.findOne({_id: req.body.id});

    res.json({
        skinTone 
    })
}

exports.getAll = async (req, res) => {
    const skinTone = await SkinTone.find({});

    res.json({
        message: skinTone
    })
}

exports.update = async (req, res) => {
    try {
        const skinTone = await SkinTone.findOne({_id: req.body.id});
    
        skinTone.name = req.body.name;
        skinTone.image = req.body.image;
    
        skinTone.save().then(response => {
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
        const skinTone = await SkinTone.findOne({_id: req.body.id});
    
        skinTone.isDeleted = 1;
        skinTone.save().then(response => {
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