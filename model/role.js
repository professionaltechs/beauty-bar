const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    permissionIds: {
        type: [Schema.Types.ObjectId],
        ref: "Permission",
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

module.exports = mongoose.model("Role", roleSchema);