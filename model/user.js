const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    isProfileComplete: {
        type: Number,
        default: 0,
        min: 0,
        max: 1
    },
    phone: {
        type: String,
    },
    firebase_uid: {
        type: String
    },
    loginMode: {
        type: String
    },
    name: {
        type: String,
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    aboutMe: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    skinTypeId: {
        type: Schema.Types.ObjectId,
        ref: "SkinType",
    },
    skinToneId: {
        type: Schema.Types.ObjectId,
        ref: "SkinTone",
    },
    skinUnderToneId: {
        type: Schema.Types.ObjectId,
        ref: "SkinUnderTone",
    },
    skinConcernIds: {
        type: [Schema.Types.ObjectId],
        ref: "SkinConcern",
    },
    socialMedia: {
        instagram: {type: String},
        facebook: {type: String},
        youtube: {type: String}
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
);


module.exports = mongoose.model("User", UserSchema);