const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = Schema({
    email: {
        type: String,
        required: [true, "Phone is Required"],
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    }
})

module.exports = mongoose.model("Admin", AdminSchema)