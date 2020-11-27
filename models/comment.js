var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    text: String,
    name: String,
    dateofcmt: Date,
    author: {
            id: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
    }
});

module.exports = mongoose.model("Comment", commentSchema);