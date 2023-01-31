const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permissionSchema = Schema({
    title: {
        type: String,
        required: [true, "title is required"],
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

module.exports = mongoose.model("Permission", permissionSchema)