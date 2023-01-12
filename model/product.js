const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    images: {
        type: [String],
        required: [true, "image required"]
    },
    title: {
        type: String,
        required: [true, "title required"],
    },
    price: {
        type: Number,
        required: [true, "price required"]
    },
    rating: {
        type: Number,
        required: false
    },
    description: {
        images: {type: [String]},
        text: {type: String},
        videoUrl: {type: String} 
    },
    ingredients: {
        type: String,
        required: [true, "ingredients required"]
    },
    discount: {
        type: Number,
        required: false
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Categories",
        required: [true, "categoryId is required"]
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
);

module.exports = mongoose.model("Product", productSchema)