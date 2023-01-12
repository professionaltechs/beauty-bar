const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Banner = require("../model/Banner");


exports.create = async (req, res) => {
    try {
        const banner = await new Banner(req.body);
    
        banner.save().then(response => {
            res.json({
                message: "Banner created succesfully"
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
    const banner = await Banner.findOne({_id: req.body.id});

    res.json({
        banner 
    })
}

exports.getAll = async (req, res) => {
    const banner = await Banner.find({});

    res.json({
        message: banner
    })
}

exports.update = async (req, res) => {
    try {
        const banner = await Banner.findOne({_id: req.body.id});
    
        banner.image = req.body.image;
    
        banner.save().then(response => {
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
        const banner = await Banner.findOne({_id: req.body.id});
    
        banner.isDeleted = 1;
        banner.save().then(response => {
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