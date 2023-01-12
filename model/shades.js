const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shadesSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    colorShade : {
        type : String,
        required : true
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
    {timestamps:true}
);

module.exports = mongoose.model("Shades", shadesSchema)