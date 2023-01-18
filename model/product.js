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
        required: false,
        min: 0,
        max: 5,
        default: 0
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
        ref: "Category",
        required: [true, "categoryId is required"]
    },
    subCategoryId: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
        required: [true, "SubCategoryId is required"]
    },
    brandId: {
        type: Schema.Types.ObjectId,
        ref: "Brand",
        required: [true, "BrandId is required"]
    },
    skinTypeId: {
        type: Schema.Types.ObjectId,
        ref: "SkinType",
    },
    skinToneId: {
        type: Schema.Types.ObjectId,
        ref: "SkinTone",
    },
    skinUnderToneId: {
        type: Schema.Types.ObjectId,
        ref: "SkinUnderTone",
    },
    skinConcernId: {
        type: [Schema.Types.ObjectId],
        ref: "SkinConcern",
    },
    shades: {
        type: [Schema.Types.ObjectId],
        ref: "Shades"
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