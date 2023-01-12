const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    skinTypeId: {
        type: Schema.Types.ObjectId,
        ref: "SkinType",
        required: [false, "skinTypeId is required"],
    },
    age: {
        type: String,
        required: [true, "age is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
    },
    phone: {
        type: String,
        required: [true, "name is required"]
    },
    aboutMe: {
        type: String,
        required: [false]
    },
    profileImage: {
        type: String,
        required: [true, "profileImage is required"]
    },
    socialMedia: {
        instagram: {type: String},
        facebook: {type: String},
        youtube: {type: String}
    },
    userId: {
        type: String,
        required: false
    },
    followers: {
        type: Number,
        required: false
    },
    posts: {
        type: Number,
        required: false
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


module.exports = mongoose.model("User", UserSchema);