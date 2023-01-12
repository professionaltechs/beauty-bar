const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skinConcernSchema = Schema({
    title: {
        type: String,
        required: [true, "name is required"],
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

module.exports = mongoose.model("SkinConcern", skinConcernSchema);