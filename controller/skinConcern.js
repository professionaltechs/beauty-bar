const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SkinConcern = require("../model/skinConcern");


exports.create = async (req, res) => {
    try {
        const skinConcern = await new SkinConcern(req.body);
    
        skinConcern.save().then(response => {
            res.json({
                message: "skinConcern created succesfully"
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
    const skinConcern = await SkinConcern.findOne({_id: req.body.id});

    res.json({
        skinConcern 
    })
}

exports.getAll = async (req, res) => {
    const skinConcern = await SkinConcern.find({});

    res.json({
        message: skinConcern
    })
}

exports.update = async (req, res) => {
    try {
        const skinConcern = await SkinConcern.findOne({_id: req.body.id});
    
        skinConcern.title = req.body.title;
    
        skinConcern.save().then(response => {
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
        const skinConcern = await SkinConcern.findOne({_id: req.body.id});
    
        skinConcern.isDeleted = 1;
        skinConcern.save().then(response => {
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