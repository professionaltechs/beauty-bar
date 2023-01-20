const Banner = require("../model/Banner");

exports.createBanner = async (req, res) => {
    try {
        const banner = await new Banner(req.body);
    
        banner.save().then(response => {
            res.json({
                id: response._id,
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

exports.getBannerById = async (req, res) => {
    const banner = await Banner.findOne({_id: req.body.id, isDeleted: {$ne: 1}});

    res.json({
        banner 
    })
}

exports.getAllBanners = async (req, res) => {
    const banner = await Banner.find({isDeleted: {$ne: 1}});

    res.json({
        message: banner
    })
}

exports.updateBannerById = async (req, res) => {
    try {
        const banner = await Banner.findOne({_id: req.body.id});
    
        banner.image = req.body.image;
    
        banner.save().then(response => {
            res.json({
                banner,
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

exports.deleteBannerById = async (req, res) => {
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