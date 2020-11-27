var mongoose = require("mongoose");

var likeSchema = new mongoose.Schema({
    dateoflike: Date,
    author: {
            id: {
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
    }
});

module.exports = mongoose.model("Like", likeSchema);