const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    isActive: {
        type: Number,
        required: false,
        default: 0,
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

module.exports = mongoose.model("Category", categorySchema)