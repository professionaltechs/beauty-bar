const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref : "User",
        required : [true, "Id is required"]
    },
    images: {
        type: [String],
        required: [true, "image is required"]
    },
    text : {
        type : String,
        required : true
    },
    taggedProducts : {
        type : [Schema.Types.ObjectId],
        required : false
    },
    taggedProductsLink : [{
        link: {type: String},
        title: {type: String},
        description: {type: String},
    }],
    like: {
        type : Number,
        required : false
    },
    hashtag : {
        type : String,
        required : false
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

module.exports = mongoose.model("Post", postSchema )