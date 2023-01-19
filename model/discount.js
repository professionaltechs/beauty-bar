const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discountSchema = Schema({
    percentage: {
        type: Number,
        required: [true, "percentage is required"]
    },
    validity: {
        type: Date,
        required: [true, "validity is required"]
    },
    productIds: {
        type: [Schema.Types.ObjectId],
        ref: "Product"
    }
})

module.exports = mongoose.model("Discount", discountSchema)