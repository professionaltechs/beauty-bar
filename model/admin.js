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
    },
    fistName: {
        type: String,
        required: [true, "fistName is Required"],
    },
    lastName: {
        type: String,
        required: [true, "lastName is Required"],
    }
})

module.exports = mongoose.model("Admin", AdminSchema)