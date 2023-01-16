const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    // email: {
    //     type: String,
    //     required: [true, "email is required"],
    // },
    // password: {
    //     type: String,
    //     required: [true, "password is required"],
    // },
    skinTypeId: {
        type: Schema.Types.ObjectId,
        ref: "SkinType",
        required: [false, "skinTypeId is required"],
    },
    skinToneId: {
        type: Schema.Types.ObjectId,
        ref: "SkinTone",
        required: [false, "SkinToneId is required"],
    },
    skinUnderToneId: {
        type: Schema.Types.ObjectId,
        ref: "SkinUnderTone",
        required: [false, "SkinUnderToneId is required"],
    },
    skinConcernId: {
        type: [Schema.Types.ObjectId],
        ref: "SkinConcern",
        required: [false, "SkinConcernId is required"],
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    },
    aboutMe: {
        type: String,
        required: [false]
    },
    profileImage: {
        type: String,
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