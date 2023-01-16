const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    subCategories: {
        type: [String]
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

module.exports = mongoose.model("Categories", categoriesSchema)