const SkinConcern = require("../model/skinConcern");

exports.createSkinConcern = async (req, res) => {
    try {
        const skinConcern = await new SkinConcern(req.body);
    
        skinConcern.save().then(response => {
            res.json({
                id: response._id,
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

exports.updateSkinConcernById = async (req, res) => {
    try {
        const skinConcern = await SkinConcern.findOne({_id: req.body.id});
    
        skinConcern.title = req.body.title;
    
        skinConcern.save().then(response => {
            res.json({
                skinConcern,
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

exports.deleteSkinConcernById = async (req, res) => {
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