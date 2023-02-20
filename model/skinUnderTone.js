const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skinUnderToneSchema = Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    colorCode: {
        type: String,
        required: [true, "color code is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
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

module.exports = mongoose.model("SkinUnderTone", skinUnderToneSchema);