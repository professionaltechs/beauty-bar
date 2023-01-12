const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    userId:{
        type: Schema.Types.ObjectId,
        ref : "User",
        required : [true, "Id is required"]
    },
    text : {
        type : String,
        required : true
    },
    postId : {
        type: Schema.Types.ObjectId,
        ref : "Post",
        required : [true , "post id is required"]
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
module.exports = mongoose.model("Comments", commentSchema)