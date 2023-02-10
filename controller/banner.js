const Banner = require("../model/Banner");

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