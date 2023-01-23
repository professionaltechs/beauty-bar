const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = Schema({
    name: {
        type: String,
        required: [true, "Store Name is Required"],
    },
    coverImage: {
        type: String,
    },
    image: {
        type: String,
    },
    address: {
        type: String,
    },
    description: {
        type: String,
    },
})

module.exports = mongoose.model("Store", StoreSchema)