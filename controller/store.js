const Store = require("../model/store");


exports.createStore = async (req, res) => {
    try {
        const store = await new Store(req.body);
    
        store.save().then(response => {
            res.json({
                id: response._id,
                message: "store created succesfully"
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: error
        })
    }
}

exports.getStoreById = async (req, res) => {
    const store = await Store.findOne({_id: req.body.id, isDeleted: {$ne: 1}});

    res.json({
        store 
    })
}

exports.getAllStores = async (req, res) => {
    const store = await Store.find({isDeleted: {$ne: 1}});

    res.json({
        message: store
    })
}

exports.updateStoreById = async (req, res) => {
    try {
        const store = await Store.findOne({_id: req.body.id});
    
        store.title = req.body.title || store.title;
        store.image = req.body.image || store.image;
    
        store.save().then(response => {
            res.json({
                store,
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

exports.deleteStoreById = async (req, res) => {
    try {
        const store = await Store.findOne({_id: req.body.id});
    
        store.isDeleted = 1;
        store.save().then(response => {
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