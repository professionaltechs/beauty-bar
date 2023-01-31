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
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: "Role"
    }
})

module.exports = mongoose.model("Store", StoreSchema)