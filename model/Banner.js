const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const banner = Schema({
    image: {
        type: String,
        required: [true, "image is required"]
    },
    isActive: {
        type: Number,
        required: false,
        default: 1,
        min: 0,
        max: 1
    },
    isDeleted: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 1
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Banner", banner);