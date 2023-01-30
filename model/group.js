const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = Schema({
    title: {
        type: String,
        required: [true, "name is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    description: {
        type: String,
        required: [true, "image is required"],
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

module.exports = mongoose.model("Group", groupSchema)