const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref : "User",
        required : [true, "review author Id is required"],
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref : "Product",
        required : [true, "review product Id is required"],
    },
    rating:{
        type : Number,
        required : true,
        default: 0,
        min: 0,
        max: 5,
    },
    comment :{
        type : String,
        required : false,
    },
    isActive: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 1,
    },
    isDeleted: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 1,
    },
},
    { timestamps: true }
)
module.exports = mongoose.model("Review", reviewSchema)