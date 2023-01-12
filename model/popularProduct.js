const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const popularProductSchema = Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: [true, "productId is required"],
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

module.exports = mongoose.model("PopularProduct", popularProductSchema)